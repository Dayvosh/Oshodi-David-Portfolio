import type { Metadata } from 'next'
import About from '@/components/About'

export const metadata: Metadata = {
  title: 'About — Oshodi David',
  description:
    'Hello there, I am Oshodi David — a product designer naturally curious by nature.',
}

export default function Page() {
  return <About />
}
