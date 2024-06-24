import React from "react";
import '../CSS/Team.css';
import { Container } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { IoMdMail, } from "react-icons/io";
import logistics from './../Images/newsletter.png'

function ContactSection() {
    return (
        <Container fluid="xxl" className="products  py-3  wow fadeInUp">
            <Container className='px-lg-5 F-innerDiv'>
                <div className='S-section-title position-relative text-center mb-2 pb-2 wow fadeInUp'>
                    <h2 className='Service-sub-title '>Get in Touch with us</h2>
                    <p className=' mx-3 mt-3 lh-base text-center'>
                        We’d love to hear from you! Send us a question or comment below and we’ll get in touch with you shortly!
                    </p>
                </div>

                <Row className="product-section gx-5">
                    <Col xs={12} md={6} className=' '>
                        <div className="hire-item  ">
                            <div className="container text-start">
                                <h3>Phone</h3>
                                <FaPhone />
                                <span className="m-3"  >
                                    +91-9043494941
                                </span>
                            </div>

                            <div className="container text-start my-3">
                                <h3>Email</h3>
                                <IoMdMail />
                                <span className="m-3"  >
                                    contact@emergewiz.com
                                </span>
                            </div>
                            <div className="container text-start my-3">
                                <h3>Location </h3>
                                <FaLocationArrow />
                                <span className="m-3"  >
                                    No – 287/3, Standard Towers,
                                    Near Fun Republic Mall,
                                    Avinashi main road, Peelamedu,
                                    Coimbatore – 641 004.
                                </span>
                            </div>
                            <div class="row  justify-content-center ">



                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className=' '>
                        {/* <div className="hire-item  ">
                            <div className=" text-center">
                                <img src={logistics} alt="smartstorez" className="w-75" />
                                <h4 className='text-center'>Logistics</h4>
                                <p className="m-3" >
                                    Logistics services designed to optimize your supply chain and streamline operations. Our offerings include secure warehousing solutions for efficient inventory management, real-time tracking of stock levels, and timely order fulfillment services. We ensure reliable transportation options and handle customs clearance seamlessly, facilitating smooth import and export processes.</p>

                            </div>
                            <div class="row  justify-content-center ">



                            </div>
                        </div> */}
                    </Col>
                </Row>
                <Row>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1164.2878753881016!2d77.0114269624909!3d11.024967535152522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858d6984f4bb7%3A0x4eb0f5060c1a4719!2sNschool%20Academy!5e0!3m2!1sen!2sin!4v1719034096955!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Row>
            </Container >
        </Container >
    )
}

export default ContactSection;