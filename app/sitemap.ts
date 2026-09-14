import type { MetadataRoute } from 'next'
import { practiceAreas } from '@/lib/practice-areas'

const BASE = 'https://www.studiolegalecuomogiuseppe.it'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/chi-sono`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/aree-di-pratica`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/consulenza-preventiva`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/software`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/contatti`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/cookie-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/note-legali`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const areaRoutes: MetadataRoute.Sitemap = practiceAreas.map((area) => ({
    url: `${BASE}/aree-di-pratica/${area.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...areaRoutes]
}
