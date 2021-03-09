import React from 'react'
import Button from '../Button/Button'
import './Hero.css'
import '../../App.css'

function Hero() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <section className="hero-buttons">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle'></i></Button>
            </section>


        </div>
    )
}

export default Hero
