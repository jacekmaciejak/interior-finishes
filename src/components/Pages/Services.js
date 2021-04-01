import React from 'react'
import './Services.css'
import '../../App.css'
import backgroundImage from '../../assets/images/waterInstallation.jpg'
import ServicesWrapper from '../ServicesWrapper/ServicesWrapper'

function Services() {
    return (
        <div className="services">
            <img className='services__back' src={backgroundImage} alt="Background" />
            <ServicesWrapper />
        </div>
    )
}

export default Services
