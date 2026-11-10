import type { Metadata } from "next"

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://dayvosh.github.io/Oshodi-David-Portfolio"

export const siteName = "Oshodi David"

export const defaultDescription =
  "Product designer combining product thinking, UX, and visual design to turn real user problems into experiences people understand and trust."

const ogImage = {
  url: "/og-image.webp",
  width: 1200,
  height: 630,
  alt: "Oshodi David — Product Designer",
}

export function pageMetadata({
  title,
  description,
  path = "/",
}: {
  title: string
  description: string
  path?: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title,
      description,
      url: path,
      siteName,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  }
}
