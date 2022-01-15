import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes'
import '../style/style.css'
import { useEffect } from 'react';
import { useTheme } from 'next-themes'


const GlobalStyle = createGlobalStyle`
  :root {
    --fg: #000;
    --bg: #fff;
    a, p, svg{
      color: black;
    }
  }

  [data-theme="dark"] {
    --fg: #fff;
    --bg: #000;
    a, p, svg{
      color: white;
    }
  }

  html,
  body,
  body > div:first-child,
  div#__next,
  div#__next > div {
  height: 100%;

  body{
    margin: 0;
  }
`

function MyApp({ Component, pageProps }) {
  const { theme } = useTheme()

  useEffect(() => {
    console.log('THEME', theme)
  }, [theme])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(MyApp)