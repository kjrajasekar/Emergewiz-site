import React from 'react';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import '../CSS/ProjectPage.css'
import ContactSection from '../Section/ContactSection';

function ContactPage() {
    return (
        <div className="bg-white">
            <Container fluid="xxl" className="projectPage_div py-5 mb-5">
                <Container className="my-5 py-5 px-lg-5">
                    <Row className="g-5 py-5">
                        <Col className="text-center">
                            <h1 className="text-white animated zoomIn project-page-heading">Contact Us </h1>
                            <hr className="heading-bt-line" />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <ContactSection />
        </div>
    )
}

export default ContactPage;