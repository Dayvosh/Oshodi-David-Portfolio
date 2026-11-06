'use client'

import Link from 'next/link'
import { useEffect, useState, type ReactNode } from 'react'
import BankingShowcase from './BankingShowcase'
import Footer from './Footer'
import Icon from './Icon'
import SoundSwitch from './SoundSwitch'
import ThemeSwitch from './ThemeSwitch'
import ThrPreview from './ThrPreview'
import TpayPreview from './TpayPreview'
import TopBar from './TopBar'
import TruckPreview from './TruckPreview'
import { useTheme } from './useTheme'

const A = '/assets'

type Project = {
  title: string
  year: string
  category: string
  description: string
  theme: string
  href?: string
}

const projects: Project[] = [
  {
    title: 'ALATbyWEMA',
    year: '2025',
    category: 'Banking',
    description:
      'Reimagining payments to make everyday banking simpler, faster, and more trustworthy',
    theme: 'banking',
    href: '/work/alatbywema',
  },
  {
    title: 'Truck App',
    year: '2024',
    category: 'Logistics',
    description:
      'Streamlining daily tasks to help drivers manage deliveries, navigate routes, and stay informed.',
    theme: 'truck',
    href: '/work/truck-app',
  },
  {
    title: 'Tpay',
    year: '2025',
    category: 'Fintech',
    description:
      'Simplifying personal finance and business financial operations in one platform',
    theme: 'tpay',
    href: '/work/tpay',
  },
  {
    title: 'THR',
    year: '2025',
    category: 'Human Resource (HR)',
    description:
      'Redesigning the digital experience for a logistics platform aiming at improving the day to day for truck drivers',
    theme: 'thr',
    href: '/work/thr',
  },
]

function SideNav() {
  return (
    <aside className="side-nav" aria-label="Primary navigation">
      <a className="portrait" href="#top" aria-label="Back to top">
        <img src={`${A}/Favicon.svg`} alt="Oshodi David" />
      </a>
      <nav>
        <a className="active" href="#work">
          <Icon file="b01e8.svg" />
          Work
        </a>
        <a href="#about">
          <Icon file="eb71e.svg" />
          About
        </a>
        <a href="#resume">
          <Icon file="7d52f.svg" />
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
      <a className="portrait" href="#top" aria-label="Back to top">
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
        <a className="portrait" href="#top" aria-label="Back to top" onClick={onClose}>
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
        <a className="active" href="#work" onClick={onClose}>
          <Icon file="b01e8.svg" />
          Work
        </a>
        <a href="#about" onClick={onClose}>
          <Icon file="eb71e.svg" />
          About
        </a>
        <a href="#resume" onClick={onClose}>
          <Icon file="7d52f.svg" />
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

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-title">
        <p>Oshodi David is a</p>
        <h1>Product Designer</h1>
        {/* <div className="sticker interaction">
          <Icon file="b59f3.svg" />
          <span>INTERACTION<br />DESIGN</span>
        </div>
        <div className="sticker human">
          <img src={`${A}/HCD.svg`} alt="Human Centered Design" />
        </div> */}
      </div>
      <div className="hero-copy">
        <p>
          He combines product thinking, UX, and visual design to turn real user
          problems into experiences people can understand and confidently use,
          while increasing revenue for businesses
        </p>
        <div className="hero-actions">
          <a className="email-button" href="mailto:davidoshodi656@gmail.com">
            <Icon file="e53f1.svg" />
            Email Me
          </a>
          <button className="resume-button" id="resume" onClick={() => window.print()}>
            <Icon file="9a1ef.svg" />
            Resume
          </button>
        </div>
      </div>
    </section>
  )
}

function PhoneShell({ children }: { children: ReactNode }) {
  return (
    <div className="phone-shell" aria-hidden="true">
      <div className="phone-island" />
      <div className="phone-screen">{children}</div>
    </div>
  )
}

function ProjectVisual({ theme }: { theme: string }) {
  if (theme === 'banking') {
    return <BankingShowcase />
  }
  if (theme === 'truck') {
    return <div className="project-visual truck-theme"><TruckPreview /></div>
  }
  if (theme === 'tpay') {
    return <div className="project-visual tpay-theme"><TpayPreview /></div>
  }
  return <div className="project-visual thr-theme"><ThrPreview /></div>
}

function ProjectCard({ project }: { project: Project }) {
  const card = (
    <article className="project-card">
      <ProjectVisual theme={project.theme} />
      <div className="project-copy">
        <div className="meta">
          <span>{project.year}</span><i />
          <span>{project.category}</span><i />
          <span>Case study</span>
        </div>
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    </article>
  )

  if (project.href) {
    return (
      <Link className="project-card-link" href={project.href}>
        {card}
      </Link>
    )
  }

  return card
}

function Work() {
  const [tab, setTab] = useState<'cases' | 'showcase'>('cases')
  return (
    <section className="work" id="work">
      <div className="work-heading">
        <h2>My Works</h2>
        <div className="tabs">
          <button className={tab === 'cases' ? 'selected' : ''} onClick={() => setTab('cases')}>
            Case Studies
          </button>
          <button className={tab === 'showcase' ? 'selected' : ''} onClick={() => setTab('showcase')}>
            UI Showcase
          </button>
        </div>
      </div>
      <div className="project-list">
        {projects.map((project) => <ProjectCard project={project} key={project.title} />)}
      </div>
    </section>
  )
}

export default function App() {
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
          <div className="content">
            <Hero />
            <Work />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
