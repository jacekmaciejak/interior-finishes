import React from 'react'
import './GalleryItem.css'
import PropTypes from 'prop-types'

function GalleryItem({ image, title }) {
    const ImageTag = image ? "img" : "div"
    return (
        <div className='gallery__item'>
            <ImageTag src={image} className={image ? 'gallery__image' : 'gallery__imageNone'} alt={title} />
            {/* <h2>{title}</h2> */}
        </div>
    )
}

GalleryItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

GalleryItem.defaultProps = {
    image: 'There should be an image',
    title: 'There should be a title'
}

export default GalleryItem
