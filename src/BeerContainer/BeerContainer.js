import React from "react";
import BeerCard from "../BeerCard/BeerCard";
import "./BeerContainer.css";

const BeerContainer = ({ beers, favorites, setFavorites }) => {
  const beerCards = beers.map((beer) => {
    return (
    <BeerCard 
      key={beer.id}
      id={beer.id}
      beerName={beer.name}
      tagline={beer.tagline}
      abv={beer.abv}
      img={beer.image_url}
      foodPairings={beer.food_pairing}
      description={beer.description}
      favorites={favorites}
      setFavorites={setFavorites}
      />
    )
  })

  return (
    <div className="beer-container">
      {beerCards}
    </div>
  )
}

export default BeerContainer;