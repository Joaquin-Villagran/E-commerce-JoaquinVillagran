import React from "react";
//Views
import Home from "./Home/Home";
import Acerca from "./AcercaDe/Acerca";
import Contacto from "./Contacto/Contacto";
import Detalles from "./Detalles/Detalles";
//Componentes
import Navbar from "../components/Header/NavBar/NavBar";
//REACT-ROuter-DOM
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Views() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/Acerca'  component={Acerca}/>
            <Route path='/Contacto'  component={Contacto}/>
            <Route path='/detail/:id'  component={Detalles}/>
        </Switch>
      </div>
    </Router>
  );
}
export default Views;
