import styled from 'styled-components'
import Topbar from '../components/topbar/Topbar'
import Footer from '../components/footer/Footer'
import MobileCarousel from '../components/carousel/MobileCarousel'
import Head from 'next/head'

import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMalt } from '../style/assets/myicons/index'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

import { useTheme } from 'next-themes'

library.add(fab, faMalt, faSun, faMoon, faChevronLeft)

dom.watch();

export default function Work() {
  const { theme } = useTheme()

  return (
    <Page>
      <Head>
        <title>| Work</title>
      </Head>
      <Topbar />
      <Body isdarkmode={theme === 'dark'}>
        <MobileCarousel />
      </Body>
      <Footer />
    </Page>
  )
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 15px;
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 0;
  margin-top: 80px;
  width: 100%;
  height: 100%;
`