import React from 'react'
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import Hero from '../Hero/Hero';
import tlo_glowna from '../../assets/images/tlo_glowna.jpg'
import Banner from '../Banner/Banner';
import Button from '../Button/Button';

function Error() {
    return (
        <div>
            <BackgroundImage image={tlo_glowna} />
            <Hero >
                <Banner title_h2='BŁĄD 404' title_h1='Nie odnaleziono strony'>
                    <Button path='/' buttonStyle='btn--primary' buttonSize='btn--large'>strona główna<i className='fas fa-tools'></i>
                    </Button>
                </Banner>
            </Hero>
        </div>
    )
}

export default Error
