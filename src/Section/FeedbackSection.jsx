import '../CSS/Feedback.css'
import React from "react";
import { Container } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        content: 'EmergeWiz has completely transformed our business operations. Their innovative tools have streamlined our processes, saving us both time and money. The customer service is outstanding, and we couldnt be happier with the results.',
        author: 'Josephine Mary',
        profession: 'Team Director',
        path: './assets/team-2.jpg'
    },
    {
        id: 2,
        content: 'The software development team we worked with understood our unique needs and delivered a custom solution that exceeded our expectations. Their meticulous attention to detail and commitment to ensuring customer satisfaction distinguishes them from others. Im grateful for their expertise in helping us achieve our sales goals',
        author: 'David Kelvin',
        profession: 'Development Executive',
        path: './assets/team-1.jpg'
    },
    {
        id: 3,
        content: 'I approached EmergeWiz to help me bring my app idea to life, and Im so glad I did.Their team of designers listened to my vision and translated it into a sleek and user- friendly interface that exceeded my expectations.The apps design has received rave reviews from users, and I credit that to the expertise and creativity of EmergeWiz.',
        author: 'Client Name',
        profession: 'Profession',
        path: './assets/team-3.jpg'
    },
    {
        id: 4,
        content: ' I approached EmergeWiz to help me bring my app idea to life, and Im so glad I did.Their team of designers listened to my vision and translated it into a sleek and user- friendly interface that exceeded my expectations.The apps design has received rave reviews from users, and I credit that to the expertise and creativity of EmergeWiz.',
        author: 'Client Name',
        profession: 'Profession',
        path: './assets/team-1.jpg'
    },
];

const TestimonialCarousel = () => {
    return (
        <Container fluid="xxl" className=" py-5 my-5 wow fadeInUp">
              <div className='T-section-title position-relative text-center mb-5 pb-2 wow fadeInUp'>
                    <h6 className='title ps-4'>Testimonials</h6>
                    <h2 className='Team-sub-title'>Our Clients Thoughts</h2>
                </div>
            <Container className='px-lg-5 F-innerDiv text-center'>
                <Carousel>
                    {testimonials.map((testimonial) => (
                        <Carousel.Item key={testimonial.id}>
                            < Row className='justify-content-md-center' >
                                <Col xs={12} lg={5} className='position-relative' >
                                    <div className="testimonial-item" style={{ background: "#0aac47" }}>
                                        <img src={"../"+testimonial.path} className='img-fluid client_img' alt="testimonial-img" />
                                    </div>
                                </Col>
                                <Col xs={12} lg={5}>
                                    <div className="testimonial-item">
                                        <FaQuoteLeft className='quote_icon' />
                                        <p className='p-lh'>{testimonial.content}</p>
                                        <div>
                                            <h6>{testimonial.author}</h6 >
                                            <p className='prof'>{testimonial.profession}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    ))
                    }
                </Carousel>
            </Container>
        </Container>
    )
}

export default TestimonialCarousel;