'use client'

import { useEffect, useRef, useState } from 'react'
import Footer from './Footer'
import Icon from './Icon'
import NavIcon from './NavIcon'
import SoundSwitch from './SoundSwitch'
import ThemeSwitch from './ThemeSwitch'
import TopBar from './TopBar'
import { useTheme } from './useTheme'

const A = '/assets'

const galleryImages = [
  `${A}/about-tile-1.png`,
  `${A}/about-tile-2.png`,
  `${A}/about-tile-3.png`,
  `${A}/about-tile-4.png`,
]

function SideNav() {
  return (
    <aside className="side-nav" aria-label="Primary navigation">
      <a className="portrait" href="/#top" aria-label="Back to top">
        <img src={`${A}/Favicon.svg`} alt="Oshodi David" />
      </a>
      <nav>
        <a href="/#work">
          <NavIcon name="work" />
          Work
        </a>
        <a className="active" href="/about">
          <NavIcon name="about" />
          About
        </a>
        <a href="/resume">
          <NavIcon name="resume" />
          Resume
        </a>
      </nav>
    </aside>
  )
}

function MobileHeader({
  dark,
  setDark,
  onMenuOpen,
}: {
  dark: boolean
  setDark: (value: boolean) => void
  onMenuOpen: () => void
}) {
  return (
    <header className="mobile-header">
      <a className="portrait" href="/#top" aria-label="Back to top">
        <img src={`${A}/Favicon.svg`} alt="Oshodi David" />
      </a>
      <div className="mobile-actions">
        <ThemeSwitch dark={dark} setDark={setDark} />
        <SoundSwitch />
        <button
          className="hamburger"
          type="button"
          aria-label="Open menu"
          onClick={onMenuOpen}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M3 5h14M3 10h14M3 15h14" />
          </svg>
        </button>
      </div>
    </header>
  )
}

function MobileMenu({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  return (
    <div
      className={`mobile-menu${open ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div className="mobile-menu-top">
        <a className="portrait" href="/#top" aria-label="Back to top" onClick={onClose}>
          <img src={`${A}/Favicon.svg`} alt="Oshodi David" />
        </a>
        <button
          className="menu-close"
          type="button"
          aria-label="Close menu"
          onClick={onClose}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M5 5l10 10M15 5l-10 10" />
          </svg>
        </button>
      </div>
      <nav>
        <a href="/#work" onClick={onClose}>
          <NavIcon name="work" />
          Work
        </a>
        <a className="active" href="/about" onClick={onClose}>
          <NavIcon name="about" />
          About
        </a>
        <a href="/resume" onClick={onClose}>
          <NavIcon name="resume" />
          Resume
        </a>
      </nav>
      <a className="email-button" href="mailto:davidoshodi656@gmail.com">
        <Icon file="e53f1.svg" />
        Email Me
      </a>
    </div>
  )
}

function Gallery() {
  const viewportRef = useRef<HTMLDivElement>(null)
  const drag = useRef({ active: false, isMouse: false, startX: 0, startScroll: 0 })
  const [grabbing, setGrabbing] = useState(false)

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    let raf = 0
    let last = performance.now()
    const speed = 24

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      if (!drag.current.active) {
        viewport.scrollLeft += speed * dt
        const set = viewport.scrollWidth / 3
        if (viewport.scrollLeft >= set) viewport.scrollLeft -= set
      }
      raf = requestAnimationFrame(loop)
    }

    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  const onPointerDown = (event: React.PointerEvent) => {
    const viewport = viewportRef.current
    if (!viewport) return
    const isMouse = event.pointerType === 'mouse'
    drag.current = {
      active: true,
      isMouse,
      startX: event.clientX,
      startScroll: viewport.scrollLeft,
    }
    if (isMouse) {
      viewport.setPointerCapture(event.pointerId)
      setGrabbing(true)
    }
  }

  const onPointerMove = (event: React.PointerEvent) => {
    if (!drag.current.active || !drag.current.isMouse) return
    const viewport = viewportRef.current
    if (!viewport) return
    viewport.scrollLeft =
      drag.current.startScroll - (event.clientX - drag.current.startX)
  }

  const onPointerUp = (event: React.PointerEvent) => {
    drag.current.active = false
    setGrabbing(false)
    const viewport = viewportRef.current
    if (viewport?.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId)
    }
  }

  const tiles = [...galleryImages, ...galleryImages, ...galleryImages]

  return (
    <div className="about-gallery">
      <div
        ref={viewportRef}
        className={`about-gallery-viewport${grabbing ? ' grabbing' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {tiles.map((src, index) => (
          <div className="about-gallery-tile" key={index}>
            <img src={src} alt="" draggable={false} />
          </div>
        ))}
      </div>
      <div className="about-gallery-fade about-gallery-fade--left" aria-hidden="true" />
      <div className="about-gallery-fade about-gallery-fade--right" aria-hidden="true" />
    </div>
  )
}

export default function About() {
  const { dark, setDark } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app" id="top">
      <MobileHeader
        dark={dark}
        setDark={setDark}
        onMenuOpen={() => setMenuOpen(true)}
      />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="layout">
        <SideNav />
        <main>
          <TopBar dark={dark} setDark={setDark} />
          <div className="content about-content">
            <section className="about-hero">
              <h1 className="about-title">Hello there, I&apos;m Oshodi David</h1>
              <p className="about-intro">
                A designer naturally curious by nature, and that shapes how I
                approach design. I like understanding why something isn&apos;t
                working before jumping into how it should look
              </p>
              <div className="about-copy">
                <p>
                  Before i got into product design, i did graphics design where
                  i designed, logos, flyers, banners. Overtime i had used
                  products that got me frustrated and i&apos;ve also seen that
                  frustration from friends and family, so when i came across
                  product design and saw all the problems and frustations i
                  could solve, i picked deep interest in it and it&apos;s been
                  history since then.
                </p>
                <p>
                  Recently i have picked interest in building my designs using
                  AI assisted workflows. There are many times where i engineers
                  didn&apos;t really code my designs as much as i&apos;d like,
                  now knowing all the possiblities of building with AI has given
                  me a superpower, now i feel empowered.
                </p>
                <p>
                  I have started taking courses and getting really close to the
                  engineering world. Now i have absorbed myself into learning
                  how to take a product from ideation phase to shipping phase
                  and that journey already started.
                </p>
                <p>
                  I am currently building two products and one of them would
                  ship soon and i feel so good about this. My portfolio was also
                  built by me using AI after i designed it in Figma. What a good
                  time to be alive
                </p>
              </div>
            </section>
            <Gallery />
            <section className="about-outside">
              <p>
                Outside design, i spend my time reading books of all spheres of
                life, watching movies, going to the gym and collecting
                inspiration everything that looks beautiful
              </p>
            </section>
            <Gallery />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
