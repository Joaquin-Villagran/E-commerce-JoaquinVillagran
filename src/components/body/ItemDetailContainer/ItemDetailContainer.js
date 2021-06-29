import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import axios from "axios";

function ItemDetailContainer({ match }) {
  let charID = parseInt(match.params.id);
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios.get("../public/Productos.JSON").then((res) =>
      setCharacter(res.data.filter((element) => element.id == charID))
    );
  }, []);

  return (
    <div>
      <h1>Es impresionante pero no se me da</h1>
      {character.map((char) => {
        
        <ul>
          <ItemDetail data={char} />
        </ul>;
      })}
    </div>
  );
}

export default ItemDetailContainer;
