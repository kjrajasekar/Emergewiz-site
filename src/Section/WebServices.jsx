import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Row, Col, Card } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import HeroSection from "./HeroSection";
import newsletter from "../Images/newsletter.png";
import TeamSection from "./TeamSection";
import TestimonialCarousel from "./FeedbackSection";
import AccordionSection from "./AccordionSection";
import Myhelmet from "../Pages/Myhelmet";
import Newsletter from "./NewsletterSec";
import ContactPopup from "./ContactPopup";

function WebServices() {
  const { pathname } = useLocation();

  // autoscroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  let accord = [
    {
      question: "What services does EmergeWiz offer?",
      answer:
        "EmergeWiz offers internet marketing, e-commerce solutions, custom website design and development, and mobile website design.",
    },
    {
      question:
        "Why should I choose EmergeWiz for web development in Coimbatore?",
      answer:
        "EmergeWiz is known for its expertise, experience, innovative designs, responsive development, and affordable quality services.",
    },
    {
      question:
        "How much time is generally required for a website to be developed?",
      answer:
        "The timeline varies based on the project's complexity. EmergeWiz works efficiently to deliver projects on time.",
    },
    {
      question: "Do you offer website redesign services?",
      answer:
        "Yes, EmergeWiz provides website redesign services to update and improve existing websites.",
    },
    {
      question: "Do you offer e-commerce website development?",
      answer:
        "Yes, EmergeWiz offers comprehensive e-commerce solutions to help businesses sell their products and services online.",
    },
  ];

  let metas = {
    title: "Best Web Development Company in Coimbatore",
    describe:
      "We are a leading website design, web development, and digital marketing company based in Coimbatore, offering comprehensive services to enhance your online presence.",
  };
  return (
    <div className="bg-white">
      <Myhelmet mymeta={metas} />
      <HeroSection option="web" />
      <Container fluid="xxl" className="service-div pb-5 wow fadeInUp">
        <Container className="px-lg-5 ">
          <div className="S-section-title position-relative text-center mb-3 pb-2 wow fadeInUp">
            <h2 className="Service-sub-title mt-5">
              Web development company in Coimbatore
            </h2>
            <p className="mx-5 p-lh text-start mt-4">
              EmergeWiz is a top <b>web development company in Coimbatore,</b>{" "}
              offering exceptional web development solutions designed to elevate
              your business. Our services include custom website design and
              development, e-commerce solutions, mobile website design, and
              internet marketing. Having implemented all of the latest
              technologies we are confident that your website will have great
              usability. We employ some of the most experienced and professional
              designers and developers who offer attractive, well-structured,
              and optimized web pages in line with the client’s requirements and
              financial capacity. At EmergeWiz, we work on the development of
              responsive, informative, and conversion-focused websites for
              affordable prices.
            </p>
            <p className="mx-5 p-lh text-start">
              We have a team of highly skilled and experienced{" "}
              <b>Web designers and developers in Coimbatore</b> Who are
              dedicated to delivering exceptional results. They are committed to
              delivering aesthetically pleasing, easy-to-navigate, and search
              engine-friendly Web pages that fit your needs and wallet. At
              EmergeWiz, it is our business to create appealing, informative,
              and, more significantly, conversion-oriented websites for your
              enterprise.
            </p>
            <h2 className="Service-sub-title mt-5">
              Our Key Features of Web Designing Services in Coimbatore
            </h2>
            <Row className="mt-4 bg-light ">
              <Col  className=" mycard my-2 ">
                <h4 className="text-center cl-green">Customized Solutions </h4>
                <p className=" text-start  p-lh m-3">
                  EmergeWiz is a well-established{" "}
                  <b>web development company in Coimbatore</b> and we are ready
                  to offer you web solutions according to your business
                  requirements. We work on the principles of exclusivity to
                  guarantee that every undertaking matches your particular
                  specifications as well as goals for your company brand.
                </p>
              </Col>
              <Col  className=" mycard  my-2  ">
                <h4 className="text-center cl-green">Innovative Design</h4>
                <p className=" text-start   p-lh m-3">
                  EmergeWiz is tackling the provision of stunning and
                  distinctive web designs that can help differentiate the brand
                  of your business. We combine creativity with the purposes to
                  make sure our design vision is both aesthetically pleasing and
                  effective in meeting your company’s goals as well as improving
                  customers’ experience.
                </p>
              </Col>
         
              <Col  className="mycard my-2">
                <h4 className="text-center cl-green">Responsive Development</h4>
                <p className="  p-lh text-start m-3">
                  We guarantee that all sites designed at PearliePop are clear
                  and compatible with all sorts of devices. None of the
                  designs/developments are a one-size-fits-all proposition and
                  even more so when it comes to mobile web design/development
                  that targets audiences across multiple platforms/desktops and
                  devices/OS.
                </p>
              </Col>
              <Col  className=" mycard my-2">
                <h4 className="text-center cl-green">Affordable Quality: </h4>
                <p className=" p-lh text-start m-3">
                  We specialize in affordable and professional{" "}
                  <b>web design services in Coimbatore</b>. Our primary concern
                  is to provide the best possible solutions at an affordable
                  price that gives you great results on your investment,
                  allowing you to obtain a professional and efficient web
                  presence.
                </p>
              </Col>
            </Row>
          </div>
          <div>
            <Container fluid="xxl" className="service-div py-5 wow fadeInUp">
              <Container className="px-lg-5">
                <div className="S-section-title position-relative text-center mb-5 pb-2 wow fadeInUp">
                  <h2 className="Service-sub-title">
                    Why prefer EmergeWiz for Web designing Services in
                    Coimbatore?
                  </h2>
                  <p className="mx-5 p-lh mt-4">
                    EmergeWiz is a leading{" "}
                    <b>web development company in Coimbatore</b>, recognized for
                    its innovative solutions and commitment to client-centric
                    service. The team works hard to deliver custom websites that
                    meet each business's needs. With a focus on quality and
                    innovation, EmergeWiz stands out in the web development
                    industry
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
                          Expertise and Experience
                        </Card.Title>
                        <Card.Text className="p-lh">
                          Taking years of experience in the web development
                          industry, our dedicated professionals ensure high
                          quality and efficiency in all works. Now it is
                          possible to state that we have provided various web
                          development projects throughout the companies’
                          spectrum starting with simple business sites and
                          ending with Internet shops.
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
                          Customized Solutions
                        </Card.Title>
                        <Card.Text className="p-lh">
                          To help you understand better, every business has its
                          own set goals and objectives on the balance sheets.
                          Being one of the leading{" "}
                          <b>web development company in Coimbatore</b>, we offer
                          tailor-made solutions should you need only a CMS, an
                          online shop, or a full-fledged website with a fully
                          responsive design.
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
                          User-Centric Design
                        </Card.Title>
                        <Card.Text className="p-lh">
                          To us, the creation of a perfect website entails
                          realizing a great user experience or UX website. Being
                          one of the leading web design company in Coimbatore,
                          our design concept focuses on the users appreciating
                          the elegant look and feel of the site but also
                          appreciating it in terms of usability and its
                          multifunctional nature.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col
                    lg={4}
                    md={6}
                    className=" animated wow zoomIn SEO-Optimization"
                  >
                    <Card className="service-item pb-3" data-wow-delay="0.1s">
                      <Card.Body className="card-body">
                        <Card.Title className="mb-3">
                          SEO-Optimized Websites
                        </Card.Title>
                        <Card.Text className="p-lh">
                          We at EmergeWiz ensure that websites that we design
                          meet the SEO guidelines that a site such as Google
                          requires. This involves issues such as the absence of
                          messy codes, short page loading time, the ability of
                          the site to adapt to mobile devices, and correct
                          positioning of the keywords among others.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col
                    lg={4}
                    md={6}
                    className=" animated wow zoomIn SEO-Optimization"
                    data-wow-delay="0.3s"
                  >
                    <Card className="service-item">
                      <Card.Body className="card-body">
                        <Card.Title className="mb-3">
                          Client-Centric Approach
                        </Card.Title>
                        <Card.Text className="p-lh">
                          We believe in maintaining a professional and long-term
                          partnership with the clients. This is why at
                          EmergeWiz, we dedicate time to understanding your
                          business, your goals, and your vision. At each stage
                          of development, you are kept informed and updated and
                          your input is encouraged and acknowledged.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col
                    lg={4}
                    md={6}
                    className="animated wow zoomIn SEO-Optimization"
                    data-wow-delay="0.6s"
                  >
                    <Card className="service-item">
                      <Card.Body className="card-body">
                        <Card.Title className="mb-3">
                          Support and Maintenance
                        </Card.Title>
                        <Card.Text className="p-lh">
                          At EmergeWiz, our commitment doesn’t end with the
                          website launch. We offer continuous support and
                          maintenance to keep your website updated, secure, and
                          running smoothly at all times. Whether it’s technical
                          updates or troubleshooting, we’re here to assist you
                          long after the project is completed.
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

export default WebServices;
