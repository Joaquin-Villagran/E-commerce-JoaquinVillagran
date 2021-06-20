import React from "react";
import "./App.css";
//Componentes
import NavBar from "./components/Header/NavBar/NavBar";
import ItemCount from "./components/body/ItemListContainer/ItemCount/ItemCount";
import Item from "./components/body/ItemListContainer/Item/item";

//Semantic UI

//Componentees de tipo CLASE
//Componentes de tipo Function,dummy, stateless
//Las class tienen un metodo particular llamado render()
// un fragment se puede escribir <> </> o bien <freagment>
function App() {
  return (
    <>
      <NavBar />
      <Item />
      <ItemCount />
    </>
  );
}
export default App;
