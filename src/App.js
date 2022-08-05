import React, { useEffect, useState } from "react";
import { getBeerData } from "./apiCalls";
import BeerContainer from "./BeerContainer/BeerContainer";
import Header from "./Header/Header";
// import "./App.css"

const App = () => {
  const [beers, setBeers] = useState([]);

    useEffect(() => {
      getBeerData()
      .then(data => {
        setBeers( ...beers, data)
        console.log('data', data)
      })
    }, [])
    console.log('beers', beers)

    return (
      <div>
        <Header />
        <main>
        {console.log(beers)}
         <BeerContainer beers={beers}/>
        </main>
      </div>
      
    )
  }






export default App;
