import React from 'react'
import './Services.css'
import '../../App.css'
import ServicesWrapper from '../ServicesWrapper/ServicesWrapper'
import BackgroundImage from '../BackgroundImage/BackgroundImage'

function Services() {

    return (

        <div className="services">
            {/* <BackgroundImage /> */}
            <video className='services__video' src="/videos/video-1.mp4" autoPlay loop muted />
            <ServicesWrapper />
        </div>

    )
}

export default Services
