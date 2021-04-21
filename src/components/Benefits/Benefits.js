import React from 'react'
import './Benefits.css'
function Benefits() {
    return (
        <>
            <div className='benefits__container'>
                <div className="benefits__item"><i className="fas fa-anchor fa-3x"></i> <h1>Materiały najwyższej jakości</h1></div>
                <div className="benefits__item"><i className="fas fa-cash-register fa-3x"></i> <h1>Pełen profesjonalizm</h1> </div>
                <div className="benefits__item"><i className="fas fa-chess-board fa-3x"></i><h1>Kompleksowa obsługa</h1></div>            </div>
            <div className="benefits__wave" >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M0.27,0.48 C213.03,240.28 186.51,-73.53 500.00,49.98 L500.00,0.00 L0.27,-0.50 Z"
                    ></path>
                </svg></div>
        </>
    )
}

export default Benefits
