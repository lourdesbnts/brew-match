import React from "react";
import BeerCard from "../BeerCard/BeerCard";
import "./BeerContainer.css";

const BeerContainer = ({ beers, saveFavorite}) => {
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
      saveFavorite={saveFavorite}
      />
    )
  })

  return (
    <section className="beer-container">
      {beerCards}
    </section>
  )
}

export default BeerContainer;