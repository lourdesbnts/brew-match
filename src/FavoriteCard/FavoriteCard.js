import React from "react";
import "./FavoriteCard.css";

const FavoriteCard = ({beerName, beerImage, pairing}) => {
  return (
    <article>
      <h3>{beerName}</h3>
      <img src={beerImage} alt={beerName}/>
      <p>{pairing}</p>
    </article>
  )
}

export default FavoriteCard;