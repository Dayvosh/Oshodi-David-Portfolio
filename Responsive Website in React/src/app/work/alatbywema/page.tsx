import type { Metadata } from "next"
import CaseStudy from "@/components/CaseStudy"
import { caseStudies } from "@/lib/caseStudies"

const study = caseStudies.alatbywema

export const metadata: Metadata = study.metadata

export default function Page() {
  return <CaseStudy study={study} />
}
