import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CareerPopup from "./CareerPopup";

function CareerSection(props) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Col
      xs={12}
      className="career animated wow zoomIn SEO-Optimization "
      data-wow-delay="0.3s"
    >
      <Card className="service-item ">
        <Card.Body className="card-body">
          <Card.Title className="mb-3">{props.jobs.job_title} </Card.Title>
          <p>
            <p>
              Description <br /> {props.jobs.description}
            </p>
            <p>
              Salary : <br /> {props.jobs.salary}
            </p>
            <p>
              Location : <br /> {props.jobs.location}
            </p>
          </p>
          <Button className="rad-mor  " onClick={togglePopup}>
            Apply Now
          </Button>
        </Card.Body>
      </Card>
      {isOpen && (
        <CareerPopup
          content={
            <>
              <b>{props.jobs.job_title}</b>
            </>
          }
          handleClose={togglePopup}
          result={props.jobs.job_title}
        />
      )}
    </Col>
  );
}

export default CareerSection;
