import type { Metadata } from 'next'
import AlatCaseStudy from '@/components/AlatCaseStudy'

export const metadata: Metadata = {
  title: 'ALATbyWEMA — Case Study — Oshodi David',
  description:
    "ALAT by Wema is Nigeria's first fully digital bank, enabling customers to open accounts and manage their finances entirely online",
}

export default function Page() {
  return <AlatCaseStudy />
}
