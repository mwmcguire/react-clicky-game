import React from "react";
import "./card.css";

const Card = props => (
  <div className="img-container" onClick={() => props.clickedImage(props.id)}>
    <img alt="sprite" src={props.image} />
  </div>
);

export default Card;