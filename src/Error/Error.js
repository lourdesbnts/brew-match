import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <>
    <Link to="/">
          <button className="error-home">Home</button>
        </Link>
    <h2 className="error" data-cy="error">Oops sorry, something went wrong!</h2>
    </>
  )
}

export default Error;