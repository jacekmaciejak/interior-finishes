import React from 'react'
import './SummaryItem.css'
function SummaryItem({ children }) {
    return (
        <div className='summary__item'>
            <h1>{children}</h1>
        </div>
    )
}

export default SummaryItem
