"use client"

import { useEffect, useRef, useState } from "react"

const A = "/assets"
const TRUCK_REAR_X = 1.254

export default function TruckPreview() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [svg, setSvg] = useState("")

  useEffect(() => {
    const controller = new AbortController()

    fetch(`${A}/Truck App 2.svg`, { signal: controller.signal })
      .then((response) => response.text())
      .then((markup) => setSvg(markup))
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return
        console.error("Unable to load Truck App 2.svg", error)
      })

    return () => controller.abort()
  }, [])

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap || !svg) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const root = wrap.querySelector<SVGSVGElement>("svg")
    const truck = wrap.querySelector<SVGGElement>("#truck-illustration")
    if (!root || !truck) return

    const rootMatrix = root.getCTM()
    const truckMatrix = truck.getCTM()
    if (!rootMatrix || !truckMatrix) return

    const toRoot = rootMatrix.inverse().multiply(truckMatrix)
    const rearX = toRoot.a * TRUCK_REAR_X + toRoot.e
    const { x, width } = root.viewBox.baseVal
    const parkDistance = x + width / 2 - rearX

    let context: { revert: () => void } | undefined
    let cancelled = false

    void import("gsap").then(({ gsap }) => {
      if (cancelled) return
      context = gsap.context(() => {
        gsap
          .timeline({ repeat: -1 })
          .fromTo(truck, { x: 0 }, {
            x: parkDistance,
            duration: 7,
            ease: "power2.inOut",
          })
          .to({}, { duration: 1 })
          .to(truck, { x: 0, duration: 5, ease: "power2.inOut" })
      }, wrap)
    })

    return () => {
      cancelled = true
      context?.revert()
    }
  }, [svg])

  return (
    <div
      className="truck-image-wrap"
      ref={wrapRef}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
