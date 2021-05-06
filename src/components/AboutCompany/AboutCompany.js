import React from 'react'
import './AboutCompany.css'
import owner from '../../assets/images/owner.jpg'
import Button from '../Button/Button'
import Title from '../Title/Title'

function AboutCompany({ path }) {
    return (
        <>
            <div className='content__container'>
                <figure className='content__image'>
                    <img src={owner} alt="Owner" />
                </figure>
                <section className="content__description">
                    <Title>Witajcie na naszej stronie</Title>
                    <div className='content__line'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    <h2>Witajcie na naszej stronie</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eligendi animi tempora ut adipisci voluptatum debitis quo omnis asperiores molestiae incidunt quod suscipit aliquam nemo illo, perferendis sit minima quos consectetur odit quas repellat officiis quaerat. Id sapiente accusamus tenetur laboriosam ?</p>
                    <h2>Dlaczego my?</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eligendi animi tempora ut adipisci voluptatum debitis quo omnis asperiores molestiae incidunt quod suscipit aliquam nemo illo, perferendis sit minima quos consectetur odit quas repellat officiis quaerat. Id sapiente accusamus tenetur laboriosam ?</p>
                    <div className="content__button">
                        <Button path='/uslugi' buttonStyle='btn--center' >Zakres usług</Button>
                    </div>

                </section>
            </div>
            <div className="content__wave" >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M0.27,0.48 C213.03,240.28 186.51,-73.53 500.00,49.98 L500.00,0.00 L0.27,-0.50 Z"
                    ></path>
                </svg></div>
        </>
    )
}

export default AboutCompany
