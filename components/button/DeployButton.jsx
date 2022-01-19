import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useTheme } from 'next-themes'

function DeployButton({ informations }) {
    const { theme } = useTheme()

    return (
        <CircleContainer isdarkmode={theme === 'dark'} isOpen={informations === true}>
            <LineOne isdarkmode={theme === 'dark'} />
            <LineTwo isdarkmode={theme === 'dark'} isOpen={informations === true} />
        </CircleContainer>
    )
}

export default DeployButton

DeployButton.propTypes = {
    informations: PropTypes.bool
}

const CircleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 20px;
    height: 20px;
    border: 1px solid;
    border-color: ${({ isdarkmode }) =>
        isdarkmode ? 'white' : 'black'};
    border-radius: 100%;
    cursor: pointer;
`

const LineOne = styled.div`
    position: absolute;
    width: 9px;
    height: 1px;
    background-color: ${({ isdarkmode }) =>
        isdarkmode ? 'white' : 'black'};
`

const LineTwo = styled.div`
    position: relative;
    z-index: 1;
    width: 9px;
    height: 1px;
    background-color: ${({ isdarkmode }) =>
        isdarkmode ? 'white' : 'black'};
    transform-origin: center;
    transition: all 0.3s linear;
    transform: ${({ isOpen }) =>
        isOpen ? 'rotate(0deg)' : 'rotate(90deg)'};
`