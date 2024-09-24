import { Container,Row,Col,Form } from "react-bootstrap";
import { FaLocationDot,FaLinkedinIn,FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF,FaPaperPlane } from "react-icons/fa";
import { BsTwitterX,BsInstagram } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Footer.css";

function FooterSection() {
  return (
    <Container fluid="xxl" className="footer-div pt-3 wow fadeIn">
      <Container className="py-5 px-lg-5">
        <Row className="g-5 footer-row">
        <Col lg={1} >
        </Col>
          <Col lg={2} xs={12}>
            <h5 className="mb-4 link-heading">Company</h5>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/" className="linkS">
                Home
              </Link>
            </p>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/about" className="linkS">
                About Us
              </Link>
            </p>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/service" className="linkS">
                Service
              </Link>
            </p>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/project" className="linkS">
                Project
              </Link>
            </p>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/career" className="linkS">
                Career
              </Link>
            </p>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/contact" className="linkS">
                Blogs
              </Link>
            </p>
          </Col>
          <Col lg={5} xs={12}>
            <h5 className="mb-4 link-heading">Technologies</h5>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/service/web" className="linkS">
                Web Development
              </Link>
            </p>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/service/mobile" className="linkS">
                App  Development
              </Link>
            </p>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/service" className="linkS">
                Software Testing 
              </Link>
            </p>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/service" className="linkS">
                Digital Marketing
              </Link>
            </p>
            <p className="p-link">
              <MdOutlineKeyboardArrowRight className="right-arrow" />
              <Link to="/contact" className="linkS">
                Graphics Designing
              </Link>
            </p>
          </Col>
             
       

          <Col lg={4} xs={12}>
            <h5 className="mb-4 GIn-heading">Get In Touch</h5>
            <p className="p-tag mb-3">
              <Row>
                <Col xs={1}>
                  <FaLocationDot className="GIn-icon me-2" />
                </Col>
                <Col xs={11}>
                  {" "}
                  287/3, Standard Towers,
                  <br />
                  Avinashi Main Road, Peelamedu, <br />
                  Coimbatore - 641 004
                </Col>
              </Row>
            </p>
            <p className="p-tag mb-3">
              <Row>
                <Col xs={1}>
                  <FaPhone className="GIn-icon me-2" />
                </Col>
                <Col xs={11}>+91- 98 40 64 26 67 </Col>
              </Row>
            </p>
            <p className="p-tag mb-4">
              <Row>
                <Col xs={1}>
                  <IoIosMail className="GIn-icon me-2" />
                </Col>
                <Col xs={11}>contact@emergewiz.com </Col>
              </Row>
            </p>

            <div className="icon-div pt-2 d-flex">
              <button className="GIn-socialM-icon me-3">
                <FaFacebookF />
              </button>
              <button className="GIn-socialM-icon me-3">
                <BsTwitterX />
              </button>
              <button className="GIn-socialM-icon me-3">
                <BsInstagram />
              </button>
              <button className="GIn-socialM-icon">
                <FaLinkedinIn />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="px-lg-5">
        <div className="copyright">
          <Row>
         <Link className="brand-link ml-2"> Terms & Conditions </Link>  &nbsp; |   &nbsp;
         <Link className="brand-link ml-2">Refund Policy </Link>  &nbsp; |   &nbsp;
         <Link className="brand-link ml-2"> Privacy Policy </Link>  &nbsp; |   &nbsp;
         <Link className="brand-link ml-2"> Delivery & Shipping</Link>  &nbsp; |   &nbsp;
         <Link className="brand-link ml-2">Disclaimer</Link>  &nbsp;  
            <Col className="text-center md-3">
              ©Emergewiz,. All Right Reserved.
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default FooterSection;
