"use client"

import { useEffect, useState } from "react"
import Icon from "./Icon"

const IOS_URL = "https://apps.apple.com/ng/app/alat/id1222853161"
const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.wemabank.alat.prod"
const WEB_URL = "https://apps.apple.com/ng/app/alat/id1222853161"

function getStoreUrl() {
  const ua = navigator.userAgent
  const isIOS =
    /iPhone|iPad|iPod/i.test(ua) ||
    (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1)
  if (isIOS) return IOS_URL
  if (/Android/i.test(ua)) return ANDROID_URL
  return WEB_URL
}

export default function LiveAppButton({
  href: externalHref,
}: {
  href?: string
}) {
  const [href, setHref] = useState(externalHref ?? WEB_URL)

  useEffect(() => {
    setHref(externalHref ?? getStoreUrl())
  }, [externalHref])

  return (
    <a
      className="case-live-button"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      View Live App
      <Icon file="case-arrow.svg" className="case-live-arrow" />
    </a>
  )
}
