import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios from 'axios';

function Cards() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get("http://localhost:5000/ecommerce/api/v1/allproducts").then((response) => {
      setPost(response.data);
    });
  }, []);
  if (!post) return null;
  console.log(post);
  return (
    <div className='wrapper'>
      {post.map((x) => (
          <CardItem 
          img = {x.productimages[0].imageurl}
          key = {x._id}
          title = {x.productname}
          price = {x.productprice}
        />
      ))}

    </div>
  );
}

export default Cards;
