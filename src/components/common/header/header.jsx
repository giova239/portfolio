import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import logo from "../../../icons/logo.svg";
import profilepic from "../../../icons/profilepic.png";

function Header() {
  return (
    <Navbar expand="md" bg="primary" variant="dark" fixed="top" className="p-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <Image
            src={profilepic}
            alt="Profile"
            roundedCircle
            width="50"
            height="50"
            className="me-2"
          />
          Stevanato Giovanni
          <Image
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="ms-3"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvasNavbar-md" />

        <Navbar.Offcanvas
          id="offcanvasNavbar-md"
          aria-labelledby="offcanvasNavbarLabel-md"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-md">
              Pages
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/uikit">
                UI Kit
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
