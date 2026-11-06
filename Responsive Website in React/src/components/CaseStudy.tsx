"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { useEffect, useState } from "react"
import type {
  CaseStudyData,
  CaseTheme,
  MoreStudy,
} from "@/lib/caseStudies"
import { moreCaseStudies } from "@/lib/caseStudies"
import BankingShowcase from "./BankingShowcase"
import CaseNavigation from "./CaseNavigation"
import Footer from "./Footer"
import LiveAppButton from "./LiveAppButton"
import ThrPreview from "./ThrPreview"
import TopBar from "./TopBar"
import TpayPreview from "./TpayPreview"
import TruckPreview from "./TruckPreview"
import { useTheme } from "./useTheme"

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

function CaseHeroVisual({ theme }: { theme: CaseTheme }) {
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

function CaseHero({ study }: { study: CaseStudyData }) {
  const { hero } = study

  return (
    <section className="case-hero">
      <p className="case-eyebrow">{hero.eyebrow}</p>
      <h1 className="case-title">{hero.title}</h1>
      <p className="case-subtext">{hero.subtext}</p>
      {hero.liveApp ? <LiveAppButton /> : null}
      <div className="case-visual" aria-hidden="true">
        <CaseHeroVisual theme={hero.visual} />
      </div>
      <div className="case-meta">
        {hero.meta.map((item) => (
          <MetaCard
            key={item.label}
            label={item.label}
            value={item.value}
            wide={item.wide}
          />
        ))}
      </div>
    </section>
  )
}

function CaseAbout({ study }: { study: CaseStudyData }) {
  const { about } = study

  return (
    <section className="case-about" id="about-project">
      <p className="case-eyebrow">{about.eyebrow}</p>
      <h2 className="case-about-title">{about.title}</h2>
      <div className="case-about-copy">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {about.emphasis ? (
          <p className="case-about-emphasis">{about.emphasis}</p>
        ) : null}
      </div>
    </section>
  )
}

function CaseProblem({ study }: { study: CaseStudyData }) {
  const { problem } = study

  return (
    <section className="case-problem" id="problem">
      <p className="case-eyebrow">{problem.eyebrow}</p>
      <h2 className="case-problem-title">{problem.title}</h2>

      {problem.quote ? (
        <figure className="case-problem-quote">
          <blockquote className="case-problem-quote-text">
            {problem.quote.text}
          </blockquote>
          <figcaption className="case-problem-quote-author">
            <img
              className="case-problem-quote-avatar"
              src={problem.quote.image}
              alt={problem.quote.author}
            />
            <div>
              <p className="case-problem-quote-name">{problem.quote.author}</p>
              <p className="case-problem-quote-role">{problem.quote.role}</p>
            </div>
          </figcaption>
        </figure>
      ) : null}

      <div className="case-problem-copy">
        <p>{problem.intro}</p>
      </div>

      {problem.screenshots?.length ? (
        <div
          className="case-reviews"
          aria-label={problem.screenshotsLabel ?? "Project screenshots"}
        >
          {problem.screenshots.map((shot, index) => (
            <div className="case-review-shot" key={`${shot.src}-${index}`}>
              <img src={shot.src} alt={shot.alt} />
            </div>
          ))}
        </div>
      ) : null}

      <div className="case-core-problems">
        <h3>Core Problems</h3>
        <div className="case-core-problems-list">
          {problem.coreProblems.map((item) => (
            <div className="case-core-problem" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {problem.oldUi ? (
        <div
          className={
            problem.oldUi.variant
              ? `case-old-ui case-old-ui--${problem.oldUi.variant}`
              : "case-old-ui"
          }
        >
          <span className="case-old-ui-label">{problem.oldUi.label}</span>
          <div className="case-old-ui-phones">
            {problem.oldUi.images.map((image) => (
              <img key={image.src} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}

function CaseGoals({ study }: { study: CaseStudyData }) {
  const { goals } = study

  return (
    <section className="case-goals" id="goal">
      <p className="case-eyebrow">{goals.eyebrow}</p>
      <h2 className="case-goals-title">{goals.title}</h2>
      <div className="case-goals-copy">
        {goals.paragraphs.map((paragraph, index) => (
          <p
            key={paragraph}
            className={
              goals.emphasizeFirst && index === 0
                ? "case-goals-emphasis"
                : undefined
            }
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}

function CaseDesignProcess({ study }: { study: CaseStudyData }) {
  const { designProcess } = study
  const hasFlowSection = Boolean(designProcess.flowSection)

  return (
    <section className="case-design-process" id="design-process">
      <p className="case-eyebrow">{designProcess.eyebrow}</p>
      <h2 className="case-design-process-title">{designProcess.title}</h2>

      {hasFlowSection ? (
        <>
          {designProcess.intro?.length ? (
            <div className="case-design-intro">
              {designProcess.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}

          {designProcess.startVisual ? (
            <div className="case-design-start">
              <img
                src={designProcess.startVisual.src}
                alt={designProcess.startVisual.alt}
              />
            </div>
          ) : null}

          {designProcess.flowSection ? (
            <div className="case-design-flows">
              <h3 className="case-design-subhead">
                {designProcess.flowSection.title}
              </h3>
              <div className="case-design-intro">
                {designProcess.flowSection.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {designProcess.flowSection.diagrams.map((diagram) => (
                <div className="case-design-flow" key={diagram.title}>
                  <h4 className="case-design-flow-title">{diagram.title}</h4>
                  <div className="case-design-flow-panel">
                    <div className="case-design-flow-column">
                      <span className="case-design-flow-tag case-design-flow-tag--old">
                        OLD FLOW
                      </span>
                      <ol className="case-design-flow-steps">
                        {diagram.oldFlow.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                    </div>
                    <div className="case-design-flow-column">
                      <span className="case-design-flow-tag case-design-flow-tag--new">
                        NEW FLOW
                      </span>
                      <ol className="case-design-flow-steps">
                        {diagram.newFlow.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div className="case-design-steps">
            {designProcess.steps?.map((step) => (
              <div className="case-design-step" key={step.title}>
                <h3>{step.title}</h3>
                <div
                  className={
                    step.copy.length > 2
                      ? "case-design-step-copy case-design-step-copy--tight"
                      : "case-design-step-copy"
                  }
                >
                  {step.copy.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {step.link ? (
                  <a className="case-view-insights" href={step.link.href}>
                    {step.link.label}
                  </a>
                ) : null}
              </div>
            ))}
          </div>

          {designProcess.visual ? (
            <div className="case-design-visual">
              <img
                src={designProcess.visual.src}
                alt={designProcess.visual.alt}
              />
            </div>
          ) : null}
        </>
      )}
    </section>
  )
}

function CaseFinalProduct({ study }: { study: CaseStudyData }) {
  const { finalProduct } = study

  return (
    <section className="case-final-product" id="final-product">
      <p className="case-eyebrow">{finalProduct.eyebrow}</p>
      <h2 className="case-final-product-title">{finalProduct.title}</h2>
      {finalProduct.illustrationsSection ? (
        <div className="case-final-illustrations">
          <h3>{finalProduct.illustrationsSection.title}</h3>
          {finalProduct.illustrationsSection.paragraphs.map((paragraph) => (
            <p className="case-final-block-copy" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <div className="case-final-illustration-grid">
            {finalProduct.illustrationsSection.items.map((item, index) => (
              <div
                aria-hidden={item.src ? undefined : true}
                className={
                  item.wide
                    ? "case-final-illustration is-wide"
                    : "case-final-illustration"
                }
                key={index}
              >
                {item.src ? (
                  <img src={item.src} alt={item.alt ?? ""} />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <div className="case-final-blocks">
        {finalProduct.blocks.map((block) => (
          <div className="case-final-block" key={block.title}>
            <h3>{block.title}</h3>
            {block.copy ? (
              <p className="case-final-block-copy">{block.copy}</p>
            ) : null}
            {block.paragraphs?.map((paragraph) => (
              <p className="case-final-block-copy" key={paragraph}>
                {paragraph}
              </p>
            ))}
            {block.improvements.length ? (
              <div className="case-final-improvements">
                <h4>{block.improvementsTitle ?? "What I Improved"}</h4>
                <ul>
                  {block.improvements.map((improvement) => (
                    <li key={improvement.body}>
                      {improvement.label ? (
                        <>
                          <strong>{improvement.label}:</strong>{" "}
                        </>
                      ) : null}
                      {improvement.body}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {block.groups ? (
              <div className="case-final-groups">
                {block.groups.map((group, groupIndex) => (
                  <div
                    className="case-final-group"
                    key={group.images[0]?.src ?? groupIndex}
                  >
                    {group.copy?.map((paragraph) => (
                      <p className="case-final-group-copy" key={paragraph}>
                        {paragraph}
                      </p>
                    ))}
                    <div
                      className={`case-final-gallery case-final-gallery--${group.layout}`}
                    >
                      {group.images.map((image) => (
                        <div className="case-final-image" key={image.src}>
                          <img src={image.src} alt={image.alt} />
                          {image.label ? (
                            <span
                              className={`case-design-flow-tag ${
                                image.label === "OLD DESIGN"
                                  ? "case-design-flow-tag--old"
                                  : "case-design-flow-tag--new"
                              } case-final-design-label`}
                              style={{ top: image.labelTop }}
                            >
                              {image.label}
                            </span>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              Array.from({ length: block.visuals ?? 1 }, (_, index) => (
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
              ))
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function CaseConclusion({ study }: { study: CaseStudyData }) {
  const { conclusion } = study

  return (
    <section className="case-conclusion" id="conclusion">
      <p className="case-eyebrow">{conclusion.eyebrow}</p>
      <h2 className="case-conclusion-title">{conclusion.title}</h2>
      <div className="case-conclusion-body">
        {conclusion.paragraphs.map((paragraph, index) => {
          const emphasis = index === 0 ? conclusion.emphasis : undefined
          if (emphasis && paragraph.startsWith(emphasis)) {
            return (
              <p key={paragraph}>
                <span className="case-conclusion-emphasis">{emphasis}</span>
                {paragraph.slice(emphasis.length)}
              </p>
            )
          }
          return <p key={paragraph}>{paragraph}</p>
        })}
      </div>
    </section>
  )
}

function MoreStudyVisual({ theme }: { theme: CaseTheme }) {
  if (theme === "banking") {
    return <BankingShowcase />
  }
  if (theme === "truck") {
    return <TruckPreview />
  }
  if (theme === "tpay") {
    return <TpayPreview />
  }
  return <ThrPreview />
}

function CaseMoreStudies({ study }: { study: CaseStudyData }) {
  const currentPath = `/work/${study.slug}`
  const related: MoreStudy[] = moreCaseStudies.filter(
    (item) => item.href !== currentPath,
  )

  return (
    <section className="case-more" id="more-case-studies">
      <h2 className="case-more-title">More Case Studies</h2>
      <div className="case-more-grid">
        {related.map((item) => (
          <Link
            className="case-more-card-link"
            href={item.href}
            key={item.title}
          >
            <article className="case-more-card">
              <div
                aria-hidden="true"
                className={`case-more-visual case-more-visual--${item.theme}`}
              >
                <MoreStudyVisual theme={item.theme} />
              </div>
              <div className="case-more-copy">
                <div className="case-more-meta">
                  <span>{item.year}</span>
                  <i />
                  <span>{item.category}</span>
                  <i />
                  <span>Case study</span>
                </div>
                <div className="case-more-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default function CaseStudy({ study }: { study: CaseStudyData }) {
  const { dark, setDark } = useTheme()
  const [headerHidden, setHeaderHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    let frame = 0

    const update = () => {
      frame = 0
      const y = window.scrollY
      const diff = y - lastY
      if (Math.abs(diff) < 4) return
      setHeaderHidden(diff > 0 && y > 80)
      lastY = y
    }

    const handleScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(update)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (frame !== 0) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className={`case-app${headerHidden ? " header-hidden" : ""}`} id="top">
      <div className="case-layout">
        <CaseNavigation dark={dark} setDark={setDark} />
        <main className="case-main">
          <TopBar dark={dark} setDark={setDark} />
          <article className="case-content">
            <CaseHero study={study} />
            <CaseAbout study={study} />
            <CaseProblem study={study} />
            <CaseGoals study={study} />
            <CaseDesignProcess study={study} />
            <CaseFinalProduct study={study} />
            <CaseConclusion study={study} />
            <CaseMoreStudies study={study} />
          </article>
        </main>
      </div>
      <Footer />
    </div>
  )
}
