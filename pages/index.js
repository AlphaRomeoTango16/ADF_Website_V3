import styled from 'styled-components'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Topbar from '../components/topbar/Topbar'
import Footer from '../components/footer/Footer'

import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMalt } from '../style/assets/myicons/index'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faMalt, faSun, faMoon)

dom.watch();

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <Page>
      <Head>
        <title>| Home</title>
      </Head>
      <Topbar />
      <Body>
        <Title>{t("Fullstack developer")}</Title>
      </Body>
      <Footer />
    </Page>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

const Page = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  width: 100%;
  height: 100%;
`
const Title = styled.div`
  font-family: PlayfairDisplay;
  font-size: 50px;
`