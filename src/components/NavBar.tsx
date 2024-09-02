import React, { useState } from "react";
import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";
import "../styles/NavBar.css";

// Navigation bar
const NavBar: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="md" fixed="top">
      <Container fluid>
        <Navbar.Brand className="main-navbar-brand" href="#">
          Julia You
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand-sm"
          onClick={handleShow}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-sm"
          aria-labelledby="offcanvasNavbarLabel-expand-sm"
          placement="end"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
              <Navbar.Brand className="navbar-brand-offcanvas" href="#">
                Julia You
              </Navbar.Brand>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-5">
              <Nav.Link href="#about" onClick={handleClose}>
                About
              </Nav.Link>
              <Nav.Link href="#experience" onClick={handleClose}>
                Experience
              </Nav.Link>
              {/* <Nav.Link href="#projects" onClick={handleClose}>Projects</Nav.Link> */}
              {/* <Nav.Link href="#contact" onClick={handleClose}>Contact</Nav.Link> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
