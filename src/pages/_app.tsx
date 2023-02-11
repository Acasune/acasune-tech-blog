import { AppProps } from 'next/app'
import '@/styles/style.css'
import '@/styles/prism-monokai.css'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
