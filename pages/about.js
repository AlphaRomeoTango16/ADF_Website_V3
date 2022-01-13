import styled from 'styled-components'
import Topbar from '../components/topbar/Topbar'
import Footer from '../components/footer/Footer'

import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMalt } from '../style/assets/myicons/index'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faMalt, faSun, faMoon)

dom.watch();

export default function About() {
  return (
    <Page>
      <Topbar />
      <Body>
        <Title>Fullstack developer</Title>
      </Body>
      <Footer />
    </Page>
  )
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
const Title = styled.div`
  font-family: Displayfair-Regular;
  font-size: 50px;
`