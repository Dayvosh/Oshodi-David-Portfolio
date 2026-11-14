"use client"

import { useEffect, useState } from "react"
import Footer from "./Footer"
import Icon from "./Icon"
import NavIcon from "./NavIcon"
import SoundSwitch from "./SoundSwitch"
import ThemeSwitch from "./ThemeSwitch"
import TopBar from "./TopBar"
import { useTheme } from "./useTheme"

const A = "/assets"

const jobs = [
  { company: "Taxtech", role: "Lead Product Designer", year: "2026 - Present" },
  { company: "Openfactor", role: "Product Designer", year: "2025 - 2026" },
  { company: "Ardilla", role: "UI/UX Designer", year: "2023 - 2025" },
  { company: "Stackivy", role: "UI/UX Designer", year: "2022 - 2023" },
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
        <a href="/about">
          <NavIcon name="about" />
          About
        </a>
        <a className="active" href="/resume">
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
        <a href="/about" onClick={onClose}>
          <NavIcon name="about" />
          About
        </a>
        <a className="active" href="/resume" onClick={onClose}>
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

export default function Resume() {
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
              <h1 className="about-title">Oshodi David</h1>
              <p className="resume-intro">
                Product Designer with 4+ years of experience building scalable
                web and mobile products across FinTech, SaaS, LogTech and HR
                Tech . I combine user research, interaction design and strong
                visual thinking to turn complex problems into intuitive,
                business-focused experiences that drive engagement, adoption and
                growth.
              </p>
              <a
                className="resume-download"
                href="https://drive.google.com/file/d/1S3TY9oaGrK5dnrnB1wGExrSHrXrE7dPZ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon file="9a1ef.svg" />
                Download Resume
              </a>
            </section>
            <section className="resume-section">
              <h2 className="resume-section-title">Work Experience</h2>
              <ul className="resume-jobs">
                {jobs.map((job) => (
                  <li className="resume-job" key={job.company}>
                    <div className="resume-job-main">
                      <h3 className="resume-job-company">{job.company}</h3>
                      <p className="resume-job-role">{job.role}</p>
                    </div>
                    <span className="resume-job-year">{job.year}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="resume-section">
              <h2 className="resume-section-title">Contact</h2>
              <ul className="resume-contacts">
                <li className="resume-contact">
                  <span className="resume-contact-label">Email</span>
                  <a
                    className="resume-contact-value"
                    href="mailto:davidoshodi656@gmail.com"
                  >
                    davidoshodi656@gmail.com
                  </a>
                </li>
                <li className="resume-contact">
                  <span className="resume-contact-label">Linkedin</span>
                  <a
                    className="resume-contact-value"
                    href="https://www.linkedin.com/in/oshodi-david-8142a5208/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Oshodi David
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
