import styled from 'styled-components'
import { useTheme } from 'next-themes'

function Logo() {
    const { theme } = useTheme()

    return (
        <Container>
            <FirstLine>
                <FirstGroup>
                    <Letter isdarkmode={theme === 'dark'}>A</Letter>
                    <Name isdarkmode={theme === 'dark'}>rthur</Name>
                </FirstGroup>
            </FirstLine>
            <SecondLine>
                <SecondGroup>
                    <Letter isdarkmode={theme === 'dark'}>D</Letter>
                    <Name isdarkmode={theme === 'dark'}>ella</Name>
                </SecondGroup>
                <ThirdGroup>
                    <Letter isdarkmode={theme === 'dark'}>F</Letter>
                    <Name isdarkmode={theme === 'dark'}>aille</Name>
                </ThirdGroup>
            </SecondLine>
        </Container>
    )
}

export default Logo

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
`

const FirstGroup = styled.div`
    display: flex;
`

const SecondGroup = styled.div`
    display: flex;
`

const ThirdGroup = styled.div`
    display: flex;
    margin-left: 5px;
`

const FirstLine = styled.div`
    display: flex;
`

const SecondLine = styled.div`
    display: flex;
    justify-content: space-between;
`

const Letter = styled.p`
    width: 100%;
    color: ${({ isdarkmode }) =>
        isdarkmode ? 'white' : 'black'};;
    font-family: 'Quicksand';
    margin: 0;
`
const Name = styled.p`
    width: 100%;
    color: ${({ isdarkmode }) =>
        isdarkmode ? 'white' : 'black'};;
    font-family: 'Quicksand';
    margin: 0;
`