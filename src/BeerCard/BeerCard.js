import React from "react";

const BeerCard = ({ beerName, foodPairings }) => {
  const foodPair = foodPairings.map((pair) => {
    return <p>{pair}</p>
  })
  return (
    <div className="beer-card">
      <h2>{beerName}</h2>
        {foodPair}
    </div>
  )
}



export default BeerCard;