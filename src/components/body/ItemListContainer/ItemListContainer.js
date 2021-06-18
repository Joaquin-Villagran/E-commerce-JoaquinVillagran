import React, { useState, useEffect } from "react";
import { Item } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

//productosuctos(Json)
/*
function ItemListContainer() {
  const constructor()
    state = {
      productos: [],
    }
  };
  componentDidMount() {
    setTimeout(() => {
      //console.log("PASO 1");
      this.setState({ productos: productos });
    }, 2000);
  };
  componentDidUpdate() {
    console.log("El componente fue modificado");
  };

     //console.log(this.state.productos);
    return (
      <>
        <h1>Productos</h1>
        {this.state.productos.map((productos) => {
          return (
            <div>
              <Item.Group key={productos.id}>
                <Item>
                  <Item.Image size="tiny" src={productos.img} />
                  <Item.Content>
                    <Item.Header as="a">{productos.name}</Item.Header>
                    <Item.Description>{productos.descripcion}</Item.Description>
                    <Item.Extra>{"$" + productos.precio}</Item.Extra>
                    
                    
                  </Item.Content>
                </Item>
                <hr />
              </Item.Group>
            </div>
          );
        })}
      </>
    );
  
}
export default ItemListContainer;*/

function ItemListContainer({ initialValue:[], maxValue:[], minValue:[], onAdd:[] }) {
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = fetch("Productos.js");
    const prod = (await data).json().then(function (res) {
      return res.json();
    });
    //console.log(prod);
  };

  return (
    <div>
      <h1>Productos?</h1>
      <ul>
        {prod.map((productos) => (
          <li key={productos.id}>
            <Item.Group>
              <Item>
                <Item.Image size="tiny" src={productos.img} />
                <Item.Content>
                  <Item.Header as="a">{productos.name}</Item.Header>
                  <Item.Description>{productos.descripcion}</Item.Description>
                  <Item.Extra>{"$" + productos.precio}</Item.Extra>
                  <Button positive floated="right">
                    +
                  </Button>
                  <Button negative floated="right">
                    -
                  </Button>
                </Item.Content>
              </Item>
              <hr />
            </Item.Group>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ItemListContainer;

//<Button positive floated='right'>+</Button>
//<Button negative floated='right'>-</Button>
