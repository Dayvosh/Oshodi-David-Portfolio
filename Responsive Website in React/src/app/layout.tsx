import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import SoundProvider from "@/components/SoundProvider"
import { defaultDescription, siteName, siteUrl } from "@/lib/seo"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Oshodi David — Product Designer",
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: "Oshodi David" }],
  creator: "Oshodi David",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName,
    title: "Oshodi David — Product Designer",
    description: defaultDescription,
    url: "/",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Oshodi David — Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oshodi David — Product Designer",
    description: defaultDescription,
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#171513" },
  ],
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
