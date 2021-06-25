import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
//LINK ROUTER DOM
import { Link } from "react-router-dom";

function ItemDetailContainer({match}) {
  const [Productos, setProductos] = useState([]);
  const charID = match.params;
  console.log(charID)

  useEffect(() => {
    fetch(
		`https://supermercado-8107a-default-rtdb.firebaseio.com/Productos.json`
	)
		.then((res) => res.json())
		.then((dataApi) => setProductos(dataApi));
}, [charID]);
  

  return (
    <div >
      {Productos.map((char) => {
        return (
          <div key={char.id} className="CharacterCard-Container">
            <Link to={`/detail/${char.id}`}>
              <ItemDetail data={char} />
            </Link>
          </div> 
        );
      })}
    </div>
  );
}

export default ItemDetailContainer;
