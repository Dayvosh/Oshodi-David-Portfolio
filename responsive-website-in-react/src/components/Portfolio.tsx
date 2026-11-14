"use client" /* <div className="sticker interaction">
          <Icon file="b59f3.svg" />
          <span>INTERACTION<br />DESIGN</span>
        </div>
        <div className="sticker human">
          <img src={`${A}/HCD.svg`} alt="Human Centered Design" />
        </div> */
import Link from "next/link"
import { useEffect, useState, type MouseEvent, type ReactNode } from "react"
import BankingShowcase from "./BankingShowcase"
import Footer from "./Footer"
import Icon from "./Icon"
import NavIcon from "./NavIcon"
import SoundSwitch from "./SoundSwitch"
import ThemeSwitch from "./ThemeSwitch"
import ThrPreview from "./ThrPreview"
import TpayPreview from "./TpayPreview"
import TopBar from "./TopBar"
import TruckPreview from "./TruckPreview"
import { useTheme } from "./useTheme"

const A = "/assets"

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
    title: "ALATbyWEMA",
    year: "2025",
    category: "Banking",
    description:
      "Reimagining payments to make everyday banking simpler, faster, and more trustworthy",
    theme: "banking",
    href: "/work/alatbywema",
  },
  {
    title: "Truck App",
    year: "2024",
    category: "Logistics",
    description:
      "Streamlining daily tasks to help drivers manage deliveries, navigate routes, and stay informed.",
    theme: "truck",
    href: "/work/truck-app",
  },
  {
    title: "Tpay",
    year: "2025",
    category: "Fintech",
    description:
      "Simplifying personal finance and business financial operations in one platform",
    theme: "tpay",
    href: "/work/tpay",
  },
  {
    title: "THR",
    year: "2025",
    category: "Human Resource (HR)",
    description:
      "Simplifying workforce management through an integrated HR and payroll platform",
    theme: "thr",
    href: "/work/thr",
  },
]

function scrollToTop(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
  window.history.replaceState(
    null,
    "",
    window.location.pathname + window.location.search,
  )
  window.scrollTo({ top: 0, behavior: "smooth" })
}

function SideNav() {
  return (
    <aside className="side-nav" aria-label="Primary navigation">
      <a
        className="portrait"
        href="/"
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        <img src={`${A}/portrait.webp`} alt="Oshodi David" />
      </a>
      <nav>
        <a className="active" href="#work">
          <NavIcon name="work" />
          Work
        </a>
        <Link href="/about">
          <NavIcon name="about" />
          About
        </Link>
        <Link href="/resume">
          <NavIcon name="resume" />
          Resume
        </Link>
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
      <a
        className="portrait"
        href="/"
        aria-label="Back to top"
        onClick={scrollToTop}
      >
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
          onClick={(event) => {
            onClose()
            scrollToTop(event)
          }}
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
        <a className="active" href="#work" onClick={onClose}>
          <NavIcon name="work" />
          Work
        </a>
        <Link href="/about" onClick={onClose}>
          <NavIcon name="about" />
          About
        </Link>
        <Link href="/resume" onClick={onClose}>
          <NavIcon name="resume" />
          Resume
        </Link>
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
        {}
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
          <a
            className="resume-button"
            id="resume"
            href="https://drive.google.com/file/d/1S3TY9oaGrK5dnrnB1wGExrSHrXrE7dPZ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon file="9a1ef.svg" />
            Resume
          </a>
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
  if (theme === "banking") {
    return <BankingShowcase />
  }
  if (theme === "truck") {
    return (
      <div className="project-visual truck-theme">
        <TruckPreview />
      </div>
    )
  }
  if (theme === "tpay") {
    return (
      <div className="project-visual tpay-theme">
        <TpayPreview />
      </div>
    )
  }
  return (
    <div className="project-visual thr-theme">
      <ThrPreview />
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const card = (
    <article className="project-card">
      <ProjectVisual theme={project.theme} />
      <div className="project-copy">
        <div className="meta">
          <span>{project.year}</span>
          <i />
          <span>{project.category}</span>
          <i />
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

type ShowcaseItem = {
  type: "video" | "image" | "empty"
  src?: string
  fit?: "cover" | "contain"
  bg?: string
}

const showcaseItems: ShowcaseItem[] = [
  { type: "video", src: `${A}/showcase/apple.mp4` },
  { type: "image", src: `${A}/showcase/cs-1.webp` },
  { type: "image", src: `${A}/showcase/cs-9.webp` },
  { type: "image", src: `${A}/showcase/dark-8.webp` },
  { type: "image", src: `${A}/showcase/ecom-9.webp` },
  { type: "image", src: `${A}/showcase/frame-2147225510.webp` },
  { type: "image", src: `${A}/showcase/frame-2147225512.webp` },
  { type: "image", src: `${A}/showcase/h2.webp` },
  { type: "image", src: `${A}/showcase/img-1176.webp` },
  { type: "image", src: `${A}/showcase/img-1178.webp` },
  { type: "image", src: `${A}/showcase/instagram-3.webp` },
  { type: "image", src: `${A}/showcase/instagram-4.webp` },
  { type: "image", src: `${A}/showcase/of-11.webp` },
  { type: "image", src: `${A}/showcase/of-2.webp` },
  { type: "image", src: `${A}/showcase/onboard-2.webp` },
  { type: "image", src: `${A}/showcase/profile-1.webp` },
  { type: "image", src: `${A}/showcase/sn2.webp` },
  { type: "image", src: `${A}/showcase/sn4.webp` },
  { type: "image", src: `${A}/showcase/stats-1.webp` },
  { type: "image", src: `${A}/showcase/deduction.webp` },
  { type: "image", src: `${A}/showcase/form-builder-2.webp` },
  { type: "image", src: `${A}/showcase/form-builder-3.webp` },
  { type: "image", src: `${A}/showcase/frame-2147225355.webp` },
  { type: "image", src: `${A}/showcase/frame-2147225357.webp` },
  { type: "image", src: `${A}/showcase/frame-2147225359.webp` },
  { type: "image", src: `${A}/showcase/frame-2147225363.webp`, fit: "contain" },
  { type: "image", src: `${A}/showcase/m1.webp` },
  { type: "image", src: `${A}/showcase/m4.webp` },
  { type: "image", src: `${A}/showcase/of.webp` },
  { type: "video", src: `${A}/showcase/q3.mp4`, fit: "contain", bg: "#e6e6e6" },
  {
    type: "video",
    src: `${A}/showcase/scene-1.mp4`,
    fit: "contain",
    bg: "#d36700",
  },
  { type: "image", src: `${A}/showcase/tfleet-dash.webp` },
  { type: "image", src: `${A}/showcase/tpay-mobile-1-1.webp` },
]

function ShowcaseGrid() {
  const mediaClass = (item: ShowcaseItem) =>
    `showcase-media${item.fit === "contain" ? " showcase-media--contain" : ""}`
  const ordered = [...showcaseItems].sort(
    (a, b) => Number(a.type !== "video") - Number(b.type !== "video"),
  )
  return (
    <div className="showcase-grid">
      {ordered.map((item, index) => (
        <div
          className="showcase-tile"
          key={index}
          style={item.bg ? { background: item.bg } : undefined}
        >
          {item.type === "video" && (
            <video
              className={mediaClass(item)}
              src={item.src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          )}
          {item.type === "image" && (
            <img
              className={mediaClass(item)}
              src={item.src}
              alt=""
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
      ))}
    </div>
  )
}

function Work() {
  const [tab, setTab] = useState<"cases" | "showcase">("cases")
  return (
    <section className="work" id="work">
      <div className="work-heading">
        <h2>My Works</h2>
        <div className="tabs">
          <button
            className={tab === "cases" ? "selected" : ""}
            onClick={() => setTab("cases")}
          >
            Case Studies
          </button>
          <button
            className={tab === "showcase" ? "selected" : ""}
            onClick={() => setTab("showcase")}
          >
            Play Ground
          </button>
        </div>
      </div>
      {tab === "cases" ? (
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      ) : (
        <ShowcaseGrid />
      )}
    </section>
  )
}

export default function App() {
  const { dark, setDark } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (window.location.hash === "#top") {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      )
    }
  }, [])

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
