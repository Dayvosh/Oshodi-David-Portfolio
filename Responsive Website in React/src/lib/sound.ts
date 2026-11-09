export type SoundName = 'click' | 'transition'

const SOURCES: Record<SoundName, string> = {
  click: '/sounds/click.m4a',
  transition: '/sounds/mixkit-page-turn-single-1104.wav',
}

const GAINS: Record<SoundName, number> = {
  click: 0.3,
  transition: 0.4,
}

const COOLDOWNS: Record<SoundName, number> = {
  click: 70,
  transition: 180,
}

const MAX_CONCURRENT: Record<SoundName, number> = {
  click: 2,
  transition: 1,
}

const ESSENTIALS: SoundName[] = ['click', 'transition']
const DEFERRED: SoundName[] = []

let context: AudioContext | null = null
let master: GainNode | null = null
let enabled = true

const buffers = new Map<SoundName, AudioBuffer>()
const pending = new Map<SoundName, Promise<AudioBuffer | null>>()
const lastPlayed = new Map<SoundName, number>()
const active = new Map<SoundName, number>()

function ensureContext(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (context) return context

  const AudioContextClass =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext

  if (!AudioContextClass) return null

  context = new AudioContextClass({ latencyHint: 'interactive' })
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

  const promise = fetch(SOURCES[name], { cache: 'force-cache' })
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

function startPlayback(
  name: SoundName,
  audioContext: AudioContext,
  buffer: AudioBuffer,
) {
  if (!master) return

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

  active.set(name, (active.get(name) ?? 0) + 1)
  lastPlayed.set(name, performance.now())

  source.onended = () => {
    active.set(name, Math.max(0, (active.get(name) ?? 1) - 1))
    source.disconnect()
    gain.disconnect()
  }

  source.start(now)
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
  if (!audioContext || audioContext.state !== 'suspended') return
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

  const play = () => {
    if (!enabled) return

    const timestamp = performance.now()
    if (timestamp - (lastPlayed.get(name) ?? 0) < COOLDOWNS[name]) return
    if ((active.get(name) ?? 0) >= MAX_CONCURRENT[name]) return

    startPlayback(name, audioContext, buffer)
  }

  if (audioContext.state === 'running') {
    play()
    return
  }

  void audioContext
    .resume()
    .then(() => {
      if (audioContext.state === 'running') play()
    })
    .catch(() => {})
}

export function enableSound() {
  setSoundEnabled(true)
  unlockSound()
  void preloadEssentials()
}

export function disableSound() {
  setSoundEnabled(false)
}
