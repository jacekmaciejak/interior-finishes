import React from 'react'
import BenefitItem from './BenefitItem/BenefitItem'
import './BenefitsWrapper.css'
function BenefitsWrapper() {
    return (
        <>
            <div className='benefits__container'>
                <BenefitItem
                    icon='fas fa-anchor fa-3x'
                    text='Materiały najwyższej jakości'
                />
                <BenefitItem
                    icon='fas fa-cash-register fa-3x'
                    text='Pełen profesjonalizm'
                />
                <BenefitItem
                    icon='fas fa-chess-board fa-3x'
                    text='Kompleksowa obsługa'
                />
            </div>
            <div className="benefits__wave" >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M0.27,0.48 C213.03,240.28 186.51,-73.53 500.00,49.98 L500.00,0.00 L0.27,-0.50 Z"
                    ></path>
                </svg>
            </div>
        </>
    )
}

export default BenefitsWrapper
