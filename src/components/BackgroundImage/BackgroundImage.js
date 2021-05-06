import React from 'react'
import './BackgroundImage.css'

const STYLES = ['back__image', 'back__image-opacity']

function BackgroundImage({ image, imageStyle }) {
    const checkImageStyle = STYLES.includes(imageStyle) ? imageStyle : STYLES[0]

    return (
        <figure>
            <img className={`back__image ${checkImageStyle}`} src={image} alt="Background" />
        </figure>
    )
}

export default BackgroundImage
