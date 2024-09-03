import React, { useState } from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../CSS/Service.css'
import { Link } from 'react-router-dom';
import CareerPopup from './CareerPopup';

function CareerSection(props) {
    const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
    return (
                    <Col lg={4} md={6} className='career animated wow zoomIn SEO-Optimization' data-wow-delay="0.3s">
                        <Card className='service-item '>
                            <Card.Body className='card-body'>
                                {/* <div className='service-img'><FaHome className='service-icon' /></div> */}
                                <Card.Title className='mb-3'>{props.jobs.job_title} </Card.Title>
                                <p >
                                   <p>Description <br/> {props.jobs.description}</p>
                                   <p>Salary : <br/>  {props.jobs.salary}</p>
                                   <p>Location : <br/> {props.jobs.location}</p>
                                </p>
                       
                            {/* <Link to="/contact"> */}
                                <Button className='rad-mor  '  onClick={togglePopup}>Apply Now</Button>
                                {/* </Link> */}
                            </Card.Body>
                        </Card>
                        {isOpen && <CareerPopup
      content={<>
        <b>{props.jobs.job_title}</b>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>Test button</button> */}
      </>}
      handleClose={togglePopup}
    />}
                    </Col>
           
    )
}

export default CareerSection;