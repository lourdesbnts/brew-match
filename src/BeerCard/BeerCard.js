import React, { useState } from "react";
import "./BeerCard.css"


const BeerCard = ({ beerName, tagline, abv, img, foodPairings, description }) => {
  const [flipCards, setFlipCards] = useState(false);

const foodPair = foodPairings.map((pair) => {
  return <p>{pair}</p> 
})

return (
  <div className={`beer-card ${flipCards ? "flip" : ""}`}>
  <div className="front" onClick={() => setFlipCards(!flipCards)}>
      <img className="image" src={img} alt={beerName}/>
      <h2>{beerName}</h2>
      <p>{tagline}</p>
      <p>{abv}</p>
      
  </div>
  <div className="back" onClick={() => setFlipCards(!flipCards)}>
  <p>{description}</p>
  <p>What sounds good with this?</p>
      {foodPair} 
      <button>SAVE TO TRY LATER</button>
  </div>
  </div>
  )
}



export default BeerCard;