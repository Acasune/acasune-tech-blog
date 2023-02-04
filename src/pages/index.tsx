import { ChakraProvider } from '@chakra-ui/react'

import { theme } from './Theme'
import { EntryCard } from 'components/molecules/EntryCard'

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <EntryCard
        date={'2022-02-04'}
        link={'http://acasu.net/'}
        tag={'React'}
        title={'Reactを学ぶ'}
      />
    </ChakraProvider>
  )
}
