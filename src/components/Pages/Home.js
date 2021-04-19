import React from 'react'
import './Home.css'
import AboutCompany from '../AboutCompany/AboutCompany'
import Cards from '../Cards/Cards'
import Hero from '../Hero/Hero'
import Benefits from '../Benefits/Benefits'
import ActionPlan from '../ActionPlan/ActionPlan'


function Home() {
    return (
        <div>
            <Hero />
            <Benefits />
            <AboutCompany />
            <Cards />
            <ActionPlan />

        </div>
    )
}

export default Home
