import React from 'react'
import './ActionPlanItem.css'
import PropTypes from 'prop-types'

function ActionPlanItem({ image, title1, title2, title3, title4, p1, p2, p3, p4, p5, p6, description }) {
    return (
        <section className="action__wrapper">

            <div className="x">
                <div className="action__item">
                    <h2>{title1}</h2>
                    <h1>{title2}</h1>
                    <hr className='action__line' />
                    <h3>{title3}</h3>
                    <ul className='action__list'>
                        <li>{p1}</li>
                        <li>{p2}</li>
                        <li>{p3}</li>
                        <li>{p4}</li>
                        <li>{p5}</li>
                        <li>{p6}</li>
                    </ul>
                    <div className="action__description">{description}</div>
                    <h3>{title4}</h3>

                </div>
            </div>
            <figure className="action__image"><img src={image} alt={title2} /></figure>
        </section>
    )
}

ActionPlanItem.propTypes = {
    image: PropTypes.string.isRequired,
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
}

ActionPlanItem.defaultProps = {
    image: 'There should be an image',
    title1: 'There should be a title1',
    title2: 'There should be a title2',

}

export default ActionPlanItem
