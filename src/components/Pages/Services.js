import React from 'react'
import './Services.css'
import '../../App.css'
import ServicesWrapper from '../ServicesWrapper/ServicesWrapper'
import video_1 from '../../assets/videos/video-1.mp4'

function Services() {

    return (

        <div className="services">
            {/* <BackgroundImage /> */}
            <video className='services__video' src={video_1} autoPlay loop muted />
            <ServicesWrapper />
        </div>

    )
}

export default Services
