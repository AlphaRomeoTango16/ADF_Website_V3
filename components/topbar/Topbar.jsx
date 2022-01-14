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
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    margin-left: 15px;
    margin-right: 15px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    backdrop-filter: blur(5px);
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