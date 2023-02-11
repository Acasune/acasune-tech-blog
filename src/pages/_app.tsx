﻿import { AppProps } from 'next/app'
import '@/src/styles/style.css'
import '@/src/styles/prism-monokai.css'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
