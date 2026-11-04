'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const A = '/assets'

export default function BankingShowcase() {
  const screenRef = useRef<HTMLDivElement>(null)
  const focusRef = useRef<HTMLDivElement>(null)
  const keypadRef = useRef<HTMLDivElement>(null)
  const typeRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const caretRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const focus = focusRef.current
    const keypad = keypadRef.current
    const type = typeRef.current
    const card = cardRef.current
    const caret = caretRef.current
    if (!focus || !keypad || !type || !card || !caret) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const hiddenType = 'inset(16.25% 100% 77.8% 0%)'
    const fullType = 'inset(16.25% 0% 77.8% 0%)'
    const cardClip = 'inset(21.74% 0% 61.79% 0%)'
    const caretStart = '9.45%'
    const typingSteps = [
      { clip: 'inset(16.25% 88.65% 77.8% 0%)', caret: '11.9%', hold: 0.12 },
      { clip: 'inset(16.25% 87.51% 77.8% 0%)', caret: '13.04%', hold: 0.11 },
      { clip: 'inset(16.25% 85.22% 77.8% 0%)', caret: '15.33%', hold: 0.15 },
      { clip: 'inset(16.25% 83.09% 77.8% 0%)', caret: '17.45%', hold: 0.1 },
      { clip: 'inset(16.25% 80.9% 77.8% 0%)', caret: '19.65%', hold: 0.13 },
      { clip: 'inset(16.25% 78.74% 77.8% 0%)', caret: '21.81%', hold: 0.11 },
      { clip: 'inset(16.25% 76.62% 77.8% 0%)', caret: '23.93%', hold: 0.14 },
      { clip: 'inset(16.25% 74.55% 77.8% 0%)', caret: '26%', hold: 0.1 },
      { clip: 'inset(16.25% 72.23% 77.8% 0%)', caret: '28.32%', hold: 0.12 },
      { clip: 'inset(16.25% 71.29% 77.8% 0%)', caret: '29.35%', hold: 0.16 },
    ]

    const ctx = gsap.context(() => {
      gsap.set(focus, { autoAlpha: 0 })
      gsap.set(keypad, { yPercent: 100, autoAlpha: 1 })
      gsap.set(type, { clipPath: hiddenType })
      gsap.set(card, { clipPath: cardClip, y: -10, autoAlpha: 0 })
      gsap.set(caret, { left: caretStart, autoAlpha: 0 })

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, defaults: { ease: 'power3.inOut' } })
        .to(focus, { autoAlpha: 1, duration: 0.22, ease: 'power2.out' })
        .to(keypad, { yPercent: 0, duration: 0.8, ease: 'power3.out' }, '<0.08')

      typingSteps.forEach((step) => {
        tl.set(type, { clipPath: step.clip }, '>')
          .set(caret, { autoAlpha: 1, left: step.caret }, '<')
          .to({}, { duration: step.hold })
      })

      tl.to(type, { clipPath: fullType, duration: 0.18, ease: 'power1.out' }, '>-0.02')
        .to(caret, { autoAlpha: 0, duration: 0.08 }, '<')
        .to(card, { autoAlpha: 1, y: 0, duration: 0.65, ease: 'power3.out' }, '>-0.02')
        .to(card, { autoAlpha: 0, y: -10, duration: 0.38, ease: 'power2.in' })
        .set(type, { clipPath: hiddenType })
        .set(caret, { autoAlpha: 0, left: caretStart })
        .to(keypad, { yPercent: 100, duration: 0.7, ease: 'power3.in' }, '<0.1')
        .to(focus, { autoAlpha: 0, duration: 0.2 }, '<0.2')
    }, screenRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="project-visual banking">
      <div className="banking-phone" aria-hidden="true">
        <img className="banking-frame" src={`${A}/Iphone.svg`} alt="" draggable={false} />
        <div className="banking-screen-window" ref={screenRef}>
          <img className="banking-screen" src={`${A}/1.svg`} alt="" draggable={false} />
          <div className="banking-focus" ref={focusRef}>
            <img className="banking-focus-img" src={`${A}/2.svg`} alt="" draggable={false} />
          </div>
          <div className="banking-type" ref={typeRef}>
            <img className="banking-type-img" src={`${A}/4.svg`} alt="" draggable={false} />
          </div>
          <div className="banking-card" ref={cardRef}>
            <img className="banking-card-img" src={`${A}/4.svg`} alt="" draggable={false} />
          </div>
          <div className="banking-keypad" ref={keypadRef}>
            <img className="banking-keypad-img" src={`${A}/2.svg`} alt="" draggable={false} />
          </div>
          <span className="banking-caret" ref={caretRef} />
          <span className="banking-island" />
        </div>
      </div>
    </div>
  )
}
