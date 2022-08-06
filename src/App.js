import React, { useEffect, useState } from "react";
import { getBeerData } from "./apiCalls";
import BeerContainer from "./BeerContainer/BeerContainer";
import FavoriteContainer from "./FavoriteContainer/FavoriteContainer";
import Header from "./Header/Header";
import { Route } from 'react-router-dom';
// import "./App.css"

const App = () => {
  const [beers, setBeers] = useState([]);
  const [favorites, setFavorites] = useState([]);
  
  console.log('app', window.location.pathname)
    useEffect(() => {
      getBeerData()
      .then(data => {
        setBeers( ...beers, data)
      })
    }, [])

    const saveFavorite = (pairing) => {
      
     setFavorites([...favorites, pairing])

    }

    //here
    //write new method that takes in a new favorite and runs setfavorites to add on to array on line 9 and that new method will get passed down to handle submit in beeer cards
    return (
        <main>
          <Header />
          <Route exact path="/">
            <BeerContainer beers={beers} saveFavorite={saveFavorite}/>
          </Route>
          <Route path="/favorites" className="favorite">
            <FavoriteContainer favorites={favorites}/>
          </Route>
        </main>
    )
  }






export default App;
