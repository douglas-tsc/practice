import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu style={{ marginTop: "10px" }}>
        <Link route="/">
          <a className="item">Crowdcoin</a>
        </Link>
        <Menu.Menu position="right">
          <Menu.Item
            name="signup"
            active={activeItem === "signup"}
            onClick={this.handleItemClick}
          >
            <Link route="/">
              <a className="item">Campaigns</a>
            </Link>
          </Menu.Item>

          <Menu.Item
            name="help"
            active={activeItem === "help"}
            onClick={this.handleItemClick}
          >
            <Link route="/campaigns/new">
              <a className="item">+</a>
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;
