import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./ItemList.css";

const ItemList = ({ data }) => {
  return (
    <div className="ItemList-container">
      <Card style={{ width: 300 }}>
        <Image src={data.img} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{data.name}</Card.Header>
          <Card.Meta>
            <span className="date">{data.descripcion}</span>
          </Card.Meta>
          <Card.Description>Precio: ${data.precio}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ItemList;
