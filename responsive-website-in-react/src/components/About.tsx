"use client"

import { useEffect, useRef, useState } from "react"
import Footer from "./Footer"
import Icon from "./Icon"
import NavIcon from "./NavIcon"
import SoundSwitch from "./SoundSwitch"
import ThemeSwitch from "./ThemeSwitch"
import TopBar from "./TopBar"
import { useTheme } from "./useTheme"

const A = "/assets"

const personalImages = [
  `${A}/About/me-1.webp`,
  `${A}/About/me-2.webp`,
  `${A}/About/me-3.webp`,
]

const hobbyImages = [
  `${A}/About/gym-1.webp`,
  `${A}/About/gym-2.webp`,
  `${A}/About/book-2.webp`,
  `${A}/About/book-1.webp`,
  `${A}/About/book-3.webp`,
  `${A}/About/book-4.webp`,
]

function SideNav() {
  return (
    <aside className="side-nav" aria-label="Primary navigation">
      <a className="portrait" href="/" aria-label="Back to top">
        <img src={`${A}/portrait.webp`} alt="Oshodi David" />
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
      <a className="portrait" href="/" aria-label="Back to top">
        <img src={`${A}/portrait.webp`} alt="Oshodi David" />
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

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  return (
    <div
      className={`mobile-menu${open ? " open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div className="mobile-menu-top">
        <a
          className="portrait"
          href="/"
          aria-label="Back to top"
          onClick={onClose}
        >
          <img src={`${A}/portrait.webp`} alt="Oshodi David" />
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

function Gallery({
  images,
  contain = false,
}: {
  images: string[]
  contain?: boolean
}) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const drag = useRef({
    active: false,
    isMouse: false,
    startX: 0,
    startScroll: 0,
  })
  const [grabbing, setGrabbing] = useState(false)

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let raf = 0
    let last = performance.now()
    let visible = true
    const speed = 24

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      if (visible && !drag.current.active) {
        viewport.scrollLeft += speed * dt
        const set = viewport.scrollWidth / 3
        if (viewport.scrollLeft >= set) viewport.scrollLeft -= set
      }
      raf = requestAnimationFrame(loop)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true
        last = performance.now()
      },
      { rootMargin: "200px" },
    )
    observer.observe(viewport)

    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  const onPointerDown = (event: React.PointerEvent) => {
    const viewport = viewportRef.current
    if (!viewport) return
    const isMouse = event.pointerType === "mouse"
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

  const tiles = [...images, ...images, ...images]

  return (
    <div className="about-gallery">
      <div
        ref={viewportRef}
        className={`about-gallery-viewport${grabbing ? " grabbing" : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {tiles.map((src, index) => (
          <div
            className={`about-gallery-tile${
              contain ? " about-gallery-tile--contain" : ""
            }`}
            key={index}
          >
            <img
              src={src}
              alt=""
              draggable={false}
              loading="lazy"
              decoding="async"
              ref={(img) => {
                if (!contain || !img) return
                const tile = img.parentElement
                if (!tile) return
                const apply = () => {
                  if (!img.naturalWidth || !img.naturalHeight) return
                  tile.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`
                }
                if (img.complete) apply()
                else img.onload = apply
              }}
            />
          </div>
        ))}
      </div>
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
              <h1 className="about-title">I&apos;m Oshodi David</h1>
              <p className="about-intro">
                I&apos;m naturally curious, and that shapes how I approach
                design. I like understanding why something isn&apos;t working
                before jumping into how it should look. I believe good design
                starts with asking the right questions and understanding the
                people behind the problem.
              </p>
              <div className="about-copy">
                <p>
                  My journey started in graphic design, creating logos, flyers
                  and visual identities. Over time, I became more interested in
                  solving the everyday frustrations people experience with
                  digital products. Discovering product design gave me an
                  opportunity to combine my visual background with
                  problem-solving, and I&apos;ve been enjoying that journey ever
                  since.
                </p>
                <p>
                  Recently, I&apos;ve been exploring AI-assisted development and
                  getting closer to the engineering side of product creation.
                  I&apos;m fascinated by the possibilities of taking ideas
                  beyond Figma and turning them into real, usable products.
                  I&apos;m currently building two products of my own, one of
                  which is nearing launch. I also built this portfolio with AI,
                  and it&apos;s been an exciting experience. What a time to be
                  alive! 😁
                </p>
              </div>
            </section>
            <Gallery images={personalImages} />
            <section className="about-outside">
              <p>
                Outside design, I enjoy reading, watching movies, going to the
                gym and finding inspiration in the little things. I&apos;m
                naturally drawn to beautiful things, interesting ideas and new
                perspectives.
              </p>
            </section>
            <Gallery images={hobbyImages} contain />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
