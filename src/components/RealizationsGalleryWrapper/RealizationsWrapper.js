import React from 'react'
import GalleryItem from './GalleryItem/GalleryItem'
import './RealizationsWrapper.css'
import { imagesRealizationData } from '../../data/realizationsImagesGallery'

function RealizationsWrapper(props) {
    return (

        <div className='realizations__wrapper'>
            { imagesRealizationData.map(item => (
                <GalleryItem key={item.title} {...item} />
            ))
            }
        </div>

    )
}

export default RealizationsWrapper
