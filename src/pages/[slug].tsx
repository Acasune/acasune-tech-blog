import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { useState, Fragment, useEffect } from 'react'
import Layout from '@/src/components/templates/Layout'
import { getAllEntries, getEntryBySlug } from '@/src/lib/api'
import markdownToReact from '@/src/lib/markdownToReact'
import { Entry } from '@/src/types'

type EntryPageProps = {
  entry: Entry
}

const EntryPage = ({ entry }: EntryPageProps) => {
  const router = useRouter()
  const [component, setComponent] = useState(<Fragment />)
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(async () => {
      const contentComponent = await markdownToReact(entry.content, entry.slug)
      setComponent(contentComponent)
    })()
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {}
  }, [entry])
  if (!router.isFallback && !entry?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      {/* <div dangerouslySetInnerHTML={{ __html: entry.content }} />
       */}
      <div>{component}</div>
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
  // const content = await markdownToHtml(entry.content)

  return {
    props: {
      entry,
    },
  }
}

export default EntryPage
