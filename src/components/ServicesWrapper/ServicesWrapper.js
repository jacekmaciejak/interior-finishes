import React from 'react'
import './ServicesWrapper.css'
import ServicesItem from './ServicesItem/ServicesItem'
import {servicesItems} from '../../data/servicesItems'

function ServicesWrapper() {
    return (

        <div className='services__wrapper'>
            { servicesItems.map(item => (
                <ServicesItem key={item.title} {...item} />
            ))
            }
        </div>
    )
}

export default ServicesWrapper
