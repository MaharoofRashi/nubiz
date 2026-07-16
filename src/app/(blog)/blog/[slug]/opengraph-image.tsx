import { ImageResponse } from 'next/og'
import { getPost, getPosts } from '@/lib/blog'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'NUBIZ — UAE Business Setup Guide'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '64px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Category pill */}
        <div
          style={{
            background: 'rgba(238,0,93,0.15)',
            border: '1px solid rgba(238,0,93,0.4)',
            borderRadius: 999,
            padding: '8px 20px',
            fontSize: 14,
            fontWeight: 700,
            color: '#EE005D',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          {post?.category || 'Guide'}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: post && post.title.length > 50 ? 36 : 44,
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            maxWidth: 900,
            display: 'flex',
          }}
        >
          {post?.title}
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: '#EE005D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                fontWeight: 900,
                color: '#fff',
              }}
            >
              N
            </div>
            <div style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
              NUBIZ · nubiz.ae
            </div>
          </div>
          <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)' }}>{post?.readingTime}</div>
        </div>
      </div>
    ),
    { ...size },
  )
}
