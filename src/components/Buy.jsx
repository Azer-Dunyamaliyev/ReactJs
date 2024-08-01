import React from 'react'
import { Link } from 'react-router-dom'
import BuyCardImg_1 from '../assets/image/buy_card_1.png'
import BuyCardImg_2 from '../assets/image/buy_card_2.png'
import BuyCardImg_3 from '../assets/image/buy_card_3.png'
import BuyCardImg_4 from '../assets/image/buy_card_4.png'
import BuyCardImg_5 from '../assets/image/buy_card_5.png'
import BuyCardImg_6 from '../assets/image/buy_card_6.png'
import CardItem from './CardItem'

const Buy = () => {
  return (
    <div className="buy">
        <div className="container">
            <div className="buy_content">
                <div className="buy_sidebar">
                    <ul>
                        <li><Link>All</Link></li>
                        <li><Link>News</Link></li>
                        <li><Link>Products</Link></li>
                    </ul>
                </div>
                <div className="buy_cards">
                    <div className="buy_col">
                        <CardItem key={CardItem.id} title={'Moon plate'} price= {'75$'} img= {BuyCardImg_1} />
                        <CardItem key={CardItem.id} title={'Ceramic soup bowls'} price= {'Nullam maximus'} img= {BuyCardImg_2} />
                        <CardItem key={CardItem.id} title={'What affects the quality of ceramic products?'} price= {'Lorem ipsum'} img= {BuyCardImg_3} />
                    </div>
                    <div className="buy_col">
                        <CardItem key={CardItem.id} title={'How ceramics are made'} price= {'Lorem ipsum'} img= {BuyCardImg_4} />
                        <CardItem key={CardItem.id} title={'Star set'} price= {'370$'} img= {BuyCardImg_5} />
                        <CardItem key={CardItem.id} title={'Set of containers'} price= {'230$'} img= {BuyCardImg_6} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Buy