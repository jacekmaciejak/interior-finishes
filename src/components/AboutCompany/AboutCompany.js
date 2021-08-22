import React from 'react'
import './AboutCompany.css'
import owner from '../../assets/images/owner.jpg'
import Button from '../Button/Button'
import Title from '../Title/Title'
import simpleParallax from 'simple-parallax-js';

function AboutCompany({ path }) {


    return (
        <>
            <section className='content__container'>
                <figure className='content__image'>
                    <img class="image__title" src={owner} alt="Owner" />
                </figure>
                <div className="content__description">
                    <Title>Witajcie na naszej stronie</Title>
                    <div className='content__line'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    <h2>Dlaczego my?</h2>
                    <p>
                        Posiadamy doświadczenie w zakładaniu trawników, układania trawy z rolki, wertykulacji i aeracji, odpowiedniego nawożenia, prawidłowego układania obrzeży, planowania i poziomowania spadków terenu w celu odprowadzenia wody.<br /><br />
                        Układamy tarasy z kostki wraz z obrzeżami na podsypce piaskowo-cementowej pod altanę.
                        Mamy doświadczenie w doborze i układaniu nawierzchni komunikacyjnych od kory po kamienie i płyty betonowe.<br /><br />
                        Posiadamy wiedzę i doświadczenie w sadzeniu żywotników, drzew, kwiatów, traw ozdobnych jak również ich pielęgnacji np. przycinanie i kształtowanie żywotników.
                    </p>
                    <div className="content__button">
                        <Button path='/uslugi' buttonStyle='btn--center' >Zakres usług</Button>
                    </div>

                </div>
            </section>
            {/* <div className="content__wave" >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M0.27,0.48 C213.03,240.28 186.51,-73.53 500.00,49.98 L500.00,0.00 L0.27,-0.50 Z"
                    ></path>
                </svg></div> */}
        </>
    )
}

export default AboutCompany
