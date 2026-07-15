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
  async redirects() {
    return []
  },
}

export default withMDX(nextConfig)
