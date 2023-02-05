import { ChakraProvider } from '@chakra-ui/react'

import { theme } from './Theme'
import EntryList, { EntryMeta } from '@/src/components/organisms/EntryList'
import Footer from '@/src/components/organisms/Footer'
import Header from '@/src/components/organisms/Header'

export default function App() {
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
    <ChakraProvider theme={theme}>
      <Header />
      <EntryList entries={data} />
      <Footer />
    </ChakraProvider>
  )
}
