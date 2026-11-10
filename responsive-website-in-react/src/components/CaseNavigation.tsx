"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Icon from "./Icon"
import SoundSwitch from "./SoundSwitch"
import ThemeSwitch from "./ThemeSwitch"

interface SectionRef {
  href: string
  element: HTMLElement
}

const navItems = [
  { label: "About Project", href: "#about-project" },
  { label: "Problem", href: "#problem" },
  { label: "Goal", href: "#goal" },
  { label: "Design Process", href: "#design-process" },
  { label: "Final Product", href: "#final-product" },
  { label: "Conclusion", href: "#conclusion" },
]

const thrNavItems = navItems.filter(
  (item) => item.href === "#about-project" || item.href === "#final-product",
)

function NavLinks({
  activeHref,
  items,
}: {
  activeHref: string
  items: typeof navItems
}) {
  return (
    <>
      {items.map((item) => {
        const active = item.href === activeHref

        return (
          <a
            aria-current={active ? "page" : undefined}
            className={active ? "active" : ""}
            href={item.href}
            key={item.label}
          >
            {item.label}
          </a>
        )
      })}
    </>
  )
}

export default function CaseNavigation({
  dark,
  setDark,
  slug,
}: {
  dark: boolean
  setDark: (value: boolean) => void
  slug?: string
}) {
  const items = slug === "thr" ? thrNavItems : navItems
  const [activeHref, setActiveHref] = useState(items[0].href)

  useEffect(() => {
    const sections: SectionRef[] = []

    for (const item of items) {
      const element = document.getElementById(item.href.slice(1))

      if (element) {
        sections.push({ href: item.href, element })
      }
    }

    if (sections.length === 0) return

    let frame = 0

    const updateActiveSection = () => {
      frame = 0
      const threshold = window.innerHeight * 0.35
      let current = sections[0].href

      for (const section of sections) {
        if (section.element.getBoundingClientRect().top <= threshold) {
          current = section.href
        }
      }

      setActiveHref((previous) => (previous === current ? previous : current))
    }

    const handleScroll = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(updateActiveSection)
      }
    }

    updateActiveSection()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      if (frame !== 0) window.cancelAnimationFrame(frame)
    }
  }, [items])

  return (
    <>
      <aside className="case-side-nav" aria-label="Case study navigation">
        <Link className="case-back" href="/#work">
          <Icon file="case-back.svg" />
          Back
        </Link>
        <nav>
          <NavLinks activeHref={activeHref} items={items} />
        </nav>
      </aside>
      <header className="case-mobile-header">
        <div className="case-mobile-top">
          <Link className="case-back" href="/#work">
            <Icon file="case-back.svg" />
            Back
          </Link>
          <div className="mobile-actions">
            <ThemeSwitch dark={dark} setDark={setDark} />
            <SoundSwitch />
          </div>
        </div>
      </header>
    </>
  )
}
