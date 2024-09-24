import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactSection from '../Section/ContactSection';
import Myhelmet from "./Myhelmet";

function ContactPage() {
    const { pathname } = useLocation();

    // autoscroll to top
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    let metas={
        title : "Best Web Development Company in Coimbatore",
    describe: "Looking for the best web development company in Coimbatore? We deliver innovative, custom web solutions with a focus on quality and client satisfaction."
      }
    return (
        <div className="bg-white">
            <Myhelmet mymeta={metas} />
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