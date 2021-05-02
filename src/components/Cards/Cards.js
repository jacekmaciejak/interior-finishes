import React from 'react'
import CardItem from './CardItem/CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
            <h1>Zakres usług</h1>
            <div className="cards__container">
                <CardItem
                    src='images/img-1.jpg'
                    text='Brukarstwo'
                    label='Kostka'
                    path='/uslugi'
                />
                <CardItem
                    src='images/img-2.jpg'
                    text='Ogrodnictwo'
                    label='Rośliny'
                    path='/uslugi'
                />
                <CardItem
                    src='images/img-3.jpg'
                    text='Tarasy, schody i ogrodzenia'
                    label='Infrastruktura ogrodowa'
                    path='/uslugi'
                />

            </div>
        </div>
    )
}

export default Cards;
