import styled from 'styled-components'
import PropTypes from 'prop-types'

function Icon({ key, title, image, category, link }) {
    return (
        <IconLink href={link}>
            <IconContainer
                key={key}
                src={image}
                title={title}
                category={category}
            />
        </IconLink>
    )
}

Icon.propTypes = {
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}


export default Icon

const IconLink = styled.a`
`

const IconContainer = styled.div`
`