import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import { useMDXComponents } from '@/mdx-components'
import { PostCard, type PostCardData } from '@/components/blog/post-card'
import { ShareButtons } from '@/components/blog/share-buttons'
import { getPosts, getPost, getRelated, categoryLabel, formatDate } from '@/lib/blog'

const WA_LINK = 'https://wa.me/971564899004'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}
  return {
    title: { absolute: `${post.title} | NUBIZ` },
    description: post.description,
  }
}

/** Slugify to match rehype-slug (github-slugger) output for plain heading text. */
function slugify(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
}

function extractToc(content: string): { text: string; id: string }[] {
  const toc: { text: string; id: string }[] = []
  let inFence = false
  for (const line of content.split('\n')) {
    if (line.trim().startsWith('```')) inFence = !inFence
    if (inFence) continue
    const match = /^##\s+(.+?)\s*$/.exec(line)
    if (match) {
      const text = match[1].replace(/[*_`]/g, '').trim()
      toc.push({ text, id: slugify(text) })
    }
  }
  return toc
}

const CONTAINER: React.CSSProperties = { maxWidth: 1160, margin: '0 auto', padding: '0 clamp(20px, 5vw, 56px)' }

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const { content } = await compileMDX({
    source: post.content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug],
      },
    },
    components: useMDXComponents({}),
  })

  const toc = extractToc(post.content)
  const related = await getRelated(post.slug, post.tags)
  const relatedCards: PostCardData[] = related.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    category: p.category,
    readingTime: p.readingTime,
  }))
  const shareUrl = `https://nubiz.ae/blog/${post.slug}`

  return (
    <main style={{ background: '#fff' }}>
      <div style={CONTAINER}>
        <div className="blog-article-layout">
          {/* Article */}
          <article style={{ minWidth: 0 }}>
            {/* Breadcrumb */}
            <nav style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 24 }}>
              <Link href="/blog" className="nz-inline-link">
                Blog
              </Link>
              <span style={{ color: '#9ca3af' }}>›</span>
              <Link href={`/blog/category/${post.category}`} className="nz-inline-link">
                {categoryLabel(post.category)}
              </Link>
              <span style={{ color: '#9ca3af' }}>›</span>
              <span style={{ color: '#9ca3af' }}>{post.title}</span>
            </nav>

            {/* Header */}
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
              {categoryLabel(post.category)}
            </span>
            <h1
              style={{
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 800,
                color: '#0a0a0a',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                margin: '0 0 16px',
              }}
            >
              {post.title}
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: '#4b5563', margin: '0 0 20px' }}>
              {post.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, fontSize: 13, color: '#9ca3af' }}>
              <span>{post.author}</span>
              <span>·</span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
            <hr style={{ border: 'none', borderTop: '2px solid #EE005D', margin: '24px 0' }} />

            {/* Body */}
            <div style={{ maxWidth: 680 }}>{content}</div>

            {/* Author box */}
            <div
              style={{
                display: 'flex',
                gap: 18,
                alignItems: 'center',
                marginTop: 56,
                padding: 28,
                background: '#f9f9f9',
                border: '1px solid #e5e7eb',
                borderRadius: 12,
              }}
            >
              <span
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'var(--pink)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 24,
                  fontWeight: 800,
                  flex: 'none',
                }}
              >
                N
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: '#0a0a0a' }}>
                  Written by {post.author}
                </span>
                <span style={{ fontSize: 14, color: '#6b7280' }}>
                  Expert business setup consultants in Dubai, UAE
                </span>
                <span style={{ fontSize: 12.5, color: '#9ca3af' }}>A Supreme Services Company</span>
              </div>
            </div>

            {/* Related posts */}
            {relatedCards.length > 0 ? (
              <div style={{ marginTop: 64 }}>
                <h2
                  style={{
                    fontSize: 'clamp(22px, 2.5vw, 28px)',
                    fontWeight: 800,
                    color: '#0a0a0a',
                    letterSpacing: '-0.01em',
                    margin: '0 0 24px',
                  }}
                >
                  You Might Also Like
                </h2>
                <div className="blog-post-grid">
                  {relatedCards.map((p) => (
                    <PostCard key={p.slug} post={p} />
                  ))}
                </div>
              </div>
            ) : null}
          </article>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            {/* Consultation card */}
            <div style={{ background: 'var(--pink)', borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
                Ready to Set Up in UAE?
              </span>
              <span style={{ fontSize: 14.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.9)' }}>
                Talk to a NUBIZ advisor. Free, no obligation, 15 minutes.
              </span>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: '#fff',
                  color: '#0a0a0a',
                  fontWeight: 700,
                  fontSize: 14,
                  padding: '11px 16px',
                  borderRadius: 8,
                }}
              >
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: 'transparent',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 14,
                  padding: '11px 16px',
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.6)',
                }}
              >
                Book a Call
              </Link>
            </div>

            {/* TOC card */}
            {toc.length > 0 ? (
              <div className="blog-sidebar-card blog-toc-card" style={{ borderTop: '3px solid #EE005D' }}>
                <span style={{ fontSize: 15, fontWeight: 800, color: '#0a0a0a', display: 'block', marginBottom: 14 }}>
                  In This Guide
                </span>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="blog-toc-link"
                      style={{ fontSize: 13.5, lineHeight: 1.45, color: '#6b7280' }}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            ) : null}

            {/* Share card */}
            <div className="blog-sidebar-card">
              <span style={{ fontSize: 15, fontWeight: 800, color: '#0a0a0a', display: 'block', marginBottom: 14 }}>
                Share this guide
              </span>
              <ShareButtons url={shareUrl} title={post.title} />
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
