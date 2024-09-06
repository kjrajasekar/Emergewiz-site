import { Container } from "react-bootstrap";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../CSS/AboutPage.css";
import FeedbackSection from "../Section/FeedbackSection";
import CountUp from "react-countup";
import Form from 'react-bootstrap/Form';
import { FaPaperPlane } from "react-icons/fa";
import newsletter from '../Images/newsletter.png';
import HeroSection from "../Section/HeroSection";
import Myhelmet from "./Myhelmet";


function AboutPage() {
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
          {/* <Container fluid="xxl" className='Hero_div py-5 mb-5'>
      <Container className='mt-4 pt-4   hero-header'>
        <Row className='g-5 py-5'>
          <Col className='text-col text-center text-lg-start'>
            <h1 className='hero-heading mb-4 zoomIn animated'>
            Transforming Ideas into Extraordinary Digital Solutions</h1>
            <p className='hero-sub zoomIn   animated'>
            End-to-end software development, from innovative application creation to strategic digital marketing, driving your business forward.
            </p>
           

            <Link to="/contact"  ><Button className='Quote-Button py-sm-3 px-sm-5 slideInLeft animated' variant="outline-light">
              Free Quote</Button>{' '}</Link>
            <Link to="/contact"  ><Button className='Contact-Button py-sm-3 px-sm-5 slideInRight animated' variant="outline-light">
              Contact Us
            </Button>{' '}</Link>
          </Col>
          <Col className='img-col text-center text-lg-start'><img src={hero} alt="" className='Hero-img img-fluid' /></Col>
        </Row>
      </Container>
    </Container> */}
    <HeroSection option="about" />
    <Container fluid="xxl" className='service-div pb-5 wow fadeInUp' >
      <Container className='px-lg-5 ' >
        <div className='S-section-title position-relative text-center mb-3 pb-2 wow fadeInUp'>

          <h2 className='Service-sub-title mt-5'>WHO WE ARE</h2>
          <p className='mx-5 lh-base'>
          EmergeWiz is a forward-thinking digital agency that specializes in crafting innovative and customized solutions tailored to the unique needs of every business we partner with. Our diverse services include web design, web development, digital marketing, WordPress development, and custom software development.
          </p>
          <p className='mx-5 lh-base'>
          Our team of skilled professionals is dedicated to delivering exceptional results, ensuring that each project meets and surpasses client expectations. With a client-focused approach, we prioritize building long-term relationships and fostering sustainable growth At EmergeWiz, we are committed to helping your business succeed and stand out in the ever-evolving digital landscape.
          </p>
     
        <h2 className='Service-sub-title mt-5'>What We Do</h2>
          <p className='mx-5 lh-base'>
          At EmergeWiz, we do more than just offer basic digital services. We provide solutions that are carefully designed to fit right into your business. We aim to help you automate tasks, boost your online presence, and achieve lasting success. From custom software development to smart digital marketing, we’re here to help your business reach its full potential and thrive in today’s fast-paced world.
           </p>
        {/* </div> */}
        <Row className='service-count g-4 text-center mt-5'>
          <Col lg={3} md={6} className=' animated wow zoomIn SEO-Optimization' >
            <h1>
              <CountUp
                className=""
                start={100}
                end={1500}
                duration={15}
                useEasing={true}
                separator=","
              /> +
              <h2>Clients</h2>
            </h1>

          </Col>
          <Col lg={3} md={6} className=' animated wow zoomIn SEO-Optimization' data-wow-delay="0.3s">
            <h1>
              <CountUp
                className=""
                start={0}
                end={500}
                duration={15}
                useEasing={true}
                separator=","
              /> +
              <h2>Projects</h2>
            </h1>
          </Col>
          <Col lg={3} md={6} className=' animated wow zoomIn SEO-Optimization' data-wow-delay="0.6s">
            <h1>
               <CountUp
                className=""
                start={0}
                end={50}
                duration={15}
                useEasing={true}
                separator=","
              />+
              <h2>Staffs</h2>
            </h1>
          </Col>
          <Col lg={3} md={6} className=' animated wow zoomIn SEO-Optimization' data-wow-delay="0.6s">
            <h1>
               <CountUp
                className=""
                start={0}
                end={3}
                duration={15}
                useEasing={true}
                separator=","
              />+
              <h2>Branches</h2>
            </h1>
          </Col>

        </Row>
        {/* <div> */}
        <h2 className='Service-sub-title mt-5'>Why Choose Us ?</h2>
          <p className='mx-5 lh-base'>
          Choosing EmergeWiz means choosing a partner who truly understands your business needs. We combine our expertise with a commitment to delivering solutions that work for you. Our team is passionate about driving your success, offering clear communication, reliable service, and results you can count on. 
           </p>
          <p className='mx-5 lh-base'>
          We focus on building strong, lasting relationships and helping your business grow with the right digital strategies. With EmergeWiz, you get more than just a service provider—you get a dedicated team invested in your success.
           </p>
        </div>
      </Container>
    </Container>

    <Container fluid="xxl" className='Newsletter-div my-3 wow fadeInUp' data-wow-delay="0.1s">
            <Container className='inner-div px-lg-5'>
                <Row className='Newsletter-row'>
                    <Col className='  col-lg-6 heading'>
                        <h3>Get Ahead with EmergeWiz
                        </h3>
                        <p className='sub-title'>We provide creative solutions and effective marketing strategies designed to keep you ahead of your competitors.  Start Your Project with Us.</p>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Enter Your Email" className="E-mail-bar" />
                               <a href="#home"><FaPaperPlane className='send-icon'  /></a>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col className='col-lg-6 text-center mb-n5 d-none d-md-block'><img src={newsletter} alt="newsletter-img" className='newsletter-img mt-5' /></Col>
                </Row>
            </Container>
        </Container>
      {/* <AboutSection />
      <Newsletter />*/}
      <FeedbackSection /> 
    </div>
  );
}

export default AboutPage;
