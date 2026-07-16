import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const withMDX = createMDX({
  options: {
    remarkPlugins: [['remark-gfm']],
    rehypePlugins: [
      ['rehype-slug'],
      ['rehype-autolink-headings'],
      ['rehype-pretty-code', { 
        theme: { light: 'github-light', dark: 'github-dark' },
        keepBackground: false 
      }],
    ],
  },
})

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // Note: www → apex (non-www) redirection is handled at the Vercel domain
  // level. Do NOT add an app-level host redirect here — it conflicts with
  // Vercel's platform redirect and causes an ERR_TOO_MANY_REDIRECTS loop.
}

export default withMDX(nextConfig)
