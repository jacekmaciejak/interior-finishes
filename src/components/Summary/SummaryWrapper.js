import React from 'react'
import BenefitItem from '../Benefits/BenefitItem/BenefitItem'
import './SummaryWrapper.css'

function SummaryWrapper() {
    return (
        <>
            <div className="summary__wrapper-wave-top">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M-30.19,8.38 C262.69,215.62 235.61,-131.75 532.45,64.63 L500.00,150.00 L0.00,150.00 Z" ></path></svg>
            </div>
            <div className='summary__wrapper'>
                <BenefitItem
                    icon='fas fa-cloud-sun fa-3x'
                    text='przejrzystość finansowa' />
                <BenefitItem
                    icon='fab fa-connectdevelop fa-3x'
                    text='profesjonalnie i fachowo' />
                <BenefitItem
                    icon='far fa-clock fa-3x'
                    text='terminowo i bezstresowo' />
            </div>
            <div className="summary__wrapper-wave-bottom">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M-131.78,125.82 C161.11,67.58 205.13,19.23 543.17,110.02 L500.00,0.00 L0.00,0.00 Z" ></path></svg>
            </div>
        </>
    )
}

export default SummaryWrapper
