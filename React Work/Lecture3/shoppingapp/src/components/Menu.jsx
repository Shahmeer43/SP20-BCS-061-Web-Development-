import React from "react";
import "../components/Menu.css";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="container">
      <ul className="mainMenu">
        <li className="mainMenuChild">
          <Link className="menu" to="/">
            Home
          </Link>
        </li>
        <li className="mainMenuChild">
          <Link className="menu" to="/product">
            Products
          </Link>
        </li>
        <li className="mainMenuChild">
          <Link className="menu" to="/contactus">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
