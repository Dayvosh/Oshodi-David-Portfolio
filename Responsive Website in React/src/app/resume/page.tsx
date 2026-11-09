import type { Metadata } from 'next'
import Resume from '@/components/Resume'

export const metadata: Metadata = {
  title: 'Resume — Oshodi David',
  description:
    'Oshodi David — Product Designer based in Lagos, Nigeria with 5+ years of experience.',
}

export default function Page() {
  return <Resume />
}
