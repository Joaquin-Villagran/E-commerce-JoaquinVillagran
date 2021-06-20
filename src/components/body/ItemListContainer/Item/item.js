import React, { Component } from "react";
import { Item } from "semantic-ui-react";

import { productos } from "../../../../Productos";

class item extends Component {
  constructor() {
    super();
    this.state = {
      productos: [],
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ productos: productos });
    }, 2000);
  }
  componentDidUpdate() {
    console.log("Se Modifico");
  }
  render() {
    return (
      <div>
        <h1>PRODUCTOS</h1>
        {this.state.productos.map((productos) => {
          return (
            <Item.Group key={productos.id}>
              <Item>
                <Item.Image size="tiny" src={productos.img} />

                <Item.Content>
                  <Item.Header as="a">{productos.name}</Item.Header>
                  <Item.Meta>{productos.descripcion}</Item.Meta>

                  <Item.Extra>{"$" + productos.precio}</Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          );
        })}
      </div>
    );
  }
}
export default item;
