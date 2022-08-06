import React from "react";
import FavoriteCard from "../FavoriteCard/FavoriteCard";
import "./FavoriteContainer.css";


const FavoriteContainer = ({favorites}) => {
  const favCards = favorites.map((favorite) => {
    
    return (
      <FavoriteCard
        key={favorite.id}
        id={favorite.id}
        beerName={favorite.beerName}
        beerImage={favorite.beerImage}
        pairing={favorite.pairing}
      />


    )
  })

  return (
    <div className="favorite-container">
      { favCards.length ? favCards : <p>You haven't saved anything.</p> }
    </div>
  )
}

export default FavoriteContainer;

