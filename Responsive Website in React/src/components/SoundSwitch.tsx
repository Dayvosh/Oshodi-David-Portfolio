"use client"

import { useSound } from "./SoundProvider"

export default function SoundSwitch() {
  const { enabled, toggle } = useSound()

  return (
    <button
      className="sound-switch"
      type="button"
      onClick={toggle}
      aria-label={enabled ? "Turn sound off" : "Turn sound on"}
      aria-pressed={enabled}
      title={enabled ? "Sound on" : "Sound off"}
    >
      {enabled ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 6h2l3-3v10l-3-3H2z" fill="currentColor" stroke="none" />
          <path d="M9.5 5a3 3 0 0 1 0 6" />
          <path d="M11.5 3.5a6 6 0 0 1 0 9" />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 6h2l3-3v10l-3-3H2z" fill="currentColor" stroke="none" />
          <path d="M9.5 6.5l3.5 3.5M13 6.5l-3.5 3.5" />
        </svg>
      )}
    </button>
  )
}
