import React from 'react'
import './Home.css'
import AboutCompany from '../AboutCompany/AboutCompany'
import Cards from '../Cards/Cards'
import Hero from '../Hero/Hero'
import BenefitsWrapper from '../Benefits/BenefitsWrapper'
import ActionPlanWrapper from '../ActionPlan/ActionPlanWrapper'
import SummaryWrapper from '../Summary/SummaryWrapper'


function Home() {
    return (
        <div>
            <Hero />
            <BenefitsWrapper />
            <AboutCompany />
            <Cards />
            <ActionPlanWrapper />
            <SummaryWrapper />
        </div>
    )
}

export default Home
