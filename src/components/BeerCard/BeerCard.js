import React, { useState } from "react";
import "./BeerCard.css";
import PropTypes from "prop-types";

const BeerCard = ({
  beerName,
  tagline,
  abv,
  img,
  foodPairings,
  saveFavorite,
}) => {
  const [flipCards, setFlipCards] = useState(false);
  const [pairing, setPairing] = useState("");

  const foodPair = foodPairings.map((pair) => {
    return (
      <div key={pair}>
        <input
          key={pair.id}
          type="radio"
          value={pair}
          name="food"
          onChange={(event) => setPairing(event.target.value)}
        />
        <label htmlFor={pair}>{pair}</label>
      </div>
    );
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    saveFavorite({
      pairing: pairing,
      beerImage: img,
      beerName: beerName,
    });
  };

  return (
    <div
      className={`beer-card ${flipCards ? "flip" : ""}`}
      data-cy="beer-cards"
    >
    {/* <div className="front-details"> */}
      <div
        className="front"
        onClick={() => setFlipCards(!flipCards)}
        data-cy="beer-card-front"
      >
      <div className="beer-card-image-container">
        <img className="image" data-cy="image" src={img} alt={beerName} />
      </div>
      <div className="beer-card-front-details">
        <h2 className="beer-name" data-cy="beer-name">
          {beerName}
        </h2>
        <p className="tagline" data-cy="tagline">
          {tagline}
        </p>
        <p className="abv" data-cy="abv">
          ABV: {abv}
        </p>
      </div>
        </div>
      {/* </div> */}
      <div className="back" data-cy="beer-card-back">
        <p className="sounds-good" data-cy="sounds-good">
          What sounds good with this?
        </p>
        <form
          className="food-pair"
          data-cy="food-pair"
          onSubmit={(event) => handleSubmit(event)}
        >
          {foodPair}
          <button
            className="save-to-try-later-button"
            type="submit"
            data-cy="save-to-try-later"
          >
            SAVE TO TRY LATER
          </button>
        </form>
        <button
          className="go-back-button"
          onClick={() => setFlipCards(!flipCards)}
          data-cy="go-back"
        >
          FLIP BACK
        </button>
      </div>
    </div>
  );
};

BeerCard.propTypes = {
  beerName: PropTypes.string,
  tagline: PropTypes.string,
  abv: PropTypes.number,
  img: PropTypes.string,
  foodPairings: PropTypes.array,
  description: PropTypes.string,
  saveFavorite: PropTypes.func,
};

export default BeerCard;
