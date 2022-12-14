import React from "react";
import BeerCard from "../BeerCard/BeerCard";
import "./BeerContainer.css";
import PropTypes from "prop-types";

const BeerContainer = ({ beers, saveFavorite }) => {
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
        saveFavorite={saveFavorite}
      />
    );
  });

  return <section className="beer-container">{beerCards}</section>;
};

BeerContainer.propTypes = {
  beers: PropTypes.array,
  saveFavorite: PropTypes.func,
};

export default BeerContainer;
