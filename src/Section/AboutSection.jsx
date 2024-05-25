
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import '../CSS/Service.css'
import CountUp from "react-countup";

function AboutSection() {
  return (
    <Container fluid="xxl" className='service-div pb-5 wow fadeInUp' >
      <Container className='px-lg-5 ' >
        <div className='S-section-title position-relative text-center mb-3 pb-2 wow fadeInUp'>

          <h2 className='Service-sub-title'>WHO WE ARE</h2>
          <p className='mx-5 lh-base'>
            Our solutions offer a real-time platform with clean designs and indulging an array of high-end technology tools and techniques with flexibility and ease.
            Our solutions offer a real-time platform with clean designs and indulging an array of high-end technology tools and techniques with flexibility and ease.
          </p>
        </div>

        <Row className='service-count g-4 text-center'>
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
      </Container>
    </Container>
  );
};

export default AboutSection;
