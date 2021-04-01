import React from 'react'
import BackgroundImage from '../BackgroundImage/BackgroundImage'
import ContactForm from '../ContactForm/ContactForm'
import MyFancyComponent from '../Map/MyFancyComponent'
import './Contact.css'


function Contact() {

    return (
        <div className="contact">
            <BackgroundImage />
            <ContactForm />
            <MyFancyComponent />
        </div>
    )
}

export default Contact
