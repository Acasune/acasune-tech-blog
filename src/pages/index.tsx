import { ChakraProvider } from '@chakra-ui/react'

import { theme } from './Theme'

export default function App() {
  return <ChakraProvider theme={theme}></ChakraProvider>
}
