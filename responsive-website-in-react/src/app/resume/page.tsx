import type { Metadata } from "next"
import Resume from "@/components/Resume"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Resume — Oshodi David",
  description:
    "Oshodi David — Product Designer based in Lagos, Nigeria with 5+ years of experience.",
  path: "/resume",
})

export default function Page() {
  return <Resume />
}
