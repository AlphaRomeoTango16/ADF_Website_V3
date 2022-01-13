import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useState } from 'react'
import DeployButton from '../button/DeployButton'

function Stack({ title, content }) {
    const [informations, setInformations] = useState(false);
    const showInformations = () => setInformations(!informations)
    return (
        <StackContainer isOpen={informations === true}>
            <StackTitle onClick={showInformations} isOpen={informations === true}>
                <Title>
                    {title}
                    <DeployButton />
                </Title>
                <Line />
            </StackTitle>
            <ContentContainer>
                <StackIcon isOpen={informations === true}>
                    {content}
                </StackIcon>
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
`

const StackTitle = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    cursor: pointer;
`

const Title = styled.h3`
    display: flex;
    justify-content: space-between;
    font-family: Raleway;
    font-weight: bold;
`

const Line = styled.div`
    background-color: black;
    width: 0%;
    height: 1px;
    :hover {
        width: 100%;
    }
`

const ContentContainer = styled.div`
    position: relative;
    overflow: hidden;
    height: 100px;
`

const StackIcon = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    position: absolute;
    padding: 10px 10px 0px 10px;
    border-bottom: 1px solid black;
    height: 30px;
    transition: transform 1s;
    transform: ${({ isOpen }) => isOpen ? "translateY(0px)" : "translateY(-132px)"};
`