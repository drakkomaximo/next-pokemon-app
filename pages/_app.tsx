import type { AppProps } from 'next/app'

import '../styles/globals.scss'

import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={ darkTheme }>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
