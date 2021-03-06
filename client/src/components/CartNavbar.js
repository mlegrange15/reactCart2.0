import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class CartNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="info" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/" id="navbrand">Shopping Cart</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar />
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/mlegrange15/reactCart2.0">
                  Github
                </NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default CartNavbar;
