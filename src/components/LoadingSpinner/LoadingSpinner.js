import React from 'react'
import Loader from 'react-loader-spinner'
import './LoadingSpinner.css'
function LoadingSpinner() {
    return (
        <div className='loader'>
            <Loader
                type="Grid"
                color="#12C13B"
                height={150}
                width={150}
            timeout={2000}
            />
        </div>
    )
}

export default LoadingSpinner
