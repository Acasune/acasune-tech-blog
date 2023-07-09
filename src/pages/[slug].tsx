import Head from 'next/head'
import siteMetaData from '@/data/siteMetaData'
import EntryContainer from '@/src/components/organisms/EntryContainer'
import Layout from '@/src/components/templates/Layout'
import { getAllEntries, getEntryBySlug } from '@/src/lib/api'
import { Entry } from '@/src/types'

type EntryPageProps = {
  entry: Entry
}

const EntryPage = ({ entry }: EntryPageProps) => {
  // const router = useRouter()
  // if (!router.isFallback && !entry?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }

  return (
    <>
      <Head>
        <title>{siteMetaData.title}</title>
        <meta name="description" content={siteMetaData.description} />
        <meta property="og:site_name" content={siteMetaData.title} />
        <meta property="og:title" content={siteMetaData.title} />
        <meta property="og:description" content={siteMetaData.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://localhost:3000/acasune.png"
        />
        <meta property="og:locale" content="ja_JP" />
      </Head>
      <Layout>
        <EntryContainer entry={entry} />
      </Layout>
    </>
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
