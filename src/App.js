import React, { useEffect, useState } from "react";
import { getBeerData } from "./apiCalls";
import BeerContainer from "./BeerContainer/BeerContainer";
import Header from "./Header/Header";
// import "./App.css"

const App = () => {
  const [beers, setBeers] = useState([]);
  const [favorites, setFavorites] = useState([]);

    useEffect(() => {
      getBeerData()
      .then(data => {
        setBeers( ...beers, data)
      })
    }, [])

    //here
    //write new method that takes in a new favorite and runs setfavorites to add on to array on line 9 and that new method will get passed down to handle submit in beeer cards

    return (
      <div>
        <Header />
        <main>
         <BeerContainer beers={beers} favorites={favorites} setFavorites={setFavorites}/>
        </main>
      </div>
      
    )
  }






export default App;
