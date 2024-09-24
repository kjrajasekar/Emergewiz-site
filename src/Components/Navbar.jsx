import "../CSS/Sticky-nav.css";
import "../CSS/Navbar.css";
import AboutPage from "../Pages/AboutPage";
import HomePage from "../Pages/HomePage";
import ServicePage from "../Pages/ServicePage";
import ProjectPage from "../Pages/ProjectPage";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState, useEffect } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import logo from "./../Images/logo.png";
import ContactPage from "../Pages/ContactPage";
import { NavDropdown } from "react-bootstrap";
import CareerPage from "../Pages/CareerPage";
import WebServices from "../Section/WebServices";
import MobileService from "../Section/MobileServices";

function Navibar() {
  const [stickyClass, setStickyClass] = useState("");
  // State to control the visibility of the Offcanvas
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  // Functions to handle opening and closing the Offcanvas
  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  useEffect(() => {
    window.addEventListener("load", stickNavbar);
    return () => window.removeEventListener("load", stickNavbar);
  });

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > -5 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  const pathname = useLocation().pathname;
  return (
    <Container fluid="xxl" className="position-relative p-0">
      {["lg"].map((expand) => (
        <Navbar
          bg="light"
          data-bs-theme="light"
          key={expand}
          expand={expand}
          className={`Navbar  ${stickyClass}`}
        >
          <Navbar.Brand className="brand ">
            <Link to="/" className="brand-link ml-2">
              <img src={logo} alt="emergewiz-logo" width={200} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            onClick={handleShow}
          />
          <Navbar.Offcanvas
            show={showOffcanvas}
            onHide={handleClose}
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="navBody ">
              <Nav
                activeKey={pathname}
                className="justify-content-end flex-grow-1 nav py-0"
              >
                <Nav.Link
                  onClick={handleClose}
                  as={Link}
                  to="/"
                  className={`${
                    pathname === "/"
                      ? "navLinks navLink1 mx-4 myactive"
                      : "navLinks navLink1 mx-4 "
                  }`}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  onClick={handleClose}
                  as={Link}
                  to="/about"
                  className={`${
                    pathname === "/about"
                      ? "navLinks navLink1 mx-4 myactive"
                      : "navLinks navLink1 mx-4 "
                  }`}
                >
                  About
                </Nav.Link>
                {/* <Nav.Link as={Link} to="/service" className='navLinks navLink3 mx-4'>Service</Nav.Link> */}
                <NavDropdown
                  title="Services"
                  className={`${
                    pathname.startsWith("/service")
                      ? "navLinks navLink1 mx-4 myactive"
                      : "navLinks navLink1 mx-4 "
                  }`}
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                  show={showDropdown}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/service/web"
                    className="drop-link mb-1"
                  >
                    Web Development
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/service/mobile"
                    className="drop-link mb-1"
                  >
                    Mobile Development
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/service/testing"
                    className="drop-link mb-1"
                  >
                    Testing
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/service/digital"
                    className="drop-link mb-1"
                  >
                    Digital Marketing
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  onClick={handleClose}
                  as={Link}
                  to="/project"
                  className={`${
                    pathname.startsWith("/project")
                      ? "navLinks navLink1 mx-4 myactive"
                      : "navLinks navLink1 mx-4 "
                  }`}
                >
                  Products
                </Nav.Link>
                <Nav.Link
                  onClick={handleClose}
                  as={Link}
                  to="/career"
                  className={`${
                    pathname.startsWith("/career")
                      ? "navLinks navLink1 mx-4 myactive"
                      : "navLinks navLink1 mx-4 "
                  }`}
                >
                  Career
                </Nav.Link>
                <Link to="/contact" className="py-3">
                  <button className="btn btn-primary ">Contact Us</button>
                </Link>
                {/* <Nav.Link
                  onClick={handleClose}
                  as={Link}
                  to="/contact"
                  className={`${
                    pathname.startsWith("/contact")
                      ? "navLinks navLink1 mx-4 myactive"
                      : "navLinks navLink1 mx-4 "
                  }`}
                >
                  Contact
                </Nav.Link> */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      ))}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />}>
          {" "}
        </Route>
        <Route path="/service/web" element={<WebServices />} />
        <Route path="/service/mobile" element={<MobileService />} />
        <Route path="/service/testing" element={<ServicePage />} />
        <Route path="/service/digital" element={<ServicePage />} />

        <Route path="/project" element={<ProjectPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ContactPage />} />
      </Routes>
    </Container>
  );
}

export default Navibar;
