import type { Metadata } from "next"
import Portfolio from "@/components/Portfolio"
import { defaultDescription, pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Oshodi David — Product Designer",
  description: defaultDescription,
  path: "/",
})

export default function Page() {
  return <Portfolio />
}
