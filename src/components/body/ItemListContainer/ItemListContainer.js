import React, { useState, useEffect, Fragment } from "react";
import ItemList from "../ItemList/ItemList";
import axios from "axios";
import './ItemListContainer.css'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios('https://supermercado-8107a-default-rtdb.firebaseio.com/productos.json').then((res) => {
        // console.log(res.data);
        setProductos(res.data);
    });
}, []);

  return (
    <Fragment className="ItemListContainer">
        <ItemList productos={productos} />
    </Fragment>
  );
};

export default ItemListContainer;
