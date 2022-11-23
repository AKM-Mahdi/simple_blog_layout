import React from "react";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-light">
      <Navbar className="container" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              width={45}
              src="https://www.iconpacks.net/icons/1/free-blogger-icon-107-thumb.png"
              alt=""
            />
          </Navbar.Brand>
          <Nav>
            <Link to="/">Home</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
