'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import gsap from 'gsap'

const A = '/assets'

const bankingScreens = ['1.svg', '2.svg', '3.svg']

const projects = [
  {
    title: 'ALATbyWEMA',
    year: '2025',
    category: 'Banking',
    description:
      'Reimagining payments to make everyday banking simpler, faster, and more trustworthy',
    theme: 'banking',
  },
  {
    title: 'Truck App',
    year: '2024',
    category: 'Logistics',
    description:
      'Streamlining daily tasks to help drivers manage deliveries, navigate routes, and stay informed.',
    theme: 'truck',
  },
  {
    title: 'Tpay',
    year: '2025',
    category: 'Fintech',
    description:
      'Simplifying personal finance and business financial operations in one platform',
    theme: 'tpay',
  },
  {
    title: 'THR',
    year: '2025',
    category: 'Human Resource (HR)',
    description:
      'Redesigning the digital experience for a logistics platform aiming at improving the day to day for truck drivers',
    theme: 'thr',
  },
]

function Icon({ file, alt = '' }: { file: string; alt?: string }) {
  return <img src={`${A}/${file}`} alt={alt} />
}

function SideNav() {
  return (
    <aside className="side-nav" aria-label="Primary navigation">
      <a className="portrait" href="#top" aria-label="Back to top">
        <img src={`${A}/aaaa3.png`} alt="Oshodi David" />
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

function MobileHeader() {
  return (
    <header className="mobile-header">
      <a className="portrait" href="#top" aria-label="Back to top">
        <img src={`${A}/aaaa3.png`} alt="Oshodi David" />
      </a>
      <a className="email-button compact" href="mailto:davidoshodi656@gmail.com">
        <Icon file="e53f1.svg" />
        Email Me
      </a>
    </header>
  )
}

function TopBar({
  dark,
  setDark,
}: {
  dark: boolean
  setDark: (value: boolean) => void
}) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          timeZone: 'Africa/Lagos',
        }).format(new Date()),
      )
    update()
    const timer = window.setInterval(update, 30_000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="top-bar">
      <div className="location">{time} &nbsp; Lagos, Nigeria</div>
      <div className="top-actions">
        <div className="theme-switch" aria-label="Color theme">
          <button
            className={!dark ? 'selected' : ''}
            onClick={() => setDark(false)}
            aria-label="Use light theme"
          >
            <Icon file="08cb8.svg" />
          </button>
          <button
            className={dark ? 'selected' : ''}
            onClick={() => setDark(true)}
            aria-label="Use dark theme"
          >
            <Icon file="0624c.svg" />
          </button>
        </div>
        <a className="email-button compact" href="mailto:davidoshodi656@gmail.com">
          <Icon file="e53f1.svg" />
          Email Me
        </a>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-title">
        <p>Oshodi David is a</p>
        <h1>Product Designer</h1>
        <div className="sticker interaction">
          <Icon file="b59f3.svg" />
          <span>INTERACTION<br />DESIGN</span>
        </div>
        <div className="sticker human">
          <Icon file="7ce80.svg" />
          <span>HUMAN<br />CENTERED<br />DESIGN</span>
        </div>
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

function TruckPreview() {
  return (
    <PhoneShell>
      <div className="truck-art">
        <div className="sky" />
        <div className="truck">
          <div className="trailer" />
          <div className="cab" />
          <i />
          <i />
        </div>
      </div>
      <div className="mini-content">
        <b>Welcome, David</b>
        <span>Complete your delivery route</span>
        <div className="progress"><i /></div>
        <button>View today’s tasks</button>
      </div>
    </PhoneShell>
  )
}

function TpayPreview() {
  return (
    <div className="browser tpay-browser" aria-hidden="true">
      <div className="browser-top"><i /><i /><i /><span /></div>
      <div className="dashboard">
        <div className="dashboard-nav">
          <b>TPay</b>
          {['Dashboard', 'Transactions', 'Wallets', 'Customers', 'Settings'].map(
            (item) => <span key={item}>{item}</span>,
          )}
        </div>
        <div className="dashboard-main">
          <div className="dashboard-heading"><b>Transactions</b><button>New payment</button></div>
          <div className="stat-row"><i /><i /><i /></div>
          <div className="chart"><div /><div /><div /><div /><div /></div>
          <div className="table-lines">{Array.from({ length: 5 }, (_, i) => <i key={i} />)}</div>
        </div>
      </div>
    </div>
  )
}

function ThrPreview() {
  const boxes = [
    '#fbd69d', '#a0d9de', '#99c586',
    '#f2918c', '#facd8a', '#a0d9de',
    '#d22d2d', '#f2918c', '#facd8a',
  ]
  return (
    <div className="browser thr-browser" aria-hidden="true">
      <div className="browser-top"><i /><i /><i /><span /></div>
      <div className="dashboard">
        <div className="dashboard-nav">
          <b>THR</b>
          {['Dashboard', 'Employees', 'Attendance', 'Approvals', 'Performance'].map(
            (item) => <span key={item}>{item}</span>,
          )}
        </div>
        <div className="dashboard-main">
          <div className="dashboard-heading"><b>Performance management</b><button>Appraise</button></div>
          <div className="stat-row"><i /><i /><i /></div>
          <p className="matrix-title">9 Box Matrix (Potential - Performance)</p>
          <div className="matrix">{boxes.map((color, i) => <i key={i} style={{ background: color }} />)}</div>
        </div>
      </div>
    </div>
  )
}

function BankingShowcase() {
  const phoneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const phone = phoneRef.current
    if (!phone) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const screens = gsap.utils.toArray<HTMLImageElement>('.banking-screen', phone)
    if (screens.length < 2) return

    const ctx = gsap.context(() => {
      let zIndex = 1
      gsap.set(screens, {
        xPercent: (i) => (i === 0 ? 0 : 100),
        zIndex: (i) => i + 1,
      })
      zIndex = screens.length + 1

      const hold = 2.4
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { duration: 1, ease: 'power3.inOut' },
      })

      for (let i = 1; i < screens.length; i += 1) {
        tl.set(screens[i], { zIndex: zIndex++ }, `+=${hold}`)
        tl.to(screens[i - 1], { xPercent: -100 }, '<')
        tl.to(screens[i], { xPercent: 0 }, '<')
      }

      tl.set(screens[0], { xPercent: 100, zIndex: zIndex++ }, `+=${hold}`)
      tl.to(screens[screens.length - 1], { xPercent: -100 }, '<')
      tl.to(screens[0], { xPercent: 0 }, '<')
      tl.set(screens.slice(1), { xPercent: 100 })
    }, phone)

    return () => ctx.revert()
  }, [])

  return (
    <div className="project-visual banking">
      <div className="banking-phone" ref={phoneRef} aria-hidden="true">
        <img className="banking-frame" src={`${A}/Iphone.svg`} alt="" draggable={false} />
        <div className="banking-screen-window">
          {bankingScreens.map((file, index) => (
            <img
              key={file}
              className="banking-screen"
              src={`${A}/${file}`}
              alt=""
              draggable={false}
              style={{
                zIndex: index + 1,
                transform: index === 0 ? 'translateX(0%)' : 'translateX(100%)',
              }}
            />
          ))}
          <span className="banking-island" />
        </div>
      </div>
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

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
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

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-intro">
          <h2>Tell me what<br />you”re building</h2>
          <p>I look forward to working with you, please feel free to send me an email</p>
        </div>
        <a className="email-pill" href="mailto:davidoshodi656@gmail.com">
          davidoshodi656@gmail.com
        </a>
        <div className="socials">
          <a href="https://dribbble.com" aria-label="Dribbble"><Icon file="90588.svg" /></a>
          <a href="https://instagram.com" aria-label="Instagram"><Icon file="cd8cd.svg" /></a>
          <a href="https://dribbble.com" aria-label="Dribbble"><Icon file="90588.svg" /></a>
          <a href="https://dribbble.com" aria-label="Dribbble"><Icon file="90588.svg" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span><Icon file="cdbb2.svg" /> OSHODI DAVID. ALL RIGHTS RESERVED</span>
        <a href="#top"><Icon file="6ad45.svg" /> Back to top</a>
      </div>
    </footer>
  )
}

export default function App() {
  const [dark, setDark] = useState(false)
  return (
    <div className={dark ? 'app dark' : 'app'} id="top">
      <SideNav />
      <MobileHeader />
      <main>
        <TopBar dark={dark} setDark={setDark} />
        <div className="content">
          <Hero />
          <Work />
        </div>
      </main>
      <Footer />
    </div>
  )
}
