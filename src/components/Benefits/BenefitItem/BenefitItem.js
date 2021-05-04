import React from 'react'
import './BenefitItem.css'

function BenefitItem(props) {
    return (
        <div className="benefits__item">
            <i className={props.icon}></i>
            <h1>{props.text}</h1>
        </div>
    )
}

export default BenefitItem
