import React from 'react'
import '../styles/base.css'
import {AppProps} from 'next/app'

function JennieApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default JennieApp
