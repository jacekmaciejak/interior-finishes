import React from 'react'
import '../../App.css'
import './Draft.css';
import BackgroundImage from '../BackgroundImage/BackgroundImage'
import tlo_kontakt from '../../assets/images/tlo_kontakt.jpg'
import Title from '../Title/Title'

function Draft() {

    return (

        <div className="draft">
            <BackgroundImage image={tlo_kontakt} imageStyle='back__image-opacity' />
            <Title>strona w budowie</Title>
        </div>

    )
}

export default Draft;
