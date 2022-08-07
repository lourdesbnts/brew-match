import React from "react";
import "./FavoriteCard.css";
import PropTypes from "prop-types";

const FavoriteCard = ({beerName, beerImage, pairing}) => {
  return (
    <article>
      <h3>{beerName}</h3>
      <img src={beerImage} alt={beerName}/>
      <p>{pairing}</p>
    </article>
  )
}

FavoriteCard.propTypes = {
  beerName: PropTypes.string, 
  beerImage: PropTypes.string,
  pairing: PropTypes.string
}

export default FavoriteCard;