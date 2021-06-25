import React from "react";
//Views
import Home from "./views/Home/Home";
import Almacen from "./views/Almacen/Almacen";
import Bebidas from "./views/Bebidas/Bebidas";
//Componentes
import Navbar from "./components/Header/NavBar/NavBar";
import ItemDetailContainer from "./components/body/ItemDetailContainer/ItemDetailContainer";

//REACT-ROuter-DOM
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Componentees de tipo CLASE
//Componentes de tipo Function,dummy, stateless
//Las class tienen un metodo particular llamado render()
// un fragment se puede escribir <> </> o bien <freagment>
function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Almacen" component={Almacen} />
          <Route path="/Bebidas" component={Bebidas} />
          <Route path="/id/:id" component={ItemDetailContainer} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
