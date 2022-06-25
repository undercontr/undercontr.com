import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'
import Layout from '../components/Layout/Layout'

import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core"

function App({ Component, pageProps }: AppProps) {
  config.autoAddCss = true;
  return (
    <ChakraProvider theme={theme}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
