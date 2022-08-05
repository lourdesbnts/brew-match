import React, { useState } from "react";
import "./BeerCard.css"


const BeerCard = ({ beerName, tagline, abv, img, foodPairings  }) => {
  const [flipCards, setFlipCards] = useState(false);

const foodPair = foodPairings.map((pair) => {
  return <p>{pair}</p>
})
//create state to hold our flip 
//add className="front"
//create a sibling div that will have className="back",
//thats where the description of the beer and the radio buttons,
//next to the food that pairs well with the beer.

return (
  <div className={`beer-card ${flipCards ? "flip" : ""}`}>
  <div className="front" onClick={() => setFlipCards(!flipCards)}>
      <img className="image" src={img} alt={beerName}/>
      <h2>{beerName}</h2>
      <p>{tagline}</p>
      <p>{abv}</p>
      
  </div>
  <div className="back" onClick={() => setFlipCards(!flipCards)}>
      {foodPair}
  </div>
  </div>
  )
}



export default BeerCard;