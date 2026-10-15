import { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site-config'
import { client } from '@/sanity/lib/client'
import { projectId } from '@/sanity/env'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getSiteUrl()

  // All static indexable routes per §3 Specification
  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/services/ai-innovation', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/services/strategy', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/people', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/projects', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/industries', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/approach', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/insights', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/cookies', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  // Fetch dynamic published articles from Sanity
  let articleEntries: MetadataRoute.Sitemap = []
  if (projectId && projectId !== 'placeholder-id') {
    try {
      const articles = await client.fetch<Array<{ slug: string; publishedAt?: string }>>(
        `*[_type == "insight" && defined(slug.current)] {
          "slug": slug.current,
          publishedAt
        }`
      )
      articleEntries = (articles || []).map((art) => ({
        url: `${baseUrl}/insights/${art.slug}`,
        lastModified: art.publishedAt ? new Date(art.publishedAt) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
    } catch (err) {
      console.error('Failed to fetch articles for sitemap:', err)
    }
  }

  // Utility, thank-you, studio, and error pages are excluded intentionally
  return [...staticEntries, ...articleEntries]
}

