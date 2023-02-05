import { GetStaticProps, NextPage } from 'next'
import EntryList from '../components/organisms/EntryList'
import { Entry } from '../types'
import Layout from '@/src/components/templates/Layout'
import { getAllEntries } from '@/src/lib/api'

type Props = {
  entries: Entry[]
}

const TopPage: NextPage<Props> = (allEntries) => {
  const { entries } = allEntries
  console.log(entries[0])
  return (
    <Layout>
      <EntryList entries={entries} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allEntries = getAllEntries(['slug', 'title', 'date', 'tags'])

  return {
    props: { entries: allEntries },
  }
}

export default TopPage
