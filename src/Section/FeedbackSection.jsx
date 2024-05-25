import '../CSS/Feedback.css'
import React from "react";
import { Container } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaQuoteLeft } from "react-icons/fa";
import testimonial_img from '../Images/testimonial-1.jpg';
import testimonial_img2 from '../Images/testimonial-2.jpg';
import testimonial_img3 from '../Images/testimonial-3.jpg';

const testimonials = [
    {
        id: 1,
        content: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
        author: 'Client Name',
        profession: 'Profession',
    },
    {
        id: 2,
        content: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
        author: 'Client Name',
        profession: 'Profession',
    },
    {
        id: 3,
        content: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
        author: 'Client Name',
        profession: 'Profession',
    },
];

const TestimonialCarousel = () => {
    return (
        <Container fluid="xxl" className=" py-5 my-5 wow fadeInUp">
              <div className='T-section-title position-relative text-center mb-5 pb-2 wow fadeInUp'>
                    <h6 className='title ps-4'>Testimonials</h6>
                    <h2 className='Team-sub-title'>Our Clients Thoughts</h2>
                </div>
            <Container className='px-lg-5 F-innerDiv'>
                <Carousel>
                    {testimonials.map((testimonial) => (
                        <Carousel.Item key={testimonial.id}>
                            <Row>
                                <Col>
                                    <div className="testimonial-item">
                                        <FaQuoteLeft className='quote_icon' />
                                        <p>{testimonial.content}</p>
                                        <div>
                                            {/* <img src={testimonial_img} className='client_img' alt="testimonial-img" /> */}
                                            <h6>{testimonial.author}</h6>
                                            <p className='prof'>{testimonial.profession}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="testimonial-item">
                                        <FaQuoteLeft className='quote_icon' />
                                        <p>{testimonial.content}</p>
                                        <div>
                                            {/* <img src={testimonial_img2} className='client_img' alt="testimonial-img" /> */}
                                            <h6>{testimonial.author}</h6>
                                            <p className='prof'>{testimonial.profession}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="testimonial-item">
                                        <FaQuoteLeft className='quote_icon' />
                                        <p>{testimonial.content}</p>
                                        <div>
                                            {/* <img src={testimonial_img3} className='client_img' alt="testimonial-img" /> */}
                                            <h6>{testimonial.author}</h6>
                                            <p className='prof'>{testimonial.profession}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </Container>
    )
}

export default TestimonialCarousel;