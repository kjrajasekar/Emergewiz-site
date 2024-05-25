import React from 'react';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../CSS/ServicePage.css'
import ServiceSection from '../Section/ServiceSection';


function ServicePage() {
    return(
        <div className="bg-white">
            <Container fluid="xxl" className="servicePage_div py-5 mb-5">
                <Container className="my-5 py-5 px-lg-5">
                    <Row className="g-5 py-5">
                        <Col className="text-center">
                           <h1 className="text-white animated zoomIn service-page-heading">Service</h1>
                           <hr className="heading-bt-line"/>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <ServiceSection/>

        </div>
    )
}

export default ServicePage;