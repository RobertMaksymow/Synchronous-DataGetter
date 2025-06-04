import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          <h1>Synchronous:Data_Getter</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
