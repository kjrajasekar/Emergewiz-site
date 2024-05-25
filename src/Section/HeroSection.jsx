
import React from 'react';
import '../CSS/Hero.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import hero from '../Images/banner-image.png'
import { Container } from "react-bootstrap";

function HeroSection() {
  return (
    <Container fluid="xxl" className='Hero_div py-5 mb-5'>
      <Container className='mt-4 pt-4 px-lg-5 hero-header'>
        <Row className='g-5 py-5'>
          <Col className='text-col text-center text-lg-start'>
            <h1 className='hero-heading mb-4 zoomIn animated'> Spectrum of excellence
to accelerate business</h1>
            <p className='hero-sub zoomIn pb-3 animated'>
            Technology landscape is constantly changing. Our aesthetic practices ensure feature-rich ideas enabling lasting experience for end users.
            Technology landscape is constantly changing. Our aesthetic practices ensure feature-rich ideas enabling lasting experience for end users.
            </p>
            <Button className='Quote-Button py-sm-3 px-sm-5 slideInLeft animated' variant="outline-light">Free Quote</Button>{' '}
            <Button className='Contact-Button py-sm-3 px-sm-5 slideInRight animated' variant="outline-light">Contact Us</Button>{' '}
          </Col>
          <Col className='img-col text-center text-lg-start'><img src={hero} alt="" className='Hero-img img-fluid' /></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HeroSection;