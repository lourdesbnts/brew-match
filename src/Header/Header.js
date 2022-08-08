import React from "react";
import { Link, Route } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="title" data-cy="title">
      <h1 className="brew-match">Brew Match</h1>
      <h3 className="description">Choose a beer, find a delicious food match.</h3>
      <Route exact path="/">
        <Link to="/user/favorites">
          <button className="home-save-button" data-cy="home-save-button">Saves</button>
        </Link>
      </Route>
      <Route path="/user/favorites">
        <Link to="/">
          <button>Home</button>
        </Link>
      </Route>
    </div>
  );
};

export default Header;
