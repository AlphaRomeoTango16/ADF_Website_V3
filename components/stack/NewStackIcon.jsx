import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import DeployButton from '../button/DeployButton'
import Icon from '../icon/Icon'

function NewStackIcon({ title, iconsList }) {
    const { theme } = useTheme()
    const [informations, setInformations] = useState(false);
    const showInformations = () => setInformations(!informations)

    return (
        <StackContainer isOpen={informations === true}>
            <StackTitle onClick={showInformations} isOpen={informations === true}>
                <Title>
                    {title}
                    <DeployButton
                        informations={informations}
                    />
                </Title>
                <Line isdarkmode={theme === 'dark'} isOpen={informations === true} />
            </StackTitle>
            {informations &&
                <ContentContainer isdarkmode={theme === 'dark'}>
                    <StackContent>
                        <SubTitle>Front-end</SubTitle>
                        <IconContent>
                            {iconsList.map((icon, index) =>
                                <Icon key={index} image={icon.src} alt="icon" />
                            )}
                        </IconContent>
                    </StackContent>
                    <StackContent>
                        <SubTitle>Back-end</SubTitle>
                        <IconContent>
                            {iconsList.map((icon, index) =>
                                <Icon key={index} image={icon.src} alt="icon" />
                            )}
                        </IconContent>
                    </StackContent>
                    <StackContent>
                        <SubTitle>Tools</SubTitle>
                        <IconContent>
                            {iconsList.map((icon, index) =>
                                <Icon key={index} image={icon.src} alt="icon" />
                            )}
                        </IconContent>
                    </StackContent>
                </ContentContainer>
            }
        </StackContainer>
    )
}

export default NewStackIcon

NewStackIcon.propTypes = {
    title: PropTypes.string.isRequired,
    iconsList: PropTypes.array.isRequired,
}

const StackContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Line = styled.div`
    background-color: ${({ isdarkmode }) =>
        isdarkmode ? 'white' : 'black'};
    width: 100%;
    height: 1px;
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
    margin-bottom: 5px;
`

const ContentContainer = styled.div`
    margin-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid;
    border-color: ${({ isdarkmode }) =>
        isdarkmode ? 'white' : 'black'};
    height: 100%;
    width: 100%;
`

const StackContent = styled.div`
    margin-bottom: 20px;
`

const SubTitle = styled.div`
    font-family: Raleway;
    font-size: 13px;
`

const IconContent = styled.div`
    display: flex;
`