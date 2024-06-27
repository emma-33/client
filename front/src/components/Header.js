import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "./Header.css";
import DropdownChallenges from "./DropdownChallenges";
import DropdownCTF from "./DropdownCTFs";

function Header() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="../images/logo_full_black.png"
            height="70"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <DropdownChallenges />
            <DropdownCTF />
          </Nav>
          <Nav className="ml-auto">
            <Button variant="outline-light" className="mr-2" href="/login">Log In</Button>
            <Button variant="success" href="/signup">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
