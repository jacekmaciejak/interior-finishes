import React from 'react'
import './BackgroundImage.css'
import backgroundImage from '../../assets/images/waterInstallation.jpg'

function BackgroundImage() {
    return (
        <div>
            <img className='background__image' src={backgroundImage} alt="Background" />
        </div>
    )
}

export default BackgroundImage
