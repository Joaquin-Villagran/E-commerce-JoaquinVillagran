import React from "react";
import { Card, Image } from "semantic-ui-react";

const ItemDetail = ({ data }) => {
  return (
    <section className="ItemList-container">
      <Card style={{ width: 300 }}>
        <Image src={data.img} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{data.name}</Card.Header>
          <Card.Meta>
            <span>{data.birthday}</span>
          </Card.Meta>
          <Card.Description>{data.status}</Card.Description>
        </Card.Content>
      </Card>
    </section>
  );
};
export default ItemDetail;
