import { getPosts } from '@/lib/blog'

export async function GET() {
  const posts = await getPosts()
  const baseUrl = 'https://nubiz.ae'

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>NUBIZ — UAE Business Setup Guides</title>
    <link>${baseUrl}/blog</link>
    <description>Plain-English guides for founders setting up in UAE. Freezone comparisons, corporate tax, banking — updated for 2026.</description>
    <language>en-ae</language>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
      <category>${post.category}</category>
    </item>`,
      )
      .join('')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
