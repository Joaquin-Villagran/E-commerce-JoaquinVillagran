import React from "react";
import CartWidget from "../Cart/CartWidget";
import { Link } from "react-router-dom";
import "./navBar.css";

function NavBar() {
  return (
    <header>
      <nav className="Navigation">
        <ul>
          <img
            className="logo"
            src="../logo192.png"
            alt="Logo del Supermercado"
          />
          Supermecado JT
          <Link className="Link">
            <CartWidget />
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
