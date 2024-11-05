import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import Logo from "../logo/logo";
import profilepic from "../../../icons/profilepic.png";

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
        <div className="d-flex flex-grow align-items-center">
          <Image
            src={profilepic}
            alt="Profile"
            roundedCircle
            width="70"
            height="70"
            className="me-1"
          />
          <div className="ms-1">
            <h1 className="fs-20 mb-0">
              <span className="text-primary me-1">Stevanato</span>
              <span className="text-secondary">Giovanni</span>
            </h1>
            <h2 className="fs-14 text-accent1">Portfolio</h2>
          </div>
        </div>

        <div className="flex-grow-1 d-none d-md-flex justify-content-end">
          <Logo />
        </div>

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
              <Nav.Link as={Link} className="text-primary" to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} className="text-secondary" to="/portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link as={Link} className="text-accent1" to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} className="text-accent2" to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} className="text-accent3" to="/uikit">
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
