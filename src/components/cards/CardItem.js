import React from "react";
import { useNavigate } from "react-router-dom";

function CardItem(props) {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={(e) => navigate(`/products/${props.idx}`)}>
      <img className="card__img" src={props.img} alt={props.title} />
      <div className="card__body">
        <h3 className="card__title">{props.title}</h3>
        <h4 className="card__price">{props.price}</h4>
      </div>
    </div>
  );
}

export default CardItem;
