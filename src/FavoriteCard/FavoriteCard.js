import React from "react";
import "./FavoriteCard.css";
import PropTypes from "prop-types";

const FavoriteCard = ({ beerName, beerImage, pairing }) => {
  return (
    <article className="fav-card" data-cy="fav-card">
      <h3 className="fav-beer-name" data-cy="fav-beer-name">
        {beerName}
      </h3>
      <img
        className="fav-beer-image"
        data-cy="fav-beer-image"
        src={beerImage}
        alt={beerName}
      />
      <p className="fav-beer-image" data-cy="fav-pairing">
        {pairing}
      </p>
    </article>
  );
};

FavoriteCard.propTypes = {
  beerName: PropTypes.string,
  beerImage: PropTypes.string,
  pairing: PropTypes.string,
};

export default FavoriteCard;
