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
      <Card className="mx-auto px-5 py-2 w-100 mb-5">
        <Card.Body className="card-body pt-2">
          <h5 className="cl-prime">{props.jobs.job_title} </h5>
          <Row >
            <Col className="py-2  p-lh">
              <p>
                <b>Description </b><br /> {props.jobs.description}
              </p>
            </Col>
            <Col className="py-2  p-lh">
              <p>
                <b>Experience <br /></b> {props.jobs.experience}
              </p>
            </Col>
            <Col className="py-2  p-lh">
              <p>
                <b>Salary <br /></b> {props.jobs.salary}
              </p>
            </Col >
            <Col className="py-2  p-lh">
              <p>
               <b> Location  </b><br /> {props.jobs.location}
              </p>
            </Col>
          </Row>

          <Button className="btn btn-primary  float-end" onClick={togglePopup}>
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
