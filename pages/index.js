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
import LanguageButton from '../components/button/LanguageButtons';

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
        <LanguageButton />
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
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 15px;
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  height: 100%;
`
const Title = styled.div`
  font-family: PlayfairDisplay;
  font-size: 50px;
`