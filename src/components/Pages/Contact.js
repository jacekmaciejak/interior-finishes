import React, { useState, useEffect } from 'react'
import BackgroundImage from '../BackgroundImage/BackgroundImage'
import ContactForm from '../ContactForm/ContactForm'
import MyFancyComponent from '../Map/MyFancyComponent'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import tlo_kontakt from '../../assets/images/tlo_kontakt.jpg'


function Contact() {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    })

    return (
        <div>

            {isLoading === true ? <LoadingSpinner /> :
                <div className="contact">
                    <BackgroundImage image={tlo_kontakt} imageStyle='back__image-opacity' />
                    <ContactForm />
                    <MyFancyComponent />

                </div>}
        </div>

    )
}

export default Contact
