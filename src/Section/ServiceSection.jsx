import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';


function ServiceSection() {
    return (
        <Container fluid="xxl" className='service-div py-5 wow fadeInUp'>
            <Container className='px-lg-5'>
                <div className='S-section-title position-relative text-center mb-5 pb-2 wow fadeInUp'>
                    <h2 className='Service-sub-title'>What Solutions We Provide</h2>
                    <p className='m-4 p-lh' >
                        An innovative IT company specializing in website development, digital marketing, mobile app creation, graphic design. Transform your online presence and reach new heights with our comprehensive, expert services.
                    </p>
                </div>
                <Row className='g-4 equal-cols'>
                    <Col lg={4} md={6} className=' animated wow zoomIn SEO-Optimization' data-wow-delay="0.3s">
                        <Card className='service-item '>
                            <Card.Body className='card-body'>
                                <div className='service-img'><FaHome className='service-icon' /></div>
                                <Card.Title className='mb-3'>Web Development </Card.Title>
                                <Card.Text  >
                                    Accelerate Your Business Transformation with Our Comprehensive Web Development Services.
                                </Card.Text>
                                <Link to="/service/web"><Button className='rad-mor  '>Read More</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} className=' animated wow zoomIn SEO-Optimization' data-wow-delay="0.6s">
                        <Card className='service-item'>
                            <Card.Body className='card-body'>
                                <div className='service-img'>
                                    <FaHome className='service-icon' />
                                </div>
                                <Card.Title className='mb-3'>Mobile App development</Card.Title>
                                <Card.Text  >
                                    Developing high-performance  apps tailored to your business needs, drive user engagement and foster connections with customers.
                                </Card.Text>
                                <Link to="/service/web"><Button className='rad-mor '>Read More</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} className=' animated wow zoomIn SEO-Optimization' data-wow-delay="0.1s">
                        <Card className='service-item'>
                            <Card.Body className='card-body'>
                                <div className='service-img'><FaHome className='service-icon' /></div>
                                <Card.Title className='mb-3'>UI/UX designing</Card.Title>
                                <Card.Text  >
                                    We have a team of skilled designers who design intuitive interfaces that elevate user experiences and deliver outstanding results.
                                </Card.Text>
                                <Link to="/service/web"><Button className='rad-mor '>Read More</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} className=' animated wow zoomIn SEO-Optimization' >
                        <Card className='service-item pb-3' data-wow-delay="0.1s">
                            <Card.Body className='card-body'>
                                <div className='service-img'><FaHome className='service-icon' /></div>
                                <Card.Title className='mb-3'>Software Testing</Card.Title>
                                <Card.Text >
                                    Our team of experts excels in testing, meticulously identifying & resolving potential issues to ensure robust, reliable applications
                                </Card.Text>
                                <Button className='rad-mor '>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} className=' animated wow zoomIn SEO-Optimization' data-wow-delay="0.3s">
                        <Card className='service-item'>
                            <Card.Body className='card-body'>
                                <div className='service-img'><FaHome className='service-icon' /></div>
                                <Card.Title className='mb-3'>Wordpress Development </Card.Title>
                                <Card.Text>
                                    Empower your online business visibility with innovative WordPress solutions from seasoned developers.
                                </Card.Text>
                                <Button className='rad-mor  '>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} className='animated wow zoomIn SEO-Optimization' data-wow-delay="0.6s">
                        <Card className='service-item'>
                            <Card.Body className='card-body'>
                                <div className='service-img'><FaHome className='service-icon' /></div>
                                <Card.Title className='mb-3'>Digital Marketing</Card.Title>
                                <Card.Text>
                                    Transform your business's online presence with our personalized digital marketing strategies and services.
                                </Card.Text>
                                <Button className='rad-mor '>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default ServiceSection;