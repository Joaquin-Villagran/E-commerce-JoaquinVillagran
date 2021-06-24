import React from "react";
import { Image, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Product = ({ item }) => (
  <Link to={`/detail/${item.id}`}>
    <Card key={item.id}>
      <Image src={item.img} />
      <Card.Content>
        <Card.Header>{item.name}</Card.Header>
        <Card.Description>{item.descripcion}</Card.Description>
      </Card.Content>
      <Card.Content extra>{"$" + item.precio}</Card.Content>
    </Card>
  </Link>
);

export default Product;
