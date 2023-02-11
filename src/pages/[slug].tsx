import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import EntryContainer from '@/src/components/organisms/EntryContainer'
import Layout from '@/src/components/templates/Layout'
import { getAllEntries, getEntryBySlug } from '@/src/lib/api'
import { Entry } from '@/src/types'

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
      <EntryContainer entry={entry} />
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

  return {
    props: {
      entry,
    },
  }
}

export default EntryPage
