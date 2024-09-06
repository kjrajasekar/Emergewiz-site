import React, { useEffect, useState } from "react";
import "../CSS/Hero.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import hero from "../Images/banner-image.png";
import { Container } from "react-bootstrap";

function HeroSection(props) {
  const mydata = [
    {
      title: "web",
      header: "Transform Your Vision into Digital Reality",
      para: "With the Leading Web Design and Development Company in Coimbatore. Let us help you make your dreams a reality with a website that not only meets but exceeds your expectations.",
    },
    {
      title: "about",
      header: "Transforming Ideas into Extraordinary Digital Solutions",
      para: "End-to-end software development, from innovative application creation to strategic digital marketing, driving your business forward.",
    },
    {
      title: "hero",
      header: "Elevate your business global visibility with EmergeWiz",
      para: "Our expert team ensures your brand stands out in the digital world, driving growth and engagement through innovative solutions tailored to your needs. \n   Shaping the Future through Innovative  Development.  \n  Our exceptional development expertise transforms possibilities into realities, crafting Excellence solutions that redefine  industries and propel progress to new heights.",
    },
  ];
  const [data, setdata] = useState(mydata);
  useEffect(() => {
    let selected = mydata.filter((item) => item.title == props.option);
    setdata(selected);
  },[]);

  return (
    <Container fluid="xxl" className="Hero_div py-5 mb-5">
      <Container className="mt-2 pt-4   hero-header">
        <Row className="g-5 py-5">
          <Col className="text-col text-center text-lg-start">
            <h1 className="hero-heading mb-4 zoomIn animated">{data[0].header}</h1>
            <div className="hero-sub zoomIn   animated">
              {              data[0].para.split('\n').map((i,key) => {
            return <p key={key}>{i}</p>})}
            </div>
            <Link to="/contact">
              <Button
                className="Quote-Button py-sm-3 px-sm-5 slideInLeft animated"
                variant="outline-light"
              >
                Free Quote
              </Button>{" "}
            </Link>
            <Link to="/contact">
              <Button
                className="Contact-Button py-sm-3 px-sm-5 slideInRight animated"
                variant="outline-light"
              >
                Contact Us
              </Button>{" "}
            </Link>
          </Col>
          <Col className="img-col text-center text-lg-start">
            <img src={hero} alt="" className="Hero-img img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HeroSection;
