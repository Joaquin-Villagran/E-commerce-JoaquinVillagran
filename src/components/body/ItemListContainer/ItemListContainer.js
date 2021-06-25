import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { Link } from "react-router-dom";

function ItemListContainer({match}) {
  const [cate, setCate] = useState([]);
  const catID=match;

  useEffect(() => {
    fetch(
      `https://supermercado-8107a-default-rtdb.firebaseio.com/Productos.json`
    )
      .then((res) => res.json())
      .then((dataApi) => setCate(dataApi));
  }, [catID]);

  return (
    <div>
      {cate.map((char) => {
        return (
          <div key={char.id} className="CharacterCard-Container">
            <Link to={`/id/${char.id}`}>
              <ItemList data={char} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ItemListContainer;
