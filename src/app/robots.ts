import { MetadataRoute } from 'next'
import { getSiteUrl, isProduction } from '@/lib/site-config'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl()

  // Staging / Non-production environments must block all crawlers
  if (!isProduction()) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }

  // Production environment allowing search indexing while protecting utility/admin routes
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/contact/thank-you',
        '/studio',
        '/studio/*',
        '/api',
        '/api/*',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

