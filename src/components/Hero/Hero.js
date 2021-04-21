import React from 'react'
import Button from '../Button/Button'
import './Hero.css'
import '../../App.css'

function Hero() {
    return (
        <div className='hero__container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h2>Luksus to nie tylko piękny ogród</h2>
            <h1>To sposób w jaki powstaje</h1>
            <section className="hero__buttons">
                <Button buttonStyle='btn--outline' buttonSize='btn--large'>kontakt</Button>
                <Button buttonStyle='btn--primary' buttonSize='btn--large'>usługi <i className='fas fa-tools'></i></Button>
            </section>


        </div>
    )
}

export default Hero
