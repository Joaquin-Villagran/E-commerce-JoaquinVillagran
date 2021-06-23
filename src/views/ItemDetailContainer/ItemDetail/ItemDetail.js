import React from "react";
import { Card, Image } from "semantic-ui-react";

const ItemDetail = ({ data }) => {
  return (
    <div className="ItemList-container">
      <h1>Detalles</h1>
      <Card key={data.id}>
        <Image src={data.img} />
        <Card.Content>
          <Card.Header>{data.name}</Card.Header>
          <Card.Description>{data.descripcion}</Card.Description>
        </Card.Content>
        <Card.Content extra>{"$" + data.precio}</Card.Content>
      </Card>
    </div>
  );
};
export default ItemDetail;
