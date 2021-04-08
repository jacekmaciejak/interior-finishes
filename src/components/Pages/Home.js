import React from 'react'
import '../../App.css'
import AboutCompany from '../AboutCompany/AboutCompany'
import Cards from '../Cards/Cards'
import Hero from '../Hero/Hero'


function Home() {
    return (
        <div>
            <Hero />
            <AboutCompany />
            <Cards />
        </div>
    )
}

export default Home
