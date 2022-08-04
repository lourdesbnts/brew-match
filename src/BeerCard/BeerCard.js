import React from "react";
import "./BeerCard.css"

const BeerCard = ({ beerName, tagline, abv, img }) => {
// const foodPair = foodPairings.map((pair) => {
//   return <p>{pair}</p>
// })
return (
  <div className="beer-card">
      <img className="image" src={img} alt={beerName}/>
      <h2>{beerName}</h2>
      <p>{tagline}</p>
      <p>{abv}</p>
        {/* {foodPair} */}
    </div>
  )
}



export default BeerCard;

// foodPairings 