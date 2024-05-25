
import { Row, Col } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import React from 'react';
import '../CSS/About.css';


function HireTrainerSection() {

    return (
        <Container fluid="xxl" className="hire-div py-5 my-5 wow fadeInUp">
            <Container className='px-lg-5 F-innerDiv'>
                <div className='S-section-title position-relative text-center mb-2 pb-2 wow fadeInUp'>
                    <h2 className='Service-sub-title text-white'>Hire Trainer</h2>
                    <p className='text-white mt-5 lh-base text-start'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                </div>

                <Row className='gx-5'>
                    <Col xs={12} md={6} className=' '>
                        <div className="hire-item hire-bg-image">
                            <div>
                                <h4 className='prof text-center text-md-start my-3'>For Collages</h4>
                                <p className='prof '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                  
                            </div>
                            <div class="row ms-5 mt-5">
                                <button class="mybtn">
                                    <span class="text">Get a Quote </span>
                                    <span class="circle">
                                        <span class="arrow">
                                        </span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className=' '>
                        <div className="hire-item hire-bg-image">
                            <div>
                                <h4 className='prof text-center text-md-start my-3'>For Corporates</h4>
                                <p className='prof '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                            </div>
                            <div class="row ms-5 mt-5">
                                <button class="mybtn">
                                    <span class="text">Get a Quote </span>
                                    <span class="circle">
                                        <span class="arrow">
                                        </span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default HireTrainerSection;
