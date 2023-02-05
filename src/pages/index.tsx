import { ChakraProvider } from '@chakra-ui/react'

import { theme } from './Theme'
import TopPage from '@/src/pages/top'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <TopPage />
    </ChakraProvider>
  )
}

export default App
