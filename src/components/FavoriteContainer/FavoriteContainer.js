import React from "react";
import FavoriteCard from "../FavoriteCard/FavoriteCard";
import "./FavoriteContainer.css";
import PropTypes from "prop-types";

const FavoriteContainer = ({ favorites }) => {
  const favCards = favorites.map((favorite) => {
    return (
      <FavoriteCard
        key={favorite.id}
        id={favorite.id}
        beerName={favorite.beerName}
        beerImage={favorite.beerImage}
        pairing={favorite.pairing}
      />
    );
  });

  return (
    <div className="favorite-container">
      {favCards.length ? (
        favCards
      ) : (
        <p className="havent-saved" data-cy="havent-saved">
          You haven't saved anything.
        </p>
      )}
    </div>
  );
};

FavoriteContainer.propTypes = {
  favorites: PropTypes.array,
};

export default FavoriteContainer;
