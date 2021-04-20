import React from 'react'
import './Home.css'
import AboutCompany from '../AboutCompany/AboutCompany'
import Cards from '../Cards/Cards'
import Hero from '../Hero/Hero'
import Benefits from '../Benefits/Benefits'
import ActionPlanWrapper from '../ActionPlan/ActionPlanWrapper'


function Home() {
    return (
        <div>
            <Hero />
            <Benefits />
            <AboutCompany />
            <Cards />
            <ActionPlanWrapper />

        </div>
    )
}

export default Home
