import React, { useEffect, useState } from "react";
import { getBeerData } from "./apiCalls";
import BeerContainer from "./BeerContainer/BeerContainer";
import FavoriteContainer from "./FavoriteContainer/FavoriteContainer";
import Header from "./Header/Header";
import { Route } from 'react-router-dom';
import { array } from "prop-types";
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
      // console.log("favorites", favorites)
      // console.log("pairing", pairing)
      // if (!favorites.includes(pairing)) {
        //   return pairing
        // } else {
          //   return "Already added!"
          // }
          const matchFood = favorites.filter(fav => fav.pairing === pairing.pairing)
          if (matchFood.length) {
            return "Already added!"
          } else {
            setFavorites([...favorites, pairing])
        }

      // let match;
      // for (var i = 0; i < favorites.length; i++) {
      //   console.log("i what u doing ", i)
      //   if (![i.pairing].includes(pairing.pairing)) {
      //     return pairing;
      //   } else {
      //     // match = i;
      //     return "Already added"
      //   }
      // }
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
