import type { Metadata } from "next"
import About from "@/components/About"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "About — Oshodi David",
  description:
    "Hello there, I am Oshodi David — a product designer naturally curious by nature.",
  path: "/about",
})

export default function Page() {
  return <About />
}
