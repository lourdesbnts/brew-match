import React, { useEffect, useState } from "react";
import { getBeerData } from "./apiCalls";
import BeerContainer from "./components/BeerContainer/BeerContainer";
import Header from "./components/Header/Header";
import { Route } from "react-router-dom";
import Error from "./components/Error/Error";
import FavoriteContainer from "./components/FavoriteContainer/FavoriteContainer";

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
