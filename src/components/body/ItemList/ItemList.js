import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./ItemList.css";

const ItemList = ({ img, name, descripcion, precio }) => {
  return (
    <section className="ItemList-container">
      <Card style={{ width: 300 }}>
        <Image src={img} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span>{descripcion}</span>
          </Card.Meta>
          <Card.Description>Precio: ${precio}</Card.Description>
        </Card.Content>
      </Card>
    </section>
  );
};
export default ItemList;
//1