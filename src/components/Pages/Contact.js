import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import MyFancyComponent from '../Map/MyFancyComponent'
import './Contact.css'


function Contact() {

    return (
        <div className="contact">
            <ContactForm />
            <MyFancyComponent />
        </div>
    )
}

export default Contact
