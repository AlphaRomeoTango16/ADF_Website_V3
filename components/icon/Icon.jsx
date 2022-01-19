import styled from 'styled-components'
import Image from 'next/image'
import PropTypes from 'prop-types'

function Icon({ key, title, image, category, link }) {
    return (
        <IconLink href={link}>
            <IconContainer
                key={key}
                title={title}
                category={category}
            >
                <IconImage
                    src={image}
                />
            </IconContainer>
        </IconLink>
    )
}

Icon.propTypes = {
    key: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string.isRequired,
    category: PropTypes.string,
    link: PropTypes.string
}


export default Icon

const IconLink = styled.a`
    margin-right: 10px;
`

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    // filter: drop-shadow(0px 0px 3px rgb(0, 0, 0.25));
    box-shadow: 0px 4px 4px rgb(0, 0, 0.25);
    background-color: white;
    padding: 10px;
    border-radius: 10px;
`

const IconImage = styled.img`
    width: 30px;
    height: 30px;
  }
`