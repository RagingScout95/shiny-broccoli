import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios from 'axios';

function Cards() {
  const getallusers = async () => {
    const allusers = await axios.get('http://localhost:5000/ecommerce/api/v1/allusers').then((response) => {
      console.log(response);
    }); 
  }
  getallusers()
  return (
    <div className='wrapper'>
      <CardItem 
      img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSddKo8pWTeVFKpPNWBEkQYTY0D5I4xkbDGcSYlLdTiSkGgJD2iTqvaSGsJzXVp56dyk9o&usqp=CAU'
      title = 'Crocin'
      price = '30.00' 
      />
      <CardItem 
      img = 'https://assets.truemeds.in/Images/ProductImage/TM-CACR1-008140/REVITAL-H-CAPSULE-60_1.webp?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-250'
      title = 'Revital'
      price = '495.00' 
      />
      <CardItem 
      img = 'https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/ruwkhulsratjs1xdv8pj.jpg'
      title = 'Iodex Balm'
      price = '150.00' 
      />
      <CardItem 
      img = 'https://onemg.gumlet.io/images/q_auto,c_fit,h_150,f_auto,w_150/0bede5b02bf743ddb910721e0ece0fc7/accu-chek-active-blood-glucometer-kit-box-of-10-test-strips-free.jpg'
      title = 'Accu-Chek Active Blood Glucometer Kit'
      price = '999.00' 
      />
      <CardItem 
      img = 'https://onemg.gumlet.io/images/w_150,c_fit,f_auto,h_150,q_auto/d8c5f966d7da452c9b81c742474d45b6/ensure-vanilla-powder-refill.jpg'
      title = 'Endure Vanilla Powder Refill'
      price = '1300.00' 
      />
    </div>
  );
}

export default Cards;
