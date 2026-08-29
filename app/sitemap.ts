import type { MetadataRoute } from 'next'
import { projects } from '@/lib/data'

const siteUrl = 'https://mahmed.thejetzt.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = projects
    .filter((p) => p.caseStudy)
    .map((p) => ({
      url: `${siteUrl}/work/${p.id}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    }))

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...caseStudies,
  ]
}
