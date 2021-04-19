import React from 'react'
import CardItem from './CardItem/CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>Check out these epic destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='images/img-1.jpg'
                            text='Explore the hidden waterfall'
                            label='Adventure'
                            path='/uslugi'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Explore the hidden waterfall'
                            label='Adventure'
                            path='/uslugi'
                        />
                        <CardItem
                            src='images/img-3.jpg'
                            text='Explore the hidden waterfall'
                            label='Adventure'
                            path='/uslugi'
                        />

                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src='images/img-4.jpg'
                            text='Explore the hidden waterfall'
                            label='Adventure'
                            path='/uslugi'
                        />
                        <CardItem
                            src='images/img-5.jpg'
                            text='Explore the hidden waterfall'
                            label='Adventure'
                            path='/uslugi'
                        />
                        <CardItem
                            src='images/img-6.jpg'
                            text='Explore the hidden waterfall'
                            label='Adventure'
                            path='/uslugi'
                        />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
