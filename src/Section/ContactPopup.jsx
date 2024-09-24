import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp  } from "react-icons/fa6";

function ContactPopup() {
  return (
    <Container fluid="xxl" className=" wow fadeInUp">
      <Container className="px-lg-5 F-innerDiv bg-light">
        <div className="S-section-title position-relative text-center  wow fadeInUp p-3">
          <h4 className="Service-sub-title pt-4">
            Do you have an idea in mind? Talk to one of our experts now!
          </h4>
          <p className="  p-lh text-center my-3">
            To keep your project ideas confidential, We strictly follow NDA and
            IPR agreements for our valuable clients.
          </p>
        </div>
        <Row className=" equal-cols text-start pb-5 ">
          <Col xs={12} lg={6} onClick={() => window.location = 'mailto:contact@emergewiz.com'}>
            <Row className="  bg-white w-75 shadow  bg-body rounded align-self-center ">
              <Col xs={12}  lg={3}className="px-3 align-self-center text-center">
                <IoMdMail  className="ic-size cl-prime"  />
              </Col>
              <Col xs={12} lg={9} className="align-self-center  text-center text-lg-start">
                <h5 className="m-0 cl-prime p-lh">contact@emergewiz.com</h5>
                <p className=" m-0 cl-prime p-lh ">Send Mail to us</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={6}  onClick={() => window.location = 'https://web.whatsapp.com/send?phone=919840642667&amp;text=Hi'}>
            <Row className="   bg-white w-75 shadow  bg-body rounded align-self-center mt-2 mt-lg-0">
              <Col xs={12} lg={3} className="px-3 align-self-center text-center">
                <FaWhatsapp  className="ic-size cl-prime" />
              </Col>
              <Col xs={12} lg={9} className="align-self-center py-4 text-center text-lg-start">
                <h5 className="m-0 cl-prime p-lh">+91- 98 40 64 26 67 (IND)</h5>
                <p className="m-0 cl-prime p-lh">WhatsApp your Query</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactPopup;
