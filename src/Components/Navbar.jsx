import '../CSS/Navbar.css';
import '../CSS/Sticky-nav.css';
import AboutPage from '../Pages/AboutPage';
import HomePage from '../Pages/HomePage';
import ServicePage from '../Pages/ServicePage';
import ProjectPage from '../Pages/ProjectPage';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import logo from './../Images/logo.png'
import ContactPage from '../Pages/ContactPage';

function Navibar() {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('load', stickNavbar);
    return () => window.removeEventListener('load', stickNavbar);
  });

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > -5 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  // const [showDropdown, setShowDropdown] = useState(false);
  // const handleMouseEnter = () => {
  //   setShowDropdown(true);
  // };

  // const handleMouseLeave = () => {
  //   setShowDropdown(false);
  // };

  return (
    <Container fluid="xxl" className='position-relative p-0'>
      {['lg'].map((expand) => (
        <Navbar bg="light" data-bs-theme="light"  key={expand} expand={expand} className={`Navbar  ${stickyClass}`}>
          <Navbar.Brand className='brand '>
            <Link to="/" className='brand-link ml-2'>
              
              <img src={logo} alt="emergewiz-logo" width={200} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='navBody '>
              <Nav className="justify-content-end flex-grow-1 nav py-0">
                <Nav.Link as={Link} to="/" className='navLinks navLink1 mx-4'>Home</Nav.Link>
                <Nav.Link as={Link} to="/about" className='navLinks navLink2 mx-4 '>About</Nav.Link>
                <Nav.Link as={Link} to="/service" className='navLinks navLink3 mx-4'>Service</Nav.Link>
                <Nav.Link as={Link} to="/project" className='navLinks navLink4 mx-4'>Products</Nav.Link>
                <Nav.Link as={Link} to="/career" className='navLinks navLink4 mx-4'>Career</Nav.Link>
                {/* <NavDropdown title="Pages" className='navLinks' id={`offcanvasNavbarDropdown-expand-${expand}`}show={showDropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <NavDropdown.Item as={Link} to="/" className='drop-link mb-1'>Page 1</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/" className='drop-link mb-1'>Page 2</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/" className='drop-link mb-1'>Page 3</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/" className='drop-link mb-1'>Page 4</NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link as={Link} to="/contact" className='navLinks navLink5 mx-4'>Contact</Nav.Link>
              </Nav>
              {/* <SearchForm/> */}
            </Offcanvas.Body> 
          </Navbar.Offcanvas>
        </Navbar>
      ))}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ContactPage />} />
      </Routes>
    </Container> 
  )
}

export default Navibar;
