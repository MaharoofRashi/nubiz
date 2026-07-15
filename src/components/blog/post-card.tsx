import Link from 'next/link'
import { categoryLabel } from '@/lib/blog-format'

export interface PostCardData {
  slug: string
  title: string
  description: string
  category: string
  readingTime: string
}

export function PostCard({ post }: { post: PostCardData }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-card">
      <span className="blog-cat-pill">{categoryLabel(post.category)}</span>
      <h3
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: '#0a0a0a',
          lineHeight: 1.3,
          margin: '0 0 10px',
        }}
      >
        {post.title}
      </h3>
      <p
        style={{
          fontSize: 14,
          lineHeight: 1.6,
          color: '#6b7280',
          margin: 0,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {post.description}
      </p>
      <div
        style={{
          marginTop: 'auto',
          paddingTop: 18,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ fontSize: 12, color: '#9ca3af' }}>{post.readingTime}</span>
        <span className="nz-inline-link" style={{ fontSize: 14 }}>
          Read →
        </span>
      </div>
    </Link>
  )
}
