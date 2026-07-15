import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/page-hero'
import { PostCard, type PostCardData } from '@/components/blog/post-card'
import { getAllCategories, getByCategory, categoryLabel } from '@/lib/blog'

export async function generateStaticParams() {
  const categories = await getAllCategories()
  return categories.map((category) => ({ category }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category } = await params
  const label = categoryLabel(category)
  return {
    title: { absolute: `${label} Guides — UAE Business Setup | NUBIZ` },
    description: `NUBIZ guides on ${label.toLowerCase()} for founders setting up in the UAE. Plain-English, updated for 2026.`,
  }
}

const SECTION: React.CSSProperties = {
  padding: 'clamp(56px, 7vw, 88px) clamp(20px, 5vw, 56px)',
}
const CONTAINER: React.CSSProperties = { maxWidth: 1160, margin: '0 auto' }

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const posts = await getByCategory(category)
  if (posts.length === 0) notFound()

  const label = categoryLabel(category)
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
            {label} <span style={{ color: 'var(--pink)' }}>Guides</span>
          </>
        }
        subtitle={`Everything we've written on ${label.toLowerCase()} for founders setting up in the UAE.`}
      />

      <section style={{ ...SECTION, background: '#fff' }}>
        <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', gap: 28 }}>
          <Link href="/blog" className="nz-inline-link" style={{ fontSize: 14 }}>
            ← All guides
          </Link>
          <div className="blog-post-grid">
            {cardData.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
