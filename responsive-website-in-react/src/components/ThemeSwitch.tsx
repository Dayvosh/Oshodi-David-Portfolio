"use client"

import Icon from "./Icon"

export default function ThemeSwitch({
  dark,
  setDark,
}: {
  dark: boolean
  setDark: (value: boolean) => void
}) {
  return (
    <div className="theme-switch" aria-label="Color theme">
      <button
        className={!dark ? "selected" : ""}
        onClick={() => setDark(false)}
        aria-label="Use light theme"
      >
        <Icon file="08cb8.svg" />
      </button>
      <button
        className={dark ? "selected" : ""}
        onClick={() => setDark(true)}
        aria-label="Use dark theme"
      >
        <Icon file="0624c.svg" />
      </button>
    </div>
  )
}
