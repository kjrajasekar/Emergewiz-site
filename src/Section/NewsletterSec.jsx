import React from 'react';
import '../CSS/Newsletter.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";
import newsletter from '../Images/newsletter.png';

function Newsletter() {
    return (
        <Container fluid="xxl" className='Newsletter-div my-3 wow fadeInUp' data-wow-delay="0.1s">
            <Container className='inner-div px-lg-5'>
                <Row className='Newsletter-row'>
                    <Col className='col-12 col-lg-6 heading'>
                        <h3>Ready to get started</h3>
                        <p className='sub-title'>Let's turn your ideas into reality today!.</p>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Enter Your Email" className="E-mail-bar" />
                               <a href="#home"><FaPaperPlane className='send-icon'  /></a>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col className='col-lg-6 text-center mb-n5 d-none d-md-block'><img src={newsletter} alt="newsletter-img" className='newsletter-img mt-5' /></Col>
                </Row>
            </Container>
        </Container>
    )
}
export default Newsletter;