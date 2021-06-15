import React, { Component } from "react";
import "./App.css";
//Componentes
import NavBar from './components/Header/NavBar/NavBar';
import ItemListContainer from './components/body/ItemListContainer/ItemListContainer';
import ItemCount from './components/body/ItemCount/ItemCount';

//Semantic UI

//Componentees de tipo CLASE
//Componentes de tipo Function,dummy, stateless
//Las class tienen un metodo particular llamado render()
// un fragment se puede escribir <> </> o bien <freagment>
class App extends Component {
  render() {
    return (
      <>
        <NavBar/>
        <ItemListContainer title={'Bienvenido'}/>
        <ItemListContainer title={'Saludo 2'}/>
        <ItemCount/>

      </>
    );
  }
}
export default App;
