import { ChakraProvider } from '@chakra-ui/react'

import { theme } from './Theme'
import { PostHeader } from 'components/molecules/PostHeader'

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <PostHeader
        date={'2022-02-04'}
        link={'http://acasu.net/'}
        tag={'React'}
        title={'Reactを学ぶ'}
      />
    </ChakraProvider>
  )
}
