import React, { useEffect, useState } from "react";
import { Card, Image } from "semantic-ui-react";
import axios from "axios";

function Detalles({ match }) {
  let charID = match.params.id;
  const [detalles, setDetalles] = useState([]);

  useEffect(() => {
    axios(`/Productos/${charID}`).then((res) => setDetalles(res.data));
  }, [charID]);

  return (
    <div className="ItemList-container">
      <h1>Detalles</h1>
      {detalles.map((char) => {
        return(
        <Card key={char.id}>
          <Image src={char.img} />
          <Card.Content>
            <Card.Header>{char.name}</Card.Header>
            <Card.Description>{char.descripcion}</Card.Description>
          </Card.Content>
          <Card.Content extra>{"$" + char.precio}</Card.Content>
        </Card>
        );
      })}
    </div>
  );
}
export default Detalles;
