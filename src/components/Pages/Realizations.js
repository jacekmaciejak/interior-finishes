import React, { useState, useEffect } from 'react'
import '../../App.css'
import RealizationsWrapper from '../RealizationsGalleryWrapper/RealizationsWrapper'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

function Realizations() {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    })
    return (
        <div>
            {isLoading === true ? <LoadingSpinner /> :
                <RealizationsWrapper />}

        </div>


    )
}

export default Realizations
