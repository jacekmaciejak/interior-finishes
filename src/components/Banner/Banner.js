import React from 'react'
import './Banner.css'

function Banner({ children, title_h1, title_h2, }) {
    return (
        <div className='banner__container'>
            <h2>{title_h2}</h2>
            <h1>{title_h1}</h1>
            <section className="banner__wrapper">
                {children}
            </section>
        </div>
    )
}

export default Banner
