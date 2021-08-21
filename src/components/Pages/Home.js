import React from 'react'
import AboutCompany from '../AboutCompany/AboutCompany'
import Cards from '../Cards/Cards'
import Hero from '../Hero/Hero'
import BenefitsWrapper from '../Benefits/BenefitsWrapper'
import ActionPlanWrapper from '../ActionPlan/ActionPlanWrapper'
import SummaryWrapper from '../Summary/SummaryWrapper'
import tlo_glowna from '../../assets/images/tlo_glowna.jpg'
import BackgroundImage from '../BackgroundImage/BackgroundImage'
import Banner from '../Banner/Banner'
import Button from '../Button/Button'


function Home() {
    return (
        <div>
            <BackgroundImage image={tlo_glowna} />
            <Hero>
                <Banner title_h1='To sposób w jaki powstaje' title_h2='Luksus to nie tylko piękny ogród'>
                    <Button path='/kontakt' buttonStyle='btn--outline' buttonSize='btn--large'>kontakt</Button>
                    <Button path='/uslugi' buttonStyle='btn--primary' buttonSize='btn--large'>usługi <i className='fas fa-tools'></i></Button>
                </Banner>
            </Hero>
            <BenefitsWrapper />
            <AboutCompany />
            <Cards />
            <ActionPlanWrapper />
            <SummaryWrapper />
        </div>
    )
}

export default Home
