import portfolio_1 from '../Images/portfolio-1.jpg';
import portfolio_2 from '../Images/portfolio-2.jpg';
import portfolio_3 from '../Images/portfolio-3.jpg';
import portfolio_4 from '../Images/portfolio-4.jpg';
import portfolio_5 from '../Images/portfolio-5.jpg';
import portfolio_6 from '../Images/portfolio-6.jpg';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';
import React from "react";
import '../CSS/Footer.css';

function FooterSection() {
    return(
        <Container fluid='xxl' className="footer-div pt-5 wow fadeIn">
            <Container className="py-5 px-lg-5">
                <Row className="g-5 footer-row">
                    <Col lg={3} md={6}>
                        <h5 className="mb-4 GIn-heading">Get In Touch</h5>
                        <p className="p-tag mb-3"> <FaLocationDot className="GIn-icon me-2" />123 Street, New York, USA</p>
                        <p className="p-tag mb-3"> <FaPhone className="GIn-icon me-2"/>+012 345 67890</p>
                        <p className="p-tag mb-4"> <IoIosMail className="GIn-icon me-2"/>info@example.com</p>
                        <div className='icon-div pt-2 d-flex'>
                           <button className='GIn-socialM-icon me-3'><FaFacebookF /></button>
                           <button className='GIn-socialM-icon me-3'><BsTwitterX /></button>
                           <button className='GIn-socialM-icon me-3'><BsInstagram /></button>
                           <button className='GIn-socialM-icon'><FaLinkedinIn /></button>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <h5 className="mb-4 link-heading">Link</h5>
                        <p className="p-link"><MdOutlineKeyboardArrowRight className="right-arrow" /><Link to="/" className="linkS">Home</Link></p>
                        <p className="p-link"><MdOutlineKeyboardArrowRight className="right-arrow"/><Link to="/about" className="linkS">About Us</Link></p>
                        <p className="p-link"><MdOutlineKeyboardArrowRight className="right-arrow"/><Link to="/service" className="linkS">Service</Link></p>
                        <p className="p-link"><MdOutlineKeyboardArrowRight className="right-arrow"/><Link to="/project" className="linkS">Project</Link></p>
                        <p className="p-link"><MdOutlineKeyboardArrowRight className="right-arrow"/><Link to="/" className="linkS">Contact Us</Link></p>
                    </Col>
                    <Col lg={3} md={6}>
                       <h5 className="mb-4 link-heading">Gallery</h5>
                       <Row className="g-2">
                        <Col className='col-4'><img src={portfolio_1} alt="" className='img-fluid'/></Col>
                        <Col className='col-4'><img src={portfolio_2} alt="" className='img-fluid'/></Col>
                        <Col className='col-4'><img src={portfolio_3} alt="" className='img-fluid'/></Col>
                        <Col className='col-4'><img src={portfolio_4} alt="" className='img-fluid'/></Col>
                        <Col className='col-4'><img src={portfolio_5} alt="" className='img-fluid'/></Col>
                        <Col className='col-4'><img src={portfolio_6} alt="" className='img-fluid'/></Col>
                       </Row>
                    </Col>
                    <Col lg={3} md={6}>
                       <h5 className="mb-4 link-heading">Newsletter</h5>
                       <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                               <Form.Control type="email" placeholder="Enter Your Email" className="E-mail-bar" />
                               <a href="/"><FaPaperPlane className='F-send-icon'  /></a>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Container className='px-lg-5'>
                <div className='copyright'>
                    <Row>
                        <Col className='text-center md-3'>©Emergewiz,. All Right Reserved.</Col>
                    </Row>
                </div>
            </Container>
        </Container>
    ) 
}

export default FooterSection;