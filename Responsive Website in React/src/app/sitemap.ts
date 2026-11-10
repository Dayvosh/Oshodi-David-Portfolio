import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/resume", priority: 0.7 },
    { path: "/work/alatbywema", priority: 0.9 },
    { path: "/work/truck-app", priority: 0.9 },
    { path: "/work/tpay", priority: 0.9 },
    { path: "/work/thr", priority: 0.9 },
  ]

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }))
}
