import React from 'react'
import './GalleryItem.css'

function GalleryItem({ image, title}) {
    const ImageTag = image ? "img" : "div"
    return (
        <div className='gallery__item'>
            <ImageTag src={image} className={image ? 'gallery__image' : 'gallery__imageNone'} alt={title} />
            <h2>{title}</h2>
        </div>
    )
}

export default GalleryItem
