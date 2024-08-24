
import React from 'react';
import '../CSS/Hero.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import hero from '../Images/banner-image.png'
import { Container } from "react-bootstrap";

function HeroSection() {
  return (
    <Container fluid="xxl" className='Hero_div py-5 mb-5'>
      <Container className='mt-4 pt-4   hero-header'>
        <Row className='g-5 py-5'>
          <Col className='text-col text-center text-lg-start'>
            <h1 className='hero-heading mb-4 zoomIn animated'>
              Elevate your business global visibility with EmergeWiz</h1>
            <p className='hero-sub zoomIn   animated'>
              Our expert team ensures your brand stands out in the digital world, driving growth and engagement through innovative solutions tailored to your needs.
            </p>
            <p className='hero-sub zoomIn   animated'>
              Shaping the Future through Innovative Development.
            </p>
            <p className='hero-sub zoomIn   animated'>
              Our exceptional development expertise transforms possibilities into realities, crafting Excellence solutions that redefine industries and propel progress to new heights.
            </p>

            <Link to="/contact"  ><Button className='Quote-Button py-sm-3 px-sm-5 slideInLeft animated' variant="outline-light">
              Free Quote</Button>{' '}</Link>
            <Link to="/contact"  ><Button className='Contact-Button py-sm-3 px-sm-5 slideInRight animated' variant="outline-light">
              Contact Us
            </Button>{' '}</Link>
          </Col>
          <Col className='img-col text-center text-lg-start'><img src={hero} alt="" className='Hero-img img-fluid' /></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HeroSection;