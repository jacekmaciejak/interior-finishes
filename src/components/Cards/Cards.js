import React from 'react'
import CardItem from './CardItem/CardItem'
import './Cards.css'
import kostka from '../../assets/images/kostka.jpg'
import ogrod from '../../assets/images/ogrod.jpg'
import ogrodzenie from '../../assets/images/ogrodzenie.jpg'
import Title from "../Title/Title"

function Cards() {
    return (

        <div className='cards'>

            <Title>Co robimy?</Title>
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
