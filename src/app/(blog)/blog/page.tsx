import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/page-hero'
import { BlogFilter } from '@/components/blog/blog-filter'
import type { PostCardData } from '@/components/blog/post-card'
import { getPosts, categoryLabel, formatDate } from '@/lib/blog'

export function generateMetadata(): Metadata {
  return {
    title: { absolute: 'Blog — UAE Business Setup Guides | NUBIZ' },
    description:
      'Plain-English guides for founders setting up in UAE. Freezone comparisons, corporate tax explained, banking guides. Updated 2026.',
  }
}

const SECTION: React.CSSProperties = {
  padding: 'clamp(56px, 7vw, 88px) clamp(20px, 5vw, 56px)',
}
const CONTAINER: React.CSSProperties = { maxWidth: 1160, margin: '0 auto' }

export default async function BlogIndexPage() {
  const posts = await getPosts()
  const featured = posts.find((p) => p.featured) ?? posts[0]
  const cardData: PostCardData[] = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    category: p.category,
    readingTime: p.readingTime,
  }))

  return (
    <main>
      <PageHero
        eyebrow="NUBIZ Blog"
        title={
          <>
            Guides for <span style={{ color: 'var(--pink)' }}>Founders</span>
          </>
        }
        subtitle="Plain-English answers to the questions every founder asks before launching in UAE. Updated for 2026 regulations."
      />

      <section style={{ ...SECTION, background: '#fff' }}>
        <div style={CONTAINER}>
          {featured ? (
            <Link
              href={`/blog/${featured.slug}`}
              style={{
                display: 'block',
                background: '#f9f9f9',
                border: '1px solid #e5e7eb',
                borderLeft: '4px solid #EE005D',
                borderRadius: 12,
                padding: 'clamp(24px, 4vw, 40px)',
                marginBottom: 48,
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  background: 'var(--pink)',
                  color: '#fff',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '5px 13px',
                  borderRadius: 999,
                  marginBottom: 18,
                }}
              >
                {categoryLabel(featured.category)}
              </span>
              <h2
                style={{
                  fontSize: 'clamp(22px, 3vw, 28px)',
                  fontWeight: 800,
                  color: '#0a0a0a',
                  lineHeight: 1.2,
                  margin: '0 0 12px',
                  letterSpacing: '-0.02em',
                }}
              >
                {featured.title}
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: '#4b5563', margin: '0 0 20px', maxWidth: 760 }}>
                {featured.description}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8, fontSize: 13, color: '#9ca3af', marginBottom: 18 }}>
                <span>{featured.author}</span>
                <span>·</span>
                <span>{formatDate(featured.date)}</span>
                <span>·</span>
                <span>{featured.readingTime}</span>
              </div>
              <span className="nz-inline-link" style={{ fontSize: 15 }}>
                Read guide →
              </span>
            </Link>
          ) : null}

          <BlogFilter posts={cardData} />
        </div>
      </section>
    </main>
  )
}
