"use client"

import { useEffect, useState } from "react"

export function useTheme() {
  const [dark, setDark] = useState(true)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setDark(window.localStorage.getItem("theme") !== "light")
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    window.localStorage.setItem("theme", dark ? "dark" : "light")
    document.documentElement.classList.toggle("dark", dark)
  }, [dark, ready])

  return { dark, setDark }
}
