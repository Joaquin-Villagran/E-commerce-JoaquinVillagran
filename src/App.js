import React from "react";
import "./App.css";
//Componentes
import Views from "./views/Views";
//Semantic UI

//Componentees de tipo CLASE
//Componentes de tipo Function,dummy, stateless
//Las class tienen un metodo particular llamado render()
// un fragment se puede escribir <> </> o bien <freagment>
function App() {
  return (
    <>
      <Views/>
    </>
  );
}
export default App;
