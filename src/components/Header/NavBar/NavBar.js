import React from "react";
import CartWidget from "../Cart/CartWidget";
import { Link } from "react-router-dom";
import "./navBar.css";
function NavBar() {
  return (
    <nav className='Navigation'>
      <ul>
        <img className="logo" src="../logo192.png" alt="Logo del Supermercado" />
        Supermecado JT
        <Link className='Link' to="/" position="right" name="Home">
          Home
        </Link>
        <Link className='Link' to="/Contacto" name="Contacto">
          Contacto
        </Link>
        <Link className='Link' to="/Acerca" name="Acerca de">
          Acerca de
        </Link>
        <Link className='Link'>
          <CartWidget />
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
