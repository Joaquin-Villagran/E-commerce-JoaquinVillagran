import React from "react";
import "./ItemList.css";
import Product from "../Product/Product";


const ItemList = ({ productos }) => {
 return(
   <div className="ItemList-container">
     {productos.map(item=> <Product  key={item.id} item={item}/>)}
   </div>
 );
}

export default ItemList;
