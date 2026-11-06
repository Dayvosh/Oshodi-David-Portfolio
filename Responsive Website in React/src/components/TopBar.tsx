'use client'

import { useEffect, useState } from 'react'
import Icon from './Icon'
import SoundSwitch from './SoundSwitch'
import ThemeSwitch from './ThemeSwitch'

export default function TopBar({
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
        <ThemeSwitch dark={dark} setDark={setDark} />
        <SoundSwitch />
        <a className="email-button compact" href="mailto:davidoshodi656@gmail.com">
          <Icon file="e53f1.svg" />
          Email Me
        </a>
      </div>
    </div>
  )
}
