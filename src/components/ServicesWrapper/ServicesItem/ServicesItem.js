import React from 'react'
import './ServicesItem.css'
import PropTypes from 'prop-types'

function ServicesItem({ image, title, description }) {
    const ImageTag = image ? "img" : "div"
    return (
        <div className='services__item'>
            <ImageTag src={image} className={image ? 'services__image' : 'services__imageNone'} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

ServicesItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

ServicesItem.defaultProps = {
    image: 'There should be an image',
    title: 'There should be a title'
}

export default ServicesItem
