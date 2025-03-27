import React from 'react';
import "./card.css";
const Card = ({id,title,price,thumbnail}) => {
  return (
    <div className='card'>
        <h4>{id}.) {title}</h4>
        <h5>{price}</h5>
        <img src={thumbnail}/>
    </div>
  )
}

export default Card
