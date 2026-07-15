'use client'

import { useState } from 'react'
import { PostCard, type PostCardData } from '@/components/blog/post-card'

const FILTERS: { label: string; value: string }[] = [
  { label: 'All', value: 'all' },
  { label: 'Free Zones', value: 'free-zones' },
  { label: 'Business Setup', value: 'business-setup' },
  { label: 'Tax', value: 'tax' },
  { label: 'Banking', value: 'banking' },
]

export function BlogFilter({ posts }: { posts: PostCardData[] }) {
  const [active, setActive] = useState('all')
  const visible = active === 'all' ? posts : posts.filter((p) => p.category === active)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {FILTERS.map((f) => {
          const isActive = active === f.value
          return (
            <button
              key={f.value}
              type="button"
              onClick={() => setActive(f.value)}
              className="blog-filter-pill"
              data-active={isActive}
            >
              {f.label}
            </button>
          )
        })}
      </div>

      {visible.length > 0 ? (
        <div className="blog-post-grid">
          {visible.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      ) : (
        <p style={{ fontSize: 16, color: '#6b7280' }}>No guides in this category yet.</p>
      )}
    </div>
  )
}
