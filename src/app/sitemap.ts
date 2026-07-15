import type { MetadataRoute } from 'next'
import { getPosts } from '@/lib/blog'

const baseUrl = 'https://nubiz.ae'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()

  return [
    // Core
    { url: baseUrl, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog`, changeFrequency: 'daily', priority: 0.9 },

    // Business Setup
    { url: `${baseUrl}/business-setup/mainland`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/business-setup/freezone`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/business-setup/offshore`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/business-setup/offshore/rak-icc`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/business-setup/offshore/jafza-offshore`, changeFrequency: 'monthly', priority: 0.7 },

    // Freezones (8 pages)
    ...['ifza', 'meydan', 'dmcc', 'adgm', 'jafza', 'anc-fz', 'rakez', 'spc-fz'].map((slug) => ({
      url: `${baseUrl}/business-setup/freezone/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Corporate Services
    { url: `${baseUrl}/corporate-services`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/corporate-services/pro-services`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/corporate-services/residency`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/corporate-services/accounting`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/corporate-services/bank-account`, changeFrequency: 'monthly', priority: 0.7 },

    // Legal
    { url: `${baseUrl}/privacy-policy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: 'yearly', priority: 0.3 },

    // Blog posts (dynamic)
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      lastModified: new Date(post.date),
    })),
  ]
}
