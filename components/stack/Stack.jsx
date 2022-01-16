import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import DeployButton from '../button/DeployButton'

function Stack({ title, content }) {
    const { theme } = useTheme()
    const [informations, setInformations] = useState(false);
    const showInformations = () => setInformations(!informations)
    return (
        <StackContainer isOpen={informations === true}>
            <StackTitle onClick={showInformations} isOpen={informations === true}>
                <Title>
                    {title}
                    <DeployButton />
                </Title>
                <Line isdarkmode={theme === 'dark'} isOpen={informations === true} />
            </StackTitle>
            <ContentContainer>
                <StackContent isdarkmode={theme === 'dark'} isOpen={informations === true}>
                    {content}
                </StackContent>
            </ContentContainer>
        </StackContainer>
    )
}

export default Stack

Stack.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

const StackContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Line = styled.div`
    background-color: ${({ isdarkmode }) =>
        isdarkmode ? 'white' : 'black'};
    width: ${({ isOpen }) => isOpen ? "100%" : "0%"};
    height: 1px;
`

const StackTitle = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    cursor: pointer;
    :hover{
        ${Line} {
            transition: all 0.3s linear;
            width: 100%;
    }
`

const Title = styled.h3`
    display: flex;
    justify-content: space-between;
    font-family: Raleway;
    font-weight: bold;
`

const ContentContainer = styled.div`
    position: relative;
    overflow: hidden;
    height: 100px;
    width: 100%;
`

const StackContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    padding: 10px 10px 0px 10px;
    border-bottom: 1px solid;
    border-color: ${({ isdarkmode }) =>
        isdarkmode ? 'white' : 'black'};
    height: 100px;
    transition: transform 1s;
    transform: ${({ isOpen }) => isOpen ? "translateY(0px)" : "translateY(-132px)"};
`