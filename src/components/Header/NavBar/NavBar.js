import React from "react";
import CartWidget from "../Cart/CartWidget";
import { Link } from "react-router-dom";
import "./navBar.css";

function NavBar() {
  return (
    <nav className="Navigation">
      <ul>
        <img
          className="logo"
          src="../logo192.png"
          alt="Logo del Supermercado"
        />
        Supermecado JT
        <Link className="Link" to="/" position="right" name="Home">
          Home
        </Link>
        <Link to="/Almacen" className="active Link">
          Almacen
        </Link>
        <Link to="/Bebidas" className="active Link">
          Bebidas
        </Link>
        <Link className="Link">
          <CartWidget />
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
