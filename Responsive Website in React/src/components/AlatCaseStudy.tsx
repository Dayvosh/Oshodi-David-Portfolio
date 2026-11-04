import type { ReactNode } from "react"
import BankingShowcase from "./BankingShowcase"
import CaseNavigation from "./CaseNavigation"
import Footer from "./Footer"
import LiveAppButton from "./LiveAppButton"
import TpayPreview from "./TpayPreview"
import TruckPreview from "./TruckPreview"

const A = "/assets"

function MetaCard({
  label,
  value,
  wide = false,
}: {
  label: string
  value: ReactNode
  wide?: boolean
}) {
  return (
    <div className={wide ? "case-meta-card case-meta-wide" : "case-meta-card"}>
      <p className="case-meta-label">{label}</p>
      <p className="case-meta-value">{value}</p>
    </div>
  )
}

function CaseHero() {
  return (
    <section className="case-hero">
      <p className="case-eyebrow">2025 • Banking • Case study</p>
      <h1 className="case-title">ALATbyWEMA</h1>
      <p className="case-subtext">
        ALAT by Wema is Nigeria&apos;s first fully digital bank, enabling
        customers to open accounts and manage their finances entirely online
      </p>
      <LiveAppButton />
      <div className="case-visual" aria-hidden="true">
        <BankingShowcase />
      </div>
      <div className="case-meta">
        <MetaCard
          label="My Role"
          value="Product Designer"
        />
        <MetaCard label="Timeline" value="2 month" />
        <MetaCard
          label="Responsibilities"
          value={
            <>
              UI Design, UX Design, User Research, Wireframing, Prototyping,
              <br />
              Information Architecture, User Flows
            </>
          }
          wide
        />
        <MetaCard
          label="Tools"
          value="Figma, Figjam, Teams"
        />
        <MetaCard label="Platform" value="Mobile" />
      </div>
    </section>
  )
}

function CaseAbout() {
  return (
    <section className="case-about" id="about-project">
      <p className="case-eyebrow">ABOUT THE PROJECT</p>
      <h2 className="case-about-title">What Is ALATbyWEMA?</h2>
      <div className="case-about-copy">
        <p>
          Wema Bank is the pioneer of Africa&apos;s first fully digital bank,
          ALAT, and one of Nigeria&apos;s most resilient banks. With decades of
          experience in the business of banking, the Bank has remained
          innovative in delivering value to its stakeholders.
        </p>
        <p>
          The publicly quoted Nigerian company has successfully built a legacy
          of trust and resilience that has won it the loyalty of its customers.
          The Bank is constantly introducing products and services tailored to
          the needs of its customers at every stage of their lives.
        </p>
        <p>
          ALAT brings essential banking services to customers&apos; fingertips,
          allowing them to manage their finances and complete transactions such
          as money transfers, bill payments, airtime purchases, loan requests
          and many more directly from their mobile devices all without visiting
          a physical bank branch.
        </p>
        <p>
          As the app brings multiple financial services into one experience,
          usability becomes critical. The opportunity was to create a more
          intuitive, user-centered interface that makes these services easier to
          discover, understand, and use.
        </p>
        <p className="case-about-emphasis">
          As part of a collaborative design team, each designer was assigned
          specific areas of the app to work on. I was responsible for the
          Payments section, covering core activities such as transfers, airtime
          and data purchases, and bill payments. This case study focuses on my
          contribution to the Payments experience and the design decisions
          behind the improvements I made
        </p>
      </div>
    </section>
  )
}

const reviews = [
  {
    src: "alat-review-1.png",
    alt: "Customer review: Horrible app, do not recommend",
  },
  {
    src: "alat-review-2.png",
    alt: "Customer review: Transfer exposes balance",
  },
  {
    src: "alat-review-3.png",
    alt: "Customer review: Don't use the ALAT app to buy electricity",
  },
  {
    src: "alat-review-4.png",
    alt: "Customer review: Worst bank experience ever, avoid",
  },
  {
    src: "alat-review-5.png",
    alt: "Customer review: Transfer issues from Okuku, Osun state",
  },
  {
    src: "alat-review-1.png",
    alt: "Customer review of the ALAT app",
  },
]

const coreProblems = [
  {
    title: "Complex Payment Navigation",
    body: "Customers had to move through multiple screens to find and access payment services. This made common tasks such as transfers, airtime purchases, and bill payments feel more cumbersome than necessary.",
  },
  {
    title: "Poor Feature Discoverability",
    body: "Some payment features were not immediately obvious or easy to find within the app. This made it harder for customers to understand what services were available and where to access them",
  },
  {
    title: "Too Many Steps for Everyday Transactions",
    body: "Simple banking activities required users to go through several steps before completing a transaction. This added unnecessary friction to tasks that customers perform frequently",
  },
  {
    title: "Inconsistent UI patterns across screens",
    body: "Similar payment experiences did not always follow consistent layouts, interactions, or visual patterns. This made the interface less predictable and increased the effort required to learn and navigate different parts of the app.",
  },
  {
    title: "Outdated Visual Experience",
    body: "The old design felt dated and lacked the clarity and polish found in newer digital banking products. This created an opportunity to modernize the interface while making important payment information and actions easier to understand",
  },
]

function CaseProblem() {
  return (
    <section className="case-problem" id="problem">
      <p className="case-eyebrow">THE PROBLEM</p>
      <h2 className="case-problem-title">Reason For The Redesign</h2>
      <div className="case-problem-copy">
        <p>
          The problems identified were informed by multiple sources, including
          customer ratings and reviews on app stores, complaints shared across
          social media, and direct feedback from ALAT customers who use the
          mobile banking app frequently
        </p>
      </div>

      <div
        className="case-reviews"
        aria-label="Customer reviews of the ALAT app"
      >
        {reviews.map((review, index) => (
          <div className="case-review-shot" key={`${review.src}-${index}`}>
            <img src={`${A}/${review.src}`} alt={review.alt} />
          </div>
        ))}
      </div>

      <div className="case-core-problems">
        <h3>Core Problems</h3>
        <div className="case-core-problems-list">
          {coreProblems.map((problem) => (
            <div className="case-core-problem" key={problem.title}>
              <h4>{problem.title}</h4>
              <p>{problem.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="case-old-ui">
        <span className="case-old-ui-label">OLD UI</span>
        <div className="case-old-ui-phones">
          <img
            src={`${A}/alat-old-ui-1.png`}
            alt="Previous ALAT app interface, screen one"
          />
          <img
            src={`${A}/alat-old-ui-2.png`}
            alt="Previous ALAT app interface, screen two"
          />
          <img
            src={`${A}/alat-old-ui-3.png`}
            alt="Previous ALAT app interface, screen three"
          />
        </div>
      </div>
    </section>
  )
}

function CaseGoals() {
  return (
    <section className="case-goals" id="goal">
      <p className="case-eyebrow">GOALS</p>
      <h2 className="case-goals-title">What Should The Redesign Do Better?</h2>
      <div className="case-goals-copy">
        <p>
          The goal was to transform ALAT&apos;s Payments experience into an
          intuitive, efficient, and trustworthy way for customers to manage
          everyday transactions. The redesign focused on simplifying payment
          flows, improving feature discoverability, and establishing a
          consistent, scalable design system
        </p>
        <p>
          Ultimately, the aim was to help customers complete transactions with
          greater ease and confidence while strengthening trust in the platform,
          encouraging continued usage, and supporting customer retention.
        </p>
      </div>
      <div className="case-goals-card" aria-hidden="true" />
    </section>
  )
}

interface FinalProductBlock {
  title: string
  copy?: string
  improvements: { label: string; body: string }[]
  visuals?: number
  image?: string
  image2?: string
}

const finalProductBlocks: FinalProductBlock[] = [
  {
    title: "Payments Hub",
    copy: "This page brings together all the payment services available on the platform, making them easy to access in one place.",
    improvements: [
      {
        label: "Centralized payment services",
        body: "Brought all payment services into one view, with a search function to help users quickly find what they need.",
      },
      {
        label: "Quick beneficiary management",
        body: "Made it easier for users to access and manage their beneficiaries directly from the Payment Hub.",
      },
      {
        label: "Clear visual hierarchy",
        body: "Introduced distinct, colorful icons to make each payment service easier to recognize and understand.",
      },
      {
        label: "Scalable design",
        body: "Created a flexible layout that can accommodate additional payment services as the product grows.",
      },
    ],
    image: `${A}/Payment Hub.svg`,
  },
  {
    title: "Local Transfer",
    copy: "A streamlined experience for sending money to Nigerian banks, making transfers simpler, recipients easier to find and transaction updates clearer",
    improvements: [
      {
        label: "Real time Bank Name Lookup",
        body: "Automatically displays the bank name and the bank's uptime percentage as users enter an account number, helping them verify the recipient bank and assess the bank's transfer reliability before proceeding",
      },
      {
        label: "Real-Time Account Lookup",
        body: "Automatically retrieves the recipient's name, bank, and account number when customers enter the details (name/account number) of a previously saved beneficiary, eliminating the need to re-enter their information and making repeat transfers faster and easier",
      },
      {
        label: "Easier Access to Beneficiaries",
        body: "Placed beneficiaries section below the account number field and grouped them into Frequent and Saved categories, helping customers find and select recipients faster without re-entering their details",
      },
      {
        label: "Clear Transaction Confirmation",
        body: "Redesigned the success screen to clearly communicate transaction status and display a timeline of key transfer updates",
      },
    ],
    visuals: 2,
    image: `${A}/Local Transfer 1.svg`,
    image2: `${A}/Local transfer 2.png`,
  },
  {
    title: "Airtime/Data",
    copy: "A unified experience for purchasing airtime and mobile data, making everyday top-ups easier and faster",
    improvements: [
      {
        label: "Unified Airtime & Data",
        body: "Combined airtime and data purchases on one page, using tabs to help users switch easily between the two services",
      },
      {
        label: "Faster Repeat Transactions",
        body: "Displayed previous recipients automatically as users enter a phone number, making repeat purchases quicker and easier.",
      },
    ],
    image: `${A}/Data.png`,
  },
  {
    title: "Bill Payment",
    copy: "A simple, centralized experience for finding billers and paying for everyday services",
    improvements: [
      {
        label: "Quick Access to Popular Billers",
        body: "Displayed popular billers under each category, allowing users to select frequently used services without browsing the full list.",
      },
      {
        label: "Clear Category Layout",
        body: "Grouped billers into well-defined categories, making services easier to browse and find",
      },
      {
        label: "Scalable Design",
        body: "Created a flexible layout that supports additional billers and payment categories as the platform grows.",
      },
    ],
    image: `${A}/Bill Payment.svg`,
  },
  {
    title: "Gift card/Evoucher",
    improvements: [
      {
        label: "Organized Gift Card Categories",
        body: "Grouped gift cards into clear categories for easier discovery and access",
      },
      {
        label: "Clean, Scannable Layout",
        body: "Created a well-structured layout that makes gift cards easier to browse and find.",
      },
    ],
    image: `${A}/Gift card.svg`,
  },
]

function CaseDesignProcess() {
  return (
    <section className="case-design-process" id="design-process">
      <p className="case-eyebrow">DESIGN PROCESS</p>
      <h2 className="case-design-process-title">
        Turning Insights Into Meaningful Design Decisions
      </h2>

      <div className="case-design-steps">
        <div className="case-design-step">
          <h3>Discovering and Understanding User Pain Points</h3>
          <div className="case-design-step-copy">
            <p>
              I synthesized feedback from app store reviews, social media
              complaints, and direct feedback from frequent ALAT users to
              identify recurring pain points. These insights were then
              translated into the core problems (listed above) that shaped the
              direction of the redesign
            </p>
          </div>
        </div>

        <div className="case-design-step">
          <h3>Competitive Analysis &amp; Ideation</h3>
          <div className="case-design-step-copy">
            <p>
              I conducted a competitive analysis to understand how leading banks
              approached similar challenges and identify opportunities to
              improve on existing solutions. I looked beyond traditional banking
              apps and also explored fintech products that offered innovative
              approaches to payments, navigation, and user experience.
            </p>
            <p>
              These insights helped me identify useful patterns, interaction
              ideas, and opportunities for differentiation, which I then used as
              inspiration when developing solutions to the core problems
              identified earlier
            </p>
          </div>
          <a className="case-view-insights" href="#design-process">
            View Insights
          </a>
        </div>

        <div className="case-design-step">
          <h3>Design, Prototype &amp; Test</h3>
          <div className="case-design-step-copy case-design-step-copy--tight">
            <p>
              I validated my ideas early using low-fidelity prototypes before
              moving into high-fidelity designs. These prototypes were created
              and tested in Figma with a group of users provided by the bank. I
              iterated the designs based on each round of feedback, refining the
              experience until the key flows were clear and intuitive
            </p>
            <p>
              After validating ideas through low-fidelity prototypes, I
              progressed to high-fidelity designs. I also worked closely with
              the bank&apos;s management team throughout the process, presenting
              each major feature and incorporating feedback to ensure everyone
              remained aligned on the product&apos;s visual direction
            </p>
            <p>
              I contributed to developing the project&apos;s design system,
              creating reusable components and visual patterns that would ensure
              consistency across the product and support future designs
            </p>
          </div>
        </div>
      </div>

      <div className="case-design-visual">
        <img
          src={`${A}/alat-design-process-visual.png`}
          alt="ALAT send money and transfer success screens"
        />
      </div>
    </section>
  )
}

function CaseFinalProduct() {
  return (
    <section className="case-final-product" id="final-product">
      <p className="case-eyebrow">FINAL PRODUCT</p>
      <h2 className="case-final-product-title">High Fidelity Designs</h2>
      <div className="case-final-blocks">
        {finalProductBlocks.map((block) => (
          <div className="case-final-block" key={block.title}>
            <h3>{block.title}</h3>
            {block.copy ? (
              <p className="case-final-block-copy">{block.copy}</p>
            ) : null}
            <div className="case-final-improvements">
              <h4>What I Improved</h4>
              <ul>
                {block.improvements.map((improvement) => (
                  <li key={improvement.label}>
                    <strong>{improvement.label}:</strong> {improvement.body}
                  </li>
                ))}
              </ul>
            </div>
            {Array.from({ length: block.visuals ?? 1 }, (_, index) => (
              <div
                aria-hidden="true"
                className="case-final-visual"
                key={index}
              >
                {index === 0 && block.image ? (
                  <img
                    src={block.image}
                    alt=""
                    className="case-final-visual-img"
                  />
                ) : null}
                {index === 1 && block.image2 ? (
                  <img
                    src={block.image2}
                    alt=""
                    className="case-final-visual-img"
                  />
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

function CaseConclusion() {
  return (
    <section className="case-conclusion" id="conclusion">
      <p className="case-eyebrow">CONCLUSIONS</p>
      <h2 className="case-conclusion-title">Reflection & Key takeaways</h2>
      <div className="case-conclusion-body">
        <p>
          This project reinforced my belief that good product design goes beyond
          creating a visually appealing interface. Working on ALAT Payments
          experience taught me to look deeper into the problems customers were
          facing, understand the reasons behind those problems, and use those
          insights to guide design decisions.
        </p>
        <p>
          I also learned the importance of balancing user needs, business
          requirements, and stakeholder expectations. Working closely with the
          product owner and other stakeholders throughout the design process
          helped me understand how important communication and alignment are
          when designing products that serve a large number of users.
        </p>
        <p>
          Most importantly, the project challenged me to think about how small
          improvements to navigation, information hierarchy, and interaction
          patterns can make everyday financial tasks feel significantly simpler.
          It strengthened my approach to designing experiences that are not only
          clean and modern, but also useful, intuitive, and purposeful.
        </p>
      </div>
    </section>
  )
}

const moreCaseStudies = [
  {
    title: "Truck App",
    year: "2025",
    category: "Logistics",
    description:
      "Streamlining daily tasks to help drivers manage deliveries, navigate routes, and stay informed.",
    theme: "truck",
  },
  {
    title: "Tpay",
    year: "2025",
    category: "Fintech",
    description:
      "Simplifying how businesses manage payments, payroll, and financial operations.",
    theme: "tpay",
  },
]

function CaseMoreStudies() {
  return (
    <section className="case-more" id="more-case-studies">
      <h2 className="case-more-title">More Case Studies</h2>
      <div className="case-more-grid">
        {moreCaseStudies.map((study) => (
          <article className="case-more-card" key={study.title}>
            <div
              aria-hidden="true"
              className={`case-more-visual case-more-visual--${study.theme}`}
            >
              {study.theme === "truck" ? <TruckPreview /> : null}
              {study.theme === "tpay" ? <TpayPreview /> : null}
            </div>
            <div className="case-more-copy">
              <div className="case-more-meta">
                <span>{study.year}</span>
                <i />
                <span>{study.category}</span>
                <i />
                <span>Case study</span>
              </div>
              <div className="case-more-body">
                <h3>{study.title}</h3>
                <p>{study.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function AlatCaseStudy() {
  return (
    <div className="case-app" id="top">
      <CaseNavigation />
      <main className="case-main">
        <article className="case-content">
          <CaseHero />
          <CaseAbout />
          <CaseProblem />
          <CaseGoals />
          <CaseDesignProcess />
          <CaseFinalProduct />
          <CaseConclusion />
          <CaseMoreStudies />
        </article>
      </main>
      <Footer />
    </div>
  )
}
