import React from 'react'


const CardItem = ({img , title ,price ,key}) => {
  return (
    <div className="card">
        <div className="card_img">
            <img src={img} alt="" />
        </div>
        <p className="card_title">{title}</p>
        <p className="card_price">{price}</p>
    </div>
  )
}

export default CardItem