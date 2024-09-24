import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Row, Col, Card } from "react-bootstrap";
import "../CSS/ServicePage.css";
import { FaPaperPlane } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import HeroSection from "./HeroSection";
import TeamSection from "./TeamSection";
import TestimonialCarousel from "./FeedbackSection";
import AccordionSection from "./AccordionSection";
import Myhelmet from "../Pages/Myhelmet";
import Newsletter from "./NewsletterSec";
import ContactPopup from "./ContactPopup";


function MobileService() {
  const { pathname } = useLocation();

  let mystyle={
    overFlow:"hidden !important",
    webKitLineClamp:"9",

  }
  // autoscroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  let accord = [
    {
      question: "What mobile app development services does EmergeWiz offer?",
      answer:
        "EmergeWiz offers native mobile app development, cross-platform app development, custom mobile app development, enterprise mobile solutions, and app maintenance and support.",
    },
    {
      question: "Do you provide app maintenance and support?",
      answer:
        "Yes, EmergeWiz provides ongoing app maintenance and support, which includes updates, bug fixes, and improvements to ensure optimal performance.",
    },
    {
      question: "What is the process for developing a mobile app at EmergeWiz?",
      answer:
        "Discovery and planning, design and prototyping, development and integration, testing and quality assurance, deployment and launch, and support and maintenance ongoing are included in the process.",
    },
    {
      question: "How are app updates and new features managed?",
      answer:
        "EmergeWiz provides ongoing support for app updates, incorporating new features, and making necessary amendments to keep the app current.",
    },
    {
      question: "What is the cost of developing a mobile app with EmergeWiz?",
      answer:
        "The cost depends on the app’s complexity and features. EmergeWiz provides competitive pricing and detailed quotes based on project requirements.",
    },
  ];
  let metas = {
    title: " Best Mobile App Development Company in Coimbatore",
    describe:
      "EmergeWiz, a trusted mobile app development company in Coimbatore. We build high-performance, bespoke mobile applications that align with your business goals.",
  };
  return (
    <div className="bg-white">
      <Myhelmet mymeta={metas} />
      <HeroSection option="mobile" />
      <Container fluid="xxl" className="service-div pb-5 wow fadeInUp">
        <Container className="px-lg-5 ">
          <div className="S-section-title position-relative text-center mb-3 pb-2 wow fadeInUp">
            <h2 className="Service-sub-title mt-5">
              Mobile App Development Company in Coimbatore
            </h2>
            <p className="mx-5 lh-base text-start mt-4">
              EmergeWiz is the best{" "}
              <b>mobile app development company in Coimbatore,</b> dedicated to
              creative app development for your business. Our main focus is to
              develop unique and qualitative mobile applications to meet the
              strategic needs of organizations in today’s competitive market.
              You deal with us on your specific business requirements and we use
              them to develop and deliver mobile applications that are not only
              functional, and scalable but also captivating to enable you to
              achieve a comprehensive digital transformation.
            </p>
            <p className="mx-5 lh-base text-start">
              At EmergeWiz, we have understood that an application is not just a
              utility but a unique business enabler that can revolutionize your
              company processes and customer interactions. That’s why our
              approach to application development is both comprehensive and
              client-focused. That's why we are communicating with you, finding
              out all the goals, issues, and opportunities, so each developed
              application is a perfect fit for your business.
            </p>

            <h2 className="Service-sub-title mt-5">
              Our Mobile App Development Services in Coimbatore
            </h2>

            <Row>
              <Col xs={12} md={6}>
                <p className="mycard mx-3 lh-base text-start mt-3">
                  <b>Native Mobile App Development:</b>We develop effective
                  native applications for iPhone and iPad as well as for
                  Android-based devices. We have experienced professionals using
                  relevant platform languages and tools like swift, Kotlin, Java
                  for building the top-notch performance and user-friendly apps.
                </p>
              </Col>
              <Col xs={12} md={6}>
                <p className="mycard mx-3 lh-base text-start mt-3">
                  <b>Cross-Platform App Development:</b> Here, for the
                  organizations who are interested in having presence in
                  multiple platforms, we provide cross platform app development
                  which involves frameworks such as Flutter and React Native.
                  From this approach, one benefits from a consistent look, which
                  practically cuts down on development time and money.
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <p className="mycard mx-3 lh-base text-start mt-3">
                  <b>Enterprise Mobile Solutions: </b> We deliver
                  business-to-employee and business-to-consumer mobility
                  solutions that drive efficiency, effectiveness and
                  satisfaction. All of our solutions are customizable, protected
                  by industry-standard layers of security, and built to
                  interface with any of your current systems.
                </p>
              </Col>
              <Col xs={12} md={6}>
                <p className="mycard mx-3 lh-base text-start mt-3">
                  <b>App Maintenance and Support:</b>
                  In addition to development, EmergeWiz provides services for
                  further support and maintenance and provides to your
                  application all the updates. Updates, bugs fixes, improvements
                  – new and better versions are regularly released to sustain
                  the perfect workflow of the app.
                </p>
              </Col>
            </Row>
          </div>
          <div>
            <Newsletter />
            <Container fluid="xxl" className="service-div py-5 wow fadeInUp">
              <Container className="px-lg-5">
                <div className="S-section-title position-relative text-center mb-5 pb-2 wow fadeInUp">
                  <h2 className="Service-sub-title">
                    Why Choose EmergeWiz for Mobile App development?
                  </h2>
                  <p className="mx-5 lh-base">
                    Choose EmergeWiz for mobile app development. We specialize
                    in creating high-performance apps for Android, iOS, and
                    Flutter, delivering clean, user-friendly designs and
                    ensuring a smooth experience across all platforms.
                  </p>
                </div>

                <Row className="g-4 equal-cols myweb text-start">
                  <Col
                    lg={4}
                    md={6}
                    className=" animated wow zoomIn SEO-Optimization"
                    data-wow-delay="0.3s"
                  >
                    <Card className="service-item ">
                      <Card.Body className="card-body">
                        <Card.Title className="mb-3">
                          Experienced Team of Experts
                        </Card.Title>
                        <Card.Text style={{mystyle}}>
                          Our team of talented and proficient developers,
                          designers, and project managers in our Mobile
                          Application Development Company Coimbatore has many
                          years of experience in developing mobile applications
                          across various industries such as healthcare,
                          e-commerce, financial, education, and more.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col
                    lg={4}
                    md={6}
                    className=" animated wow zoomIn SEO-Optimization"
                    data-wow-delay="0.6s"
                  >
                    <Card className="service-item">
                      <Card.Body className="card-body">
                        <Card.Title className="mb-3">
                          Client-Centric Approach
                        </Card.Title>
                        <Card.Text style={{mystyle}}>
                          At EmergeWiz, the main focus is always the client, We
                          are focused on the client's needs, meaning each app to
                          be created corresponds to your expectations and
                          generates effective outcomes. Our mobile app
                          development in Coimbatore is designed to provide you
                          with the services that you are looking for and much
                          more.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col
                    lg={4}
                    md={6}
                    className=" animated wow zoomIn SEO-Optimization"
                    data-wow-delay="0.1s"
                  >
                    <Card className="service-item">
                      <Card.Body className="card-body">
                        <Card.Title className="mb-3">
                          Focus on Quality and Innovation
                        </Card.Title>
                        <Card.Text style={{mystyle}}>
                          This has always been a primary consideration for DMH
                          and all that it does. Our goal is to provide
                          high-quality applications intuitive but also unique
                          and sustainable. Our team is aware of the ongoing
                          trends and technologies of Mobile application
                          development in Coimbatore so that we can offer
                          innovative solutions
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
        </Container>
      </Container>
      <TeamSection />
      <TestimonialCarousel />
      <AccordionSection faq={accord} />
      <ContactPopup />
      <Newsletter />
    
    </div>
  );
}

export default MobileService;
