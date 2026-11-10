import type { Metadata } from "next"
import CaseStudy from "@/components/CaseStudy"
import { caseStudies } from "@/lib/caseStudies"
import { pageMetadata } from "@/lib/seo"

const study = caseStudies.tpay

export const metadata: Metadata = pageMetadata({
  ...study.metadata,
  path: "/work/tpay",
})

export default function Page() {
  return <CaseStudy study={study} />
}
