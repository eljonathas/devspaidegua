import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'

import { ToTopButton } from '@components/ToTopButton'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>
          Projeto Devs Pai d&apos;Égua - O próximo passo para a evolução na
          carreira
        </title>
      </Head>
      <ToTopButton />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
