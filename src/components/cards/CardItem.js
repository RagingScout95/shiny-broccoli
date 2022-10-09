import React from 'react';

function CardItem(props) {
  return (
    <div className='card'>
      <img className='card__img' src={props.img}/>
      <div className='card__body'>
        <h3 className='card__title'>{props.title}</h3>
        <h4 className='card__price'>{props.price}</h4>
        {/* <button className='card__btn'>Add to cart</button> */}
      </div>
    </div>
  );
}

export default CardItem;