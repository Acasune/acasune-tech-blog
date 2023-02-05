import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

type Entry = {
  slug: string
  title: string
  tags: string[]
  date: string
  content: string
}

const postsDirectory = path.join(
  '/home/awayatakuma/project/acatechblog/data/posts',
)

export function getEntrySlugs() {
  const allDirents = fs.readdirSync(postsDirectory, { withFileTypes: true })
  return allDirents
    .filter((dirent) => dirent.isDirectory())
    .map(({ name }) => name)
}

export function getEntryBySlug(slug: string, fields: string[] = []) {
  const fullPath = path.join(postsDirectory, slug, 'index.md')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Entry = {
    slug: '',
    title: '',
    tags: [],
    date: '',
    content: '',
  }

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (field === 'title' || field === 'date' || field === 'tags') {
      items[field] = data[field]
    }
  })
  return items
}

export function getAllEntries(fields: string[] = []) {
  const slugs = getEntrySlugs()
  const posts = slugs
    .map((slug) => getEntryBySlug(slug, fields))
    .sort((a, b) => (a.date > b.date ? -1 : 1))
  return posts
}
