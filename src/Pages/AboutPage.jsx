import { Container } from "react-bootstrap";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FeedbackSection from "../Section/FeedbackSection";
import CountUp from "react-countup";
import HeroSection from "../Section/HeroSection";
import Myhelmet from "./Myhelmet";
import Newsletter from "../Section/NewsletterSec";
import ContactPopup from "../Section/ContactPopup";

function AboutPage() {
  const { pathname } = useLocation();

  // autoscroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  let metas = {
    title: "Best Web Development Company in Coimbatore",
    describe:
      "Looking for the best web development company in Coimbatore? We deliver innovative, custom web solutions with a focus on quality and client satisfaction.",
  };
  return (
    <div className="bg-white">
      <Myhelmet mymeta={metas} />
      <HeroSection option="about" />
      <Container fluid="xxl" className="service-div pb-5 wow fadeInUp">
        <Container className="px-lg-5 ">
          <div className="S-section-title position-relative text-center mb-3 pb-2 wow fadeInUp">
            <h2 className="Service-sub-title mt-5">WHO WE ARE</h2>
            <p className="mx-5 p-lh">
              EmergeWiz is a forward-thinking digital agency that specializes in
              crafting innovative and customized solutions tailored to the
              unique needs of every business we partner with. Our diverse
              services include web design, web development, digital marketing,
              WordPress development, and custom software development.
            </p>
            <p className="mx-5 p-lh">
              Our team of skilled professionals is dedicated to delivering
              exceptional results, ensuring that each project meets and
              surpasses client expectations. With a client-focused approach, we
              prioritize building long-term relationships and fostering
              sustainable growth At EmergeWiz, we are committed to helping your
              business succeed and stand out in the ever-evolving digital
              landscape.
            </p>

            <h2 className="Service-sub-title mt-5">What We Do</h2>
            <p className="mx-5 p-lh">
              At EmergeWiz, we do more than just offer basic digital services.
              We provide solutions that are carefully designed to fit right into
              your business. We aim to help you automate tasks, boost your
              online presence, and achieve lasting success. From custom software
              development to smart digital marketing, we’re here to help your
              business reach its full potential and thrive in today’s fast-paced
              world.
            </p>

            <Row className="service-count g-4 text-center mt-5">
              <Col
                lg={3}
                md={6}
                className=" animated wow zoomIn SEO-Optimization"
              >
                <h1>
                  <CountUp
                    className=""
                    start={100}
                    end={1500}
                    duration={15}
                    useEasing={true}
                    separator=","
                  />{" "}
                  +<h2>Clients</h2>
                </h1>
              </Col>
              <Col
                lg={3}
                md={6}
                className=" animated wow zoomIn SEO-Optimization"
                data-wow-delay="0.3s"
              >
                <h1>
                  <CountUp
                    className=""
                    start={0}
                    end={500}
                    duration={15}
                    useEasing={true}
                    separator=","
                  />{" "}
                  +<h2>Projects</h2>
                </h1>
              </Col>
              <Col
                lg={3}
                md={6}
                className=" animated wow zoomIn SEO-Optimization"
                data-wow-delay="0.6s"
              >
                <h1>
                  <CountUp
                    className=""
                    start={0}
                    end={50}
                    duration={15}
                    useEasing={true}
                    separator=","
                  />
                  +<h2>Staffs</h2>
                </h1>
              </Col>
              <Col
                lg={3}
                md={6}
                className=" animated wow zoomIn SEO-Optimization"
                data-wow-delay="0.6s"
              >
                <h1>
                  <CountUp
                    className=""
                    start={0}
                    end={3}
                    duration={15}
                    useEasing={true}
                    separator=","
                  />
                  +<h2>Branches</h2>
                </h1>
              </Col>
            </Row>

            <h2 className="Service-sub-title mt-5">Why Choose Us ?</h2>
            <p className="m-4  p-lh">
              Choosing EmergeWiz means choosing a partner who truly understands
              your business needs. We combine our expertise with a commitment to
              delivering solutions that work for you. Our team is passionate
              about driving your success, offering clear communication, reliable
              service, and results you can count on.
            </p>
            <p className="mx-4 p-lh">
              We focus on building strong, lasting relationships and helping
              your business grow with the right digital strategies. With
              EmergeWiz, you get more than just a service provider—you get a
              dedicated team invested in your success.
            </p>
          </div>
        </Container>
      </Container>
      <FeedbackSection />
      <ContactPopup />
      <Newsletter />
    </div>
  );
}

export default AboutPage;
