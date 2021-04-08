import React from 'react'
import './Services.css'
import '../../App.css'
import backgroundImage from '../../assets/images/waterInstallation.jpg'
import ServicesWrapper from '../ServicesWrapper/ServicesWrapper'
import BackgroundImage from '../BackgroundImage/BackgroundImage'

function Services() {

    return (

        <div className="services">
            <BackgroundImage />
            <ServicesWrapper />
        </div>

    )
}

export default Services
