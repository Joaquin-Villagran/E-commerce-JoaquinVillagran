import React, { useState, useEffect } from "react";
import { Segment, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [info, setInfo] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    getDatos();
  }, []);

  const getDatos = async () => {
    const url = `https://supermercado-8107a-default-rtdb.firebaseio.com/Productos.json`;
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    setInfo(data);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const filtro = info.filter((categorias) => {
    return categorias.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <main>
      <Segment inverted>
        <Input
          inverted
          type="text"
          className="form-control"
          onChange={handleChange}
          value={value}
          placeholder="Buscar Producto..."
        />
      </Segment>

      <ul>
        {filtro.map((noun) => (
          <Link to={`/detail/${noun.id}`}>
            <ItemList key={noun.id} {...noun} />
          </Link>
        ))}
      </ul>
    </main>
  );
};

export default ItemListContainer;
//2