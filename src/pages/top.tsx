import EntryList, { EntryMeta } from '../components/organisms/EntryList'
import Layout from '@/src/components/templates/Layout'

const TopPage = () => {
  const data: EntryMeta[] = [
    {
      entry_id: 1,
      date: '2022-02-04',
      link: 'https://acasu.net',
      tags: ['React', 'Rust'],
      title: 'ブログ作り直してみた。',
    },
    {
      entry_id: 2,
      date: '2022-02-04',
      link: 'https://acasu.net',
      tags: ['React', 'Rust'],
      title: 'ブログ作り直してみた。',
    },
    {
      entry_id: 3,
      date: '2022-02-04',
      link: 'https://acasu.net',
      tags: ['React', 'Rust'],
      title: 'ブログ作り直してみた。',
    },
    {
      entry_id: 4,
      date: '2022-02-04',
      link: 'https://acasu.net',
      tags: ['React', 'Rust'],
      title: 'ブログ作り直してみた。',
    },
  ]
  return (
    <Layout>
      <EntryList entries={data} />
    </Layout>
  )
}

export default TopPage
