import React, { useEffect, useState } from "react";
import { Card, Image } from "semantic-ui-react";
import "./ItemList.css";
import {Link} from "react-router-dom"
import { declareTypeAlias } from "@babel/types";

const ItemList = ({ data }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const prom = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            descripcion: "Al Huevo Caserito Don Vicente X500 Gr",
            name: "Fideos",
            precio: 75,
            img: "https://jumboargentina.vteximg.com.br/arquivos/ids/601779-1000-1000/Fideos-Al-Huevo-Caserito-Don-Vicente-500-Gr-1-29385.jpg?v=637352619161000000",
          },

          {
            id: 2,
            descripcion: "Doble Carolina Gallo X1 Kg",
            name: "Arroz",
            precio: 100,
            img: "https://jumboargentina.vteximg.com.br/arquivos/ids/468465-1000-1000/Arroz-Lucchetti-Parboil-1-Kg-1-41424.jpg?v=636680875588830000",
          },

          {
            id: 3,
            descripcion: "De Mesa Kin Sin Gas 2.25 Lt",
            name: "Agua",
            precio: 55,
            img: "https://jumboargentina.vteximg.com.br/arquivos/ids/614735-1000-1000/Agua-De-Mesa-Kin-Sin-Gas-2-25-Lt-1-241817.jpg?v=637409203087970000",
          },

          {
            id: 4,
            descripcion:
              "Parcialmente Descremada Liviana La Serenisima Sachet 1lt",
            name: "Leche",
            precio: 120,
            img: "https://jumboargentina.vteximg.com.br/arquivos/ids/580273-1000-1000/Leche-Parcialmente-Descremada-Liviana-La-Serenisima-Sachet-1-L-1-612296.jpg?v=637219129588600000",
          },

          {
            id: 5,
            descripcion: "Bimbo 550 Gr",
            name: "Pan Blanco",
            precio: 200,
            img: "https://jumboargentina.vteximg.com.br/arquivos/ids/582120-1000-1000/Pan-Blanco-Bimbo-550-Gr-1-848509.jpg?v=637231218428570000",
          },

          {
            id: 6,
            descripcion: "Coca-cola Sabor Original 2.25 Lts",
            name: "Gaseosa",
            precio: 185,
            img: "https://jumboargentina.vteximg.com.br/arquivos/ids/620842-1000-1000/Gaseosa-Coca-cola-Sabor-Original-2-25-L-1-247191.jpg?v=637468392174970000",
          },
        ]);
      }, 2000);
    });
    prom.then((resultado) => {
      setProductos(resultado);
    });
  }, []);

  return (
    <div className="ItemList-container">
      {productos.map((data) => (
        <Link>
          <Card key={data.id}>
            <Image src={data.img} />
            <Card.Content>
              <Card.Header>{data.name}</Card.Header>
              <Card.Description>{data.descripcion}</Card.Description>
            </Card.Content>
            <Card.Content extra>{"$" + data.precio}</Card.Content>
          </Card>
        </Link>
      ))}
    </div>
  );
};
export default ItemList;