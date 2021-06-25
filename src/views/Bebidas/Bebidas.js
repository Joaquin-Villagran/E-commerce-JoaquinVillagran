import React, { useState, useEffect } from "react";
import { Image, Card } from "semantic-ui-react";

export default function Bebidas() {
  const [cate, setCate] = useState([]);

  useEffect(() => {
    fetch(
      `https://supermercado-8107a-default-rtdb.firebaseio.com/Productos.json`
    )
      .then((res) => res.json())
      .then((dataApi) => setCate(dataApi));
  }, []);
  return (
    <div>
      {cate.map((item) => {
        return (
          <div key={item.id} className="CharacterCard-Container">
            <Card key={item.id}>
              <Image src={item.img} />
              <Card.Content>
                <Card.Header>{item.name.Arroz}</Card.Header>
                <Card.Description>{item.descripcion}</Card.Description>
              </Card.Content>
              <Card.Content extra>{"$" + item.precio}</Card.Content>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
