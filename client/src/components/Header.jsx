import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          <h1>Synchronous:Data_Getter</h1>
        </Link>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
