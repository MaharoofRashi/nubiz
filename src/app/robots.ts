import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // Explicitly allow beneficial AI crawlers
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'GoogleOther',
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      // Block non-beneficial training scrapers
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'omgili',
        disallow: '/',
      },
    ],
    sitemap: 'https://nubiz.ae/sitemap.xml',
    host: 'https://nubiz.ae',
  }
}
