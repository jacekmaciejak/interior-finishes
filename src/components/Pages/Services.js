import React from 'react'
import '../../App.css'
import ServicesWrapper from '../ServicesWrapper/ServicesWrapper'
import BackgroundImage from '../BackgroundImage/BackgroundImage'
import tlo_kontakt from '../../assets/images/tlo_kontakt.jpg'

function Services() {

    return (

        <div className="services">
            <BackgroundImage image={tlo_kontakt} imageStyle='back__image-opacity' />
            <ServicesWrapper />
        </div>

    )
}

export default Services
