import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import EntryList from '../components/organisms/EntryList'
import Header from '../components/organisms/Header'
import { Entry } from '../types'
import siteMetaData from '@/data/siteMetaData'
import Layout from '@/src/components/templates/Layout'
import { getAllEntries } from '@/src/lib/api'

type Props = {
  entries: Entry[]
}

const TopPage: NextPage<Props> = (allEntries) => {
  const { entries } = allEntries
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
        <EntryList entries={entries} />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allEntries = getAllEntries(['slug', 'title', 'date', 'tags'])

  return {
    props: { entries: allEntries },
  }
}

export default TopPage
