"use client"

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"
import { usePathname } from "next/navigation"
import {
  disableSound,
  enableSound,
  playSound,
  preloadDeferred,
  preloadEssentials,
  setSoundEnabled,
  unlockSound,
} from "../lib/sound"

const STORAGE_KEY = "portfolio-sound"

interface SoundContextValue {
  enabled: boolean
  toggle: () => void
}

const SoundContext = createContext<SoundContextValue>({
  enabled: true,
  toggle: () => {},
})

export function useSound() {
  return useContext(SoundContext)
}

const CLICK_SELECTOR = 'a, button, [role="button"]'

export default function SoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(true)
  const [ready, setReady] = useState(false)
  const enabledRef = useRef(true)
  const firstPath = useRef(true)
  const pathname = usePathname()

  useEffect(() => {
    const next = window.localStorage.getItem(STORAGE_KEY) !== "off"
    enabledRef.current = next
    setEnabled(next)
    setSoundEnabled(next)
    if (next) void preloadEssentials()
    setReady(true)
  }, [])

  useEffect(() => {
    enabledRef.current = enabled
    if (!ready) return
    window.localStorage.setItem(STORAGE_KEY, enabled ? "on" : "off")
  }, [enabled, ready])

  useEffect(() => {
    if (!ready) return
    setSoundEnabled(enabled)
  }, [enabled, ready])

  const toggle = () => {
    const next = !enabledRef.current
    enabledRef.current = next
    setEnabled(next)

    if (next) {
      enableSound()
      window.setTimeout(() => {
        void preloadDeferred()
      }, 400)
    } else {
      disableSound()
      window.localStorage.setItem(STORAGE_KEY, "off")
    }
  }

  useEffect(() => {
    if (!ready) return

    const onFirstGesture = (event: Event) => {
      const target = event.target as Element | null
      if (target?.closest(".sound-switch")) return
      if (!enabledRef.current) return

      unlockSound()

      window.setTimeout(() => {
        void preloadDeferred()
      }, 500)
    }

    window.addEventListener("pointerdown", onFirstGesture, {
      once: true,
      capture: true,
    })
    window.addEventListener("keydown", onFirstGesture, {
      once: true,
      capture: true,
    })

    return () => {
      window.removeEventListener("pointerdown", onFirstGesture, true)
      window.removeEventListener("keydown", onFirstGesture, true)
    }
  }, [ready])

  useEffect(() => {
    if (!ready) return

    const handleClick = (event: MouseEvent) => {
      if (!enabledRef.current) return
      if (event.defaultPrevented || event.button !== 0) return

      const target = event.target as Element | null
      const element = target?.closest(CLICK_SELECTOR) as HTMLElement | null
      if (!element) return
      if (element.closest(".sound-switch")) return

      const anchor = element.closest("a[href]")
      if (anchor) {
        const href = anchor.getAttribute("href") ?? ""
        if (href.startsWith("/") && !href.startsWith("//")) {
          const path = href.split("#")[0].split("?")[0] || "/"
          if (path !== window.location.pathname) return
        }
      }

      playSound("click")
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [ready])

  useEffect(() => {
    if (!ready) return

    if (firstPath.current) {
      firstPath.current = false
      return
    }

    if (!enabledRef.current) return
    playSound("transition")
  }, [pathname, ready])

  return (
    <SoundContext.Provider value={{ enabled, toggle }}>
      {children}
    </SoundContext.Provider>
  )
}
