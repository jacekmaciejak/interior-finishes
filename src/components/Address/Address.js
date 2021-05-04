import React from 'react'
import Title from '../Title/Title'
import './Address.css'
import location from '../../assets/images/location.png'
import email from '../../assets/images/email.png'
import phone from '../../assets/images/phone.png'

function Address() {
    return (
        <div className='address__container'>
            <Title>Nasz adres</Title>
            <div className='address__line' />
            <section className="address__wrapper">
                <div className="address__item">
                    <img src={location} className="address__icon" alt="Media icon" />
                    <h3>PRZYJEDŹ</h3>
                    <p>Piaseczno</p>
                </div>
                <div className="address__item">
                    <img src={email} className="address__icon" alt="Media icon" />
                    <h3>NAPISZ</h3>
                    <p>jacekmaciejak@poczta.fm</p></div>
                <div className="address__item">
                    <img src={phone} className="address__icon" alt="Media icon" />
                    <h3>ZADZWOŃ</h3>
                    <p>123-456-789</p></div>
                <div className="address__item">
                    <img src={phone} className="address__icon" alt="Media icon" />
                    <h3>ZADZWOŃ</h3>
                    <p>123-456-789</p></div>
            </section>
        </div>
    )
}

export default Address
