import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes'
import '../style/style.css'

const GlobalStyle = createGlobalStyle`
  :root {
    --fg: #000;
    --bg: #fff;
  }

  [data-theme="dark"] {
    --fg: #fff;
    --bg: #000;
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

  @font-face {
    font-family: 'Raleway-Regular';
    src: url('../style/assets/fonts/Raleway/Raleway-Regular.ttf') format('truetype');
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <GlobalStyle />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(MyApp)