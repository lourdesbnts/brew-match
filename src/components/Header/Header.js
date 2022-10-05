import React from "react";
import { Link, Route } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="title" data-cy="title">
      <h1 className="brew-match">Brew Match</h1>
      <h3 className="description">
        Welcome! BrewMatch is a variety of several kinds of beers that will give
        you delicious pairings of food that go well with it, so your taste buds
        always have a good time! Just click on any beer that catches your eye to
        see your different options. Enjoy!
      </h3>
      <Route exact path="/">
        <Link to="/user/favorites">
          <button className="home-save-button" data-cy="home-save-button">
            Saves
          </button>
        </Link>
      </Route>
      <Route path="/user/favorites">
        <Link to="/">
          <button className="home-save-button">Home</button>
        </Link>
      </Route>
    </div>
  );
};

export default Header;
