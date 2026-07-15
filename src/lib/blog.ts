import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { cache } from 'react'

export { categoryLabel, formatDate } from './blog-format'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  author: string
  readingTime: string
  featured: boolean
  content: string
}

export const getPosts = cache(async (): Promise<BlogPost[]> => {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
    const { data, content } = matter(raw)
    return {
      slug: file.replace('.mdx', ''),
      title: data.title,
      description: data.description,
      date: data.date,
      category: data.category,
      tags: data.tags || [],
      author: data.author,
      readingTime: data.readingTime || readingTime(content).text,
      featured: data.featured || false,
      content,
    } as BlogPost
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
})

export const getPost = cache(async (slug: string) => (await getPosts()).find((p) => p.slug === slug))

export const getRelated = cache(async (slug: string, tags: string[], n = 3) => {
  const all = await getPosts()
  return all
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      p,
      score: p.tags.filter((t) => tags.includes(t)).length,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((x) => x.p)
})

export const getByCategory = cache(async (category: string) =>
  (await getPosts()).filter((p) => p.category === category),
)

export const getByTag = cache(async (tag: string) =>
  (await getPosts()).filter((p) => p.tags.includes(tag)),
)

export const getAllTags = cache(async () => {
  const posts = await getPosts()
  const tags = new Set(posts.flatMap((p) => p.tags))
  return Array.from(tags).sort()
})

export const getAllCategories = cache(async () => {
  const posts = await getPosts()
  const cats = new Set(posts.map((p) => p.category))
  return Array.from(cats).sort()
})
