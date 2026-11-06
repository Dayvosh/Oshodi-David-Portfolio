import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import SoundProvider from '@/components/SoundProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Oshodi David — Product Designer',
  description:
    'Delivers a responsive website that adapts seamlessly across mobile, tablet, and laptop devices, ensuring optimal user experience on any screen size.',
  icons: {
    icon: '/Favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')!=='light')document.documentElement.classList.add('dark')}catch(e){document.documentElement.classList.add('dark')}",
          }}
        />
        <SoundProvider>{children}</SoundProvider>
      </body>
    </html>
  )
}
