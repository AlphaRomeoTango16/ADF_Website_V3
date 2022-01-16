import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes'
import '../style/style.css'
import { useTheme } from 'next-themes'


const GlobalStyle = createGlobalStyle`
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

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <ThemeProvider isdarkmode={theme === 'dark'}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(MyApp)