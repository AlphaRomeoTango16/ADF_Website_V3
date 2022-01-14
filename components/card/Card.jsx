import styled from 'styled-components'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import Stack from '../stack/Stack'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Card({ image, title, description, icons, link }) {
    const { theme, setTheme } = useTheme()

    return (
        <CardWrapper>
            <CardVisual src={image} />
            <CardSwipe isDarkMode={theme === 'dark'}>
                <IconSwipe1 icon={['fas', 'chevron-left']} isDarkMode={theme === 'dark'} />
                <IconSwipe2 icon={['fas', 'chevron-left']} />
                <TextSwipe isDarkMode={theme === 'dark'}>Swipe left to watch the next project</TextSwipe>
            </CardSwipe>
            <CardTitle>{title}</CardTitle>
            <Stack
                title={"Description"}
                content={description}
            />
            <Link href={link} isDarkMode={theme === 'dark'}>Access to repository GitHub</Link>
        </CardWrapper>
    )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icons: PropTypes.array.isRequired,
    link: PropTypes.string.isRequired
}

export default Card

const CardWrapper = styled.div`
    height: 500px;
  }
`

const CardSwipe = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
  width: 100%;
  height: 30px;
`
const IconSwipe1 = styled(FontAwesomeIcon)`
  color: ${({ isDarkMode }) =>
        isDarkMode ? 'black' : 'white'};
`

const IconSwipe2 = styled(FontAwesomeIcon)`
  color: grey;
  margin-right: 10px;
`

const TextSwipe = styled.p`
    color: ${({ isDarkMode }) =>
        isDarkMode ? 'black' : 'white'};
    font-family: Raleway;
    font-size: 10px;
    margin-right: 10px;
`

const CardVisual = styled(Image)`
    object-fit: fill;
`

const CardTitle = styled.div`
  font-family: Raleway;
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`

const Link = styled.a`
    position: relative;
    font-size: 13px;
    display: flex;
    flex-direction: row;
    font-family: Raleway;
    font-weight: bold;
    text-decoration: none;
    border: 1px solid;
    border-color: ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
    padding: 15px;
    border-radius: 3px;
    color: ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
    background-color: transparent;
    align-items: center;
    cursor: pointer;
    transition: 0.08s ease-in;
    :hover{
        color: ${({ isDarkMode }) =>
        isDarkMode ? 'black' : 'white'};
    }
    :before{
        content: '';
        position: absolute;
        background: ${({ isDarkMode }) =>
        isDarkMode ? 'white' : 'black'};
        bottom: 0;
        left: 0;
        top: 0;
        right: 100%;
        z-index: -1;
        transition: right .3s;
    }
    :hover:before{
        right: 0;
    }
`