import React from 'react'
import './BackgroundImage.css'

function BackgroundImage({image}) {
    return (
        <div>
            <img className='background__image' src={image} alt="Background" />
        </div>
    )
}

export default BackgroundImage
