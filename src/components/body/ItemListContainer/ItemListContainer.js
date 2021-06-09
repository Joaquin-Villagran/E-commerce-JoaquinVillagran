import React from "react";

const saludo1 = {
  backgroundColor: "black",
  color: "white",
  fontSize: 20,
  textAlign: "center",
};

function ItemListContainer(props) {
  return (
    <>
      <ul>
        <li style={saludo1}>{props.title}</li>
      </ul>
    </>
  );
}
export default ItemListContainer;
