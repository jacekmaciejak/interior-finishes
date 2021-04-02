import React, { useState, useEffect } from 'react'
import './Contact.css'
import BackgroundImage from '../BackgroundImage/BackgroundImage'
import ContactForm from '../ContactForm/ContactForm'
import MyFancyComponent from '../Map/MyFancyComponent'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'


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
                    <BackgroundImage />
                    <ContactForm />
                    <MyFancyComponent />

                </div>}
        </div>

    )
}

export default Contact
