import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://asheron.example.com' // Replace with actual domain

  // All static routes per the site map requirement
  const routes = [
    '',
    '/about',
    '/services',
    '/services/ai-innovation',
    '/services/strategy',
    '/services/people',
    '/services/projects',
    '/industries',
    '/insights',
    '/contact',
    '/privacy',
    '/terms',
    '/cookies'
  ]

  const sitemapRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Thank-you and Error pages are excluded from sitemap intentionally
  return sitemapRoutes
}
