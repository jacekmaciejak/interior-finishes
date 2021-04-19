import React from 'react'
import './ActionPlan.css'
import plasters from '../../assets/images/plasters.jpg'
import renovation from '../../assets/images/renovation.jpg'

function ActionPlan() {
    return (
        <div className="action__container">
            <section className="action__wrapper">
                <div className="action__item">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <hr className='action__line' />
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <ul className='action__list'>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, illo.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, illo.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, illo.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, illo.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, illo.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, illo.</li>
                    </ul>
                    <h3>Lorem ipsum dolor sit amet.</h3>

                </div>
                <div className="action__item"><img src={plasters} alt="Plan działania" /></div>
            </section>
            <section className="action__wrapper action__wrapper-position">
                <div className="action__item">                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <hr className='action__line' /></div>
                <div className="action__item"><img src={renovation} alt="Plan działania" /></div>
            </section>
            <section className="action__wrapper">
                <div className="action__item">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <hr className='action__line' />
                </div>
                <div className="action__item"><img src={plasters} alt="Plan działania" /></div>
            </section>
        </div>
    )
}

export default ActionPlan
