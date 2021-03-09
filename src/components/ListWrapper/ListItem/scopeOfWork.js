import React from 'react'
import PropTypes from 'prop-types'
import './scopeOfWork.css'

const ScopeOfWork = ({ image, title, description }) => (
    <li className="scopeOfWork__wrapper">
        <img src={image} alt={title} className="scopeOfWork__image" />
        <div>
            <h3 className="scopeOfWork__title">{title}</h3>
            <p className="scopeOfWork__description">{description}</p>
        </div>

    </li>
)

ScopeOfWork.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
}

ScopeOfWork.defaultProps = {
    description: 'Jedna z naszych specjalizacji'
}


export default ScopeOfWork;