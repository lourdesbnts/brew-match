import React, { useEffect, useState } from "react";
import { getBeerData } from "./apiCalls";
import Header from "./Header/Header";
// import "./App.css"

const App = () => {
  const [beers, setBeers] = useState([]);

    useEffect(() => {
      getBeerData()
      .then(data => {
        setBeers([ ...beers, data])
        console.log('data', data)
      })
    }, [])
    console.log('beers', beers)

    return (
      <header>
        <Header />
      </header>
      
    )
  }






export default App;
