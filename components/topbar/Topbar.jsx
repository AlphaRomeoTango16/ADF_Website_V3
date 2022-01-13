import styled from 'styled-components'
import Logo from '../logo/Logo'
import MobileMenu from '../menu/MobileMenu'
import { useTheme } from 'next-themes'

function Topbar() {
    const { theme } = useTheme()
    return (
        <TopbarContainer>
            <Content>
                <Logo></Logo>
                <MobileMenu></MobileMenu>
            </Content>
            <Line isdarkmode={theme === 'dark'} />
        </TopbarContainer>
    )
}

export default Topbar

const TopbarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    width: 100%;
`

const Content = styled.div`
    display: flex;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    justify-content: space-between;
`

const Line = styled.div`
    padding-top: 20px;
    width: 100%;
    border-top: 1px solid;
    border-color: ${({ isdarkmode }) =>
        isdarkmode ? 'white' : 'black'};
`