import React from 'react'
import CardItem from './CardItem'
import Card_1 from '../assets/image/card_1.png'
import Card_2 from '../assets/image/card_2.png'
import Card_3 from '../assets/image/card_3.png'

const Cards = () => {

  return (
    <div className="cards">
        <div className="container">
            <div className="cards_content">
                <p className="title">Bestsellery</p>
                <div className="card_content">
                    <CardItem key={CardItem.id} title={'Moon plate'} price= {'75$'} img= {Card_1} />
                    <CardItem key={CardItem.id} title={'Moon plate'} price= {'75$'} img= {Card_2} />
                    <CardItem key={CardItem.id} title={'Moon plate'} price= {'75$'} img= {Card_3} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards