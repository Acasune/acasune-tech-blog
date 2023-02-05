import { remark } from 'remark'
import ErrorPage from 'next/error'
import html from 'remark-html'
import Layout from '@/src/components/templates/Layout'
import { getAllEntries, getEntryBySlug } from '@/src/lib/api'
import { Entry } from '@/src/types'
import { useRouter } from 'next/router'
import markdownToHtml from '../lib/markdownToHtml'

type EntryPageProps = {
  entry: Entry
}

const EntryPage = ({ entry }: EntryPageProps) => {
  const router = useRouter()
  if (!router.isFallback && !entry?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: entry.content }} />
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const entries = getAllEntries(['slug'])

  return {
    paths: entries.map((ent) => {
      return {
        params: {
          slug: ent.slug,
        },
      }
    }),
    fallback: false,
  }
}

type SSGProps = {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params }: SSGProps) => {
  const entry = getEntryBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'tags',
    'content',
  ])
  const content = await markdownToHtml(entry.content)

  return {
    props: {
      entry: {
        ...entry,
        content,
      },
    },
  }
}

export default EntryPage
