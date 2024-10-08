import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ServiceSection from "../Section/ServiceSection";
import Newsletter from "../Section/NewsletterSec";
import ContactPopup from "../Section/ContactPopup";

function ServicePage() {
  const { pathname } = useLocation();

  // autoscroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-white">
      <Container fluid="xxl" className="servicePage_div py-5 mb-5">
        <Container className="my-5 py-5 px-lg-5">
          <Row className="g-5 py-5">
            <Col className="text-center">
              <h1 className="text-white animated zoomIn service-page-heading">
                Service
              </h1>
              <hr className="heading-bt-line" />
            </Col>
          </Row>
        </Container>
      </Container>
      <ServiceSection />
      <ContactPopup />
      <Newsletter />
    </div>
  );
}

export default ServicePage;
