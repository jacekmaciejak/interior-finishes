import React from 'react'
import { Link } from 'react-router-dom'
import './CardItem.css'

function CardItem(props) {
    return (
        <div className="cards__item">
            <Link to={props.path} className="cards__item__link">
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img src={props.src} alt={props.text} className="cards__item__img" />
                </figure>
                <div className="cards__item__info">
                    <h2 className="cards__item__text">{props.text}</h2>
                </div>
            </Link>
        </div>
    )
}

export default CardItem
