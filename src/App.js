import React, { useEffect, useState } from "react";
import { getBeerData } from "./apiCalls";
import BeerContainer from "./BeerContainer/BeerContainer";
import FavoriteContainer from "./FavoriteContainer/FavoriteContainer";
import Header from "./Header/Header";
import { Route } from "react-router-dom";
import Error from "./Error/Error";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getBeerData().then((data) => {
      setBeers(...beers, data);
    });
  }, []);

  const saveFavorite = (pairing) => {
    const matchFood = favorites.filter(
      (fav) => fav.pairing === pairing.pairing
    );
    if (matchFood.length) {
      return "Already added!";
    } else {
      setFavorites([...favorites, pairing]);
    }
  };

  return (
    <main>
      <Header />
      <Route exact path="/">
        <BeerContainer beers={beers} saveFavorite={saveFavorite} />
      </Route>
      <Route path="/user/favorites" className="favorite">
        <FavoriteContainer favorites={favorites} />
      </Route>
      <Route exact path="/:error">
        <Error />
      </Route>
    </main>
  );
};

export default App;
