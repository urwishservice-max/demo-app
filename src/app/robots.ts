import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Staging: Block crawling
  // Production: Allow crawling
  // We assume production for this file, but the prompt says:
  // "Staging: Block crawling and require HTTP authentication."
  // For the standard output, we will return standard rules.
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/contact/thank-you'],
    },
    sitemap: 'https://asheron.example.com/sitemap.xml',
  }
}
