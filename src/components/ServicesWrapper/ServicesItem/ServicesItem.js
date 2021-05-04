import React from 'react'
import './ServicesItem.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function ServicesItem({ path, image, title, description }) {
    const ImageTag = image ? "img" : "div"
    return (
        <div className="services__item">
            <Link to={path} className="services__item__link">
                <figure className="services__item__pic-wrap" data-category={title}>
                    <ImageTag src={image} className={image ? 'services__item__img' : 'services__imageNone'} alt={title} />
                </figure>
                <div className="services__item__info">
                    {/* <h2 className="cards__item__text">{title}</h2> */}
                    <p>{description}</p>

                </div>
            </Link>
        </div>
    )
}

ServicesItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

ServicesItem.defaultProps = {
    image: 'There should be an image',
    title: 'There should be a title'
}

export default ServicesItem
