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
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle'></i></Button>
            </section>


        </div>
    )
}

export default Hero
