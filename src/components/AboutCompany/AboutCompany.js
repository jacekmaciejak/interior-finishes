import React from 'react'
import './AboutCompany.css'
import owner from '../../assets/images/owner.jpg'
import Button from '../Button/Button'

function AboutCompany() {
    return (
        <>
            <div className='content__container'>

                <img src={owner} alt="Owner" />
                <section className="content__description">
                    <h1>Witajcie na naszej stronie</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eligendi animi tempora ut adipisci voluptatum debitis quo omnis asperiores molestiae incidunt quod suscipit aliquam nemo illo, perferendis sit minima quos consectetur odit quas repellat officiis quaerat. Id sapiente accusamus tenetur laboriosam ?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eligendi animi tempora ut adipisci voluptatum debitis quo omnis asperiores molestiae incidunt quod suscipit aliquam nemo illo, perferendis sit minima quos consectetur odit quas repellat officiis quaerat. Id sapiente accusamus tenetur laboriosam ?</p>
                    <Button >Zakres usług</Button>
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
