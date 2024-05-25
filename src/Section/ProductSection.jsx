import React from "react";
import '../CSS/Team.css';
import { Container } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";
import smartstorez  from'./../Images/newsletter.png'
import logistics  from'./../Images/newsletter.png'
function ProductSection() {
    return (
        <Container fluid="xxl" className="products  py-3  wow fadeInUp">
            <Container className='px-lg-5 F-innerDiv'>
                <div className='S-section-title position-relative text-center mb-2 pb-2 wow fadeInUp'>
                    <h2 className='Service-sub-title '>Our Products</h2>
                    <p className=' mx-3 mt-3 lh-base text-start'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                </div>

                <Row className="product-section gx-5">
                    <Col xs={12} md={6} className=' '>
                        <div className="hire-item ">
                            <div className=" text-center">
                                <img src={smartstorez} alt="smartstorez" className="w-75" />
                                <h4 className='text-center'>Smartstorez</h4>
                                <p className="m-3"  >
                                    Our tech masters create end to end e-commerce solutions with
                                    customized design which allows your customers to buy products in
                                    an hassle-free way. Our open cart builds are integrated with
                                    remarkable payment interface, navigable web page that gives an
                                    easy to navigate store front.</p>
                            </div>
                            <div class="row  justify-content-center ">
                                {/* <button class="mybtn"> */}
                                    <span > Get a Quote <FaArrowRight /> </span>
                                    {/* <span class="circle">
                                        <span class="arrow">
                                        </span>
                                    </span>
                                </button> */}
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className=' '>
                        <div className="hire-item  ">
                        <div className=" text-center">
                                <img src={logistics} alt="smartstorez" className="w-75" />
                                <h4 className='text-center'>Logistics</h4>
                                <p className="m-3" > Our tech masters create end to end e-commerce solutions with
                                    customized design which allows your customers to buy products in
                                    an hassle-free way. Our open cart builds are integrated with
                                    remarkable payment interface, navigable web page that gives an
                                    easy to navigate store front.</p>
                                    
                                    </div>
                                    <div class="row  justify-content-center ">
                                {/* <button class="mybtn"> */}
                                    <span > Get a Quote <FaArrowRight /> </span>
                                    {/* <span class="circle"> */}
                                        {/* <span class="arrow">
                                        </span>
                                    </span> */}
                                {/* </button> */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default ProductSection;