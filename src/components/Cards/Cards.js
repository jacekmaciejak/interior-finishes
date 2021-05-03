import React from 'react'
import CardItem from './CardItem/CardItem'
import './Cards.css'
import kostka from '../../assets/images/kostka.jpg'
import ogrod from '../../assets/images/ogrod.jpg'
import ogrodzenie from '../../assets/images/ogrodzenie.jpg'

function Cards() {
    return (

        <div className='cards'>
            {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
            {/* <h1>Zakres usług</h1> */}
            <div className="cards__container">
                <CardItem
                    src={ogrod}
                    text='Ogrodnictwo'
                    label='Rośliny'
                    path='/uslugi'
                />
                <CardItem
                    src={kostka}
                    text='Brukarstwo'
                    label='Kostka'
                    path='/uslugi'
                />

                <CardItem
                    src={ogrodzenie}
                    text='Tarasy i ogrodzenia'
                    label='Infrastruktura ogrodowa'
                    path='/uslugi'
                />

            </div>
        </div>
    )
}

export default Cards;
