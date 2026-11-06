'use client'

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { usePathname } from 'next/navigation'
import {
  disableSound,
  enableSound,
  playSound,
  playSoundWhenReady,
  preloadDeferred,
  preloadEssentials,
  setSoundEnabled,
  unlockSound,
} from '../lib/sound'

const STORAGE_KEY = 'portfolio-sound'
const LOAD_SESSION_KEY = 'portfolio-sound-load-played'

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

const CLICK_SELECTOR = [
  'button',
  '[role="button"]',
  '.email-button',
  '.email-pill',
  '.resume-button',
  '.case-live-button',
  '.case-view-insights',
  '.project-card-link',
  '.case-more-card-link',
  '.side-nav nav a',
  '.mobile-menu nav a',
  '.case-side-nav nav a',
  '.case-back',
  '.theme-switch button',
  '.tabs button',
  'footer a',
  '.socials a',
].join(',')

const HOVER_SELECTOR = [
  '.project-card-link',
  '.case-more-card-link',
  '.side-nav nav a',
  '.mobile-menu nav a',
  '.case-side-nav nav a',
  '.email-button',
  '.email-pill',
  '.resume-button',
  '.case-live-button',
  '.tabs button',
  '.theme-switch button',
  '.sound-switch',
].join(',')

function isInternalRouteLink(anchor: HTMLAnchorElement, event: MouseEvent) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return false
  }
  if (anchor.target === '_blank' || anchor.hasAttribute('download')) {
    return false
  }

  const href = anchor.getAttribute('href')
  if (!href) return false
  if (
    href.startsWith('#') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('http') ||
    href.startsWith('//')
  ) {
    return false
  }

  return href.startsWith('/')
}

export default function SoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(true)
  const [ready, setReady] = useState(false)
  const enabledRef = useRef(true)
  const firstPath = useRef(true)
  const skipTransition = useRef(false)
  const skipTransitionTimer = useRef<number | null>(null)
  const suppressClickUntil = useRef(0)
  const pathname = usePathname()

  useEffect(() => {
    const next = window.localStorage.getItem(STORAGE_KEY) !== 'off'
    enabledRef.current = next
    setEnabled(next)
    setSoundEnabled(next)
    if (next) void preloadEssentials()
    setReady(true)
  }, [])

  useEffect(() => {
    enabledRef.current = enabled
    if (!ready) return
    window.localStorage.setItem(STORAGE_KEY, enabled ? 'on' : 'off')
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
      window.sessionStorage.setItem(LOAD_SESSION_KEY, '1')
      void playSoundWhenReady('load')
      window.setTimeout(() => {
        void preloadDeferred()
      }, 400)
    } else {
      disableSound()
      window.localStorage.setItem(STORAGE_KEY, 'off')
    }
  }

  useEffect(() => {
    if (!ready) return

    const onFirstGesture = (event: Event) => {
      const target = event.target as Element | null
      if (target?.closest('.sound-switch')) return
      if (!enabledRef.current) return

      unlockSound()

      if (window.sessionStorage.getItem(LOAD_SESSION_KEY) !== '1') {
        window.sessionStorage.setItem(LOAD_SESSION_KEY, '1')
        suppressClickUntil.current = performance.now() + 260
        void playSoundWhenReady('load')
      }

      window.setTimeout(() => {
        void preloadDeferred()
      }, 500)
    }

    window.addEventListener('pointerdown', onFirstGesture, {
      once: true,
      capture: true,
    })
    window.addEventListener('keydown', onFirstGesture, {
      once: true,
      capture: true,
    })

    return () => {
      window.removeEventListener('pointerdown', onFirstGesture, true)
      window.removeEventListener('keydown', onFirstGesture, true)
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
      if (element.closest('.sound-switch')) return
      if (
        element instanceof HTMLAnchorElement &&
        isInternalRouteLink(element, event)
      ) {
        return
      }
      if (performance.now() < suppressClickUntil.current) return

      playSound('click')
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [ready])

  useEffect(() => {
    if (!ready) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return
    }

    const handlePointerOver = (event: PointerEvent) => {
      if (!enabledRef.current || event.pointerType !== 'mouse') return

      const target = event.target as Element | null
      const element = target?.closest(HOVER_SELECTOR)
      if (!element) return

      const related = event.relatedTarget as Node | null
      if (related && element.contains(related)) return

      playSound('hover')
    }

    document.addEventListener('pointerover', handlePointerOver, {
      passive: true,
    })
    return () => document.removeEventListener('pointerover', handlePointerOver)
  }, [ready])

  useEffect(() => {
    const handlePopState = () => {
      skipTransition.current = true
      if (skipTransitionTimer.current !== null) {
        window.clearTimeout(skipTransitionTimer.current)
      }
      skipTransitionTimer.current = window.setTimeout(() => {
        skipTransition.current = false
      }, 1000)
    }

    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
      if (skipTransitionTimer.current !== null) {
        window.clearTimeout(skipTransitionTimer.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!ready) return

    if (firstPath.current) {
      firstPath.current = false
      return
    }

    if (skipTransition.current) {
      skipTransition.current = false
      if (skipTransitionTimer.current !== null) {
        window.clearTimeout(skipTransitionTimer.current)
      }
      return
    }

    if (!enabledRef.current) return
    playSound('transition')
  }, [pathname, ready])

  useEffect(() => {
    if (!ready) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ids =
      pathname === '/'
        ? ['work']
        : ['problem', 'design-process', 'final-product', 'conclusion']

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sections.length) return

    const seen = new Set<string>()
    let readyAt = performance.now() + 1200

    const observer = new IntersectionObserver(
      (entries) => {
        if (!enabledRef.current || performance.now() < readyAt) return

        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const id = entry.target.id
          if (seen.has(id)) continue
          seen.add(id)
          playSound('section')
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -35% 0px' },
    )

    sections.forEach((section) => observer.observe(section))

    const timer = window.setTimeout(() => {
      readyAt = performance.now()
    }, 1300)

    return () => {
      window.clearTimeout(timer)
      observer.disconnect()
    }
  }, [pathname, ready])

  return (
    <SoundContext.Provider value={{ enabled, toggle }}>
      {children}
    </SoundContext.Provider>
  )
}
