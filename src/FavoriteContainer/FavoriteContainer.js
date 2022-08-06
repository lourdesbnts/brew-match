import React from "react";
// import BeerCard from "../BeerCard/BeerCard";
import FavoriteCard from "../FavoriteCard/FavoriteCard";
import "./FavoriteContainer.css";


const FavoriteContainer = ({favorites}) => {
  const favCards = favorites.map((favorite) => {
    console.log('helloooo',favorite)
    
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
      {favCards}
    </div>
  )
}

export default FavoriteContainer;

{/* <BeerCard
key={favorite.id}
id={favorite.id}
beerName={favorite.beerName}
beerImage={favorite.beerImage}
pairing={favorite.pairing}
/> */}