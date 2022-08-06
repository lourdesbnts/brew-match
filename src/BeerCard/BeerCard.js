import React, { useState } from "react";
import "./BeerCard.css";


const BeerCard = ({ beerName, tagline, abv, img, foodPairings, description, saveFavorite}) => {
  const [flipCards, setFlipCards] = useState(false);
  const [pairing, setPairing] = useState("");
 

const foodPair = foodPairings.map((pair) => {
  return ( <div key={pair}>
    <input key={pair.id} type="radio" value={pair} name="food" onChange={(event) => setPairing(event.target.value)}/> 
    <label htmlFor={pair}>{pair}</label>
  </div> )
})

const handleSubmit = event => {
  event.preventDefault();
  saveFavorite({
    pairing: pairing,
    beerImage: img,
    beerName: beerName
  })
  
};

return (
  <div className={`beer-card ${flipCards ? "flip" : ""}`}>
  <div className="front" onClick={() => setFlipCards(!flipCards)}>
      <img className="image" src={img} alt={beerName}/>
      <h2>{beerName}</h2>
      <p>{tagline}</p>
      <p>{abv}</p>
      
  </div>
  <div className="back">
  <p>{description}</p>
  <p>What sounds good with this?</p>
  <form className="food-pair" onSubmit={(event) => handleSubmit(event)} >
      {foodPair} 
      <button type="submit">SAVE TO TRY LATER</button>
  </form>
      <button onClick={() => setFlipCards(!flipCards)}>Go Back</button>
  </div>
  </div>
  )
}

export default BeerCard;