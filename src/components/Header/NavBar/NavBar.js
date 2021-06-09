import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import CartWidget from "../Cart/CartWidget";

class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item>
          <h4>Supermecado JT</h4>
        </Menu.Item>

        <Menu.Item
          position="right"
          name="Home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
        
          name="Información"
          active={activeItem === "Información"}
          onClick={this.handleItemClick}
        >
          Información
        </Menu.Item>

        <Menu.Item
          name="Acerca de"
          active={activeItem === "Acerca de"}
          onClick={this.handleItemClick}
        >
          Acerca de
        </Menu.Item>
        <Menu.Item>
          <CartWidget />
        </Menu.Item>
      </Menu>
    );
  }
}
export default NavBar;
