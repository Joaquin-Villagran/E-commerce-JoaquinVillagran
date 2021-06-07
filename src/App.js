import React, { Component, Fragment } from "react";
import "./App.css";
//Componentees de tipo CLASE
//Componentes de tipo Function,dummy, stateless
//Las class tienen un metodo particular llamado render()
// un fragment se puede escribir <> </> o bien <freagment>
class App extends React.Component {
  render() {
    return (
      <>
        <nav>
          <ul>
            <li>
              <h4>Supermecado JT</h4>
            </li>
            <li>
              <a className="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#news">Noticias</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
            <li>
              <a href="#about">Acerca de</a>
            </li>
          </ul>
        </nav>
        <h1>Bienvenido a mi pagina</h1>
      </> // <div> </div> o React.Fragment && usar para mas de una etiqueta
    );
  }
}
export default App;
