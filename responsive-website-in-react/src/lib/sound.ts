export type SoundName = "click" | "transition"

const SOURCES: Record<SoundName, string> = {
  click: "/sounds/mixkit-negative-tone-interface-tap-2569.wav",
  transition: "/sounds/mixkit-arrow-whoosh-1491.wav",
}

const GAINS: Record<SoundName, number> = {
  click: 0.3,
  transition: 0.4,
}

const COOLDOWNS: Record<SoundName, number> = {
  click: 30,
  transition: 60,
}

const MAX_CONCURRENT: Record<SoundName, number> = {
  click: 6,
  transition: 4,
}

const ESSENTIALS: SoundName[] = ["click", "transition"]
const DEFERRED: SoundName[] = []

const QUEUE_AFTER: Partial<Record<SoundName, SoundName>> = {
  transition: "click",
}
const QUEUE_PAD_MS = 20
const MAX_QUEUE_DELAY = 3000
const RESUME_PAD_MS = 150

const INTERRUPTS: Partial<Record<SoundName, SoundName>> = {
  click: "transition",
  transition: "transition",
}

const ENGINE_VERSION = "v4"
const DEBUG = process.env.NODE_ENV === "development"

function log(...args: unknown[]) {
  if (DEBUG) console.log("[sound]", ...args)
}

log("engine", ENGINE_VERSION)

let context: AudioContext | null = null
let master: GainNode | null = null
let enabled = true

const buffers = new Map<SoundName, AudioBuffer>()
const pending = new Map<SoundName, Promise<AudioBuffer | null>>()
const lastPlayed = new Map<SoundName, number>()
const active = new Map<SoundName, number>()
const activeEnds = new Map<SoundName, number>()

interface ActiveNode {
  source: AudioBufferSourceNode
  gain: GainNode
}
const activeNodes = new Map<SoundName, Set<ActiveNode>>()

function ensureContext(): AudioContext | null {
  if (typeof window === "undefined") return null
  if (context) return context

  const AudioContextClass =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext

  if (!AudioContextClass) return null

  context = new AudioContextClass({ latencyHint: "interactive" })
  master = context.createGain()
  master.gain.value = enabled ? 0.9 : 0
  master.connect(context.destination)

  return context
}

function loadSound(name: SoundName): Promise<AudioBuffer | null> {
  const existing = buffers.get(name)
  if (existing) return Promise.resolve(existing)

  const inFlight = pending.get(name)
  if (inFlight) return inFlight

  const audioContext = ensureContext()
  if (!audioContext) return Promise.resolve(null)

  const promise = fetch(SOURCES[name], { cache: "force-cache" })
    .then((response) => {
      if (!response.ok) throw new Error(`Unable to load ${name} sound`)
      return response.arrayBuffer()
    })
    .then((data) => audioContext.decodeAudioData(data))
    .then((buffer) => {
      buffers.set(name, buffer)
      return buffer
    })
    .catch(() => null)
    .finally(() => {
      pending.delete(name)
    })

  pending.set(name, promise)
  return promise
}

function stopSound(name: SoundName, audioContext: AudioContext) {
  const nodes = activeNodes.get(name)
  if (!nodes || nodes.size === 0) return

  const now = audioContext.currentTime
  for (const node of nodes) {
    try {
      node.gain.gain.cancelScheduledValues(now)
      node.gain.gain.setTargetAtTime(0.0001, now, 0.015)
      node.source.stop(now + 0.05)
    } catch {}
  }
  nodes.clear()
  active.set(name, 0)
  activeEnds.delete(name)
  log("interrupted", name)
}

function startPlayback(
  name: SoundName,
  audioContext: AudioContext,
  buffer: AudioBuffer,
) {
  if (!master) return

  const interrupt = INTERRUPTS[name]
  if (interrupt) stopSound(interrupt, audioContext)

  const now = audioContext.currentTime
  const peak = GAINS[name]
  const gain = audioContext.createGain()
  const source = audioContext.createBufferSource()

  gain.gain.setValueAtTime(0, now)
  gain.gain.linearRampToValueAtTime(peak, now + 0.004)
  gain.gain.setValueAtTime(
    peak,
    Math.max(now + 0.004, now + buffer.duration - 0.018),
  )
  gain.gain.linearRampToValueAtTime(0.0001, now + buffer.duration)

  source.buffer = buffer
  source.connect(gain)
  gain.connect(master)

  const entry = { source, gain }
  let nodes = activeNodes.get(name)
  if (!nodes) {
    nodes = new Set()
    activeNodes.set(name, nodes)
  }
  nodes.add(entry)

  active.set(name, (active.get(name) ?? 0) + 1)
  lastPlayed.set(name, performance.now())
  activeEnds.set(name, performance.now() + buffer.duration * 1000)

  source.onended = () => {
    nodes?.delete(entry)
    active.set(name, Math.max(0, (active.get(name) ?? 1) - 1))
    source.disconnect()
    gain.disconnect()
  }

  source.start(now)
  log("start", name, `${Math.round(buffer.duration * 1000)}ms`)
}

export function setSoundEnabled(value: boolean) {
  enabled = value

  if (!context || !master) {
    if (value) ensureContext()
    return
  }

  const now = context.currentTime
  master.gain.cancelScheduledValues(now)
  master.gain.setTargetAtTime(value ? 0.9 : 0, now, 0.015)

  if (!value) {
    void context.suspend().catch(() => {})
  }
}

export function unlockSound() {
  const audioContext = ensureContext()
  if (!audioContext || audioContext.state !== "suspended") return
  void audioContext.resume().catch(() => {})
}

export function preloadSounds(names: SoundName[]) {
  return Promise.all(names.map(loadSound))
}

export function preloadEssentials() {
  return preloadSounds(ESSENTIALS)
}

export function preloadDeferred() {
  return preloadSounds(DEFERRED)
}

function remainingMs(name: SoundName): number {
  const end = activeEnds.get(name)
  if (end === undefined) return 0
  const remaining = end - performance.now()
  return remaining > 0 ? remaining : 0
}

export function playSound(name: SoundName) {
  if (!enabled) return

  const audioContext = ensureContext()
  if (!audioContext) return

  const buffer = buffers.get(name)
  if (!buffer) {
    void loadSound(name)
    return
  }

  const now = performance.now()
  if (now - (lastPlayed.get(name) ?? 0) < COOLDOWNS[name]) return
  if ((active.get(name) ?? 0) >= MAX_CONCURRENT[name]) return

  // Reserve the sound's end time up front so sounds queued behind it (e.g.
  // the transition whoosh after a nav click) wait even while the audio
  // context is still resuming after the first user gesture.
  activeEnds.set(name, now + buffer.duration * 1000 + RESUME_PAD_MS)
  log("trigger", name, `state=${audioContext.state}`)

  const play = () => {
    if (!enabled) return

    const timestamp = performance.now()
    if (timestamp - (lastPlayed.get(name) ?? 0) < COOLDOWNS[name]) {
      log("dropped", name, "cooldown")
      return
    }
    if ((active.get(name) ?? 0) >= MAX_CONCURRENT[name]) {
      log("dropped", name, "concurrent")
      return
    }

    startPlayback(name, audioContext, buffer)
  }

  const blocking = QUEUE_AFTER[name]
  const deadline = now + MAX_QUEUE_DELAY

  const run = () => {
    if (!enabled) return

    const wait = blocking ? remainingMs(blocking) : 0
    if (wait > 0 && performance.now() + wait <= deadline) {
      log("queued", name, `wait=${Math.round(wait)}ms`)
      window.setTimeout(run, wait + QUEUE_PAD_MS)
      return
    }

    if (audioContext.state === "running") {
      play()
      return
    }

    log("waiting-resume", name)
    void audioContext
      .resume()
      .then(() => {
        if (audioContext.state === "running") run()
      })
      .catch(() => {})
  }

  run()
}

export function enableSound() {
  setSoundEnabled(true)
  unlockSound()
  void preloadEssentials()
}

export function disableSound() {
  setSoundEnabled(false)
}
