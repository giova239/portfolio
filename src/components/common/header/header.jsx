import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import Logo from "../logo/logo";
import profilepic from "../../../images/profile.png";

function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsHidden(currentScrollPos > prevScrollPos && currentScrollPos > 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <Navbar
      expand="md"
      bg="dark"
      variant="dark"
      fixed="top"
      className={`p-3 ${isHidden ? "header-hidden" : ""}`}
    >
      <Container className="d-flex justify-content-between align-items-center">
        <Image
          src={profilepic}
          alt="Profile"
          roundedCircle
          width="70"
          height="70"
          className="me-3"
        />
        <Logo />

        <Navbar.Toggle aria-controls="offcanvasNavbar-md" />

        <Navbar.Offcanvas
          id="offcanvasNavbar-md"
          aria-labelledby="offcanvasNavbarLabel-md"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-md">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={NavLink} className="nav-link--primary" to="/">
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="nav-link--secondary"
                to="/portfolio"
              >
                Portfolio
              </Nav.Link>
              <Nav.Link as={NavLink} className="nav-link--accent1" to="/about">
                About
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="nav-link--accent2"
                to="/contact"
              >
                Contact
              </Nav.Link>
              <Nav.Link as={NavLink} className="nav-link--accent3" to="/uikit">
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
