import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import '../CSS/ProjectPage.css'
import ContactSection from "../Section/ContactSection";
import CareerSection from "../Section/CareerSection";

function CareerPage() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/job_openings/")
      .then((response) => response.json())
      .then((data) => setdata(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(data);

  return (
    <div className="bg-white">
      <Container fluid="xxl" className="projectPage_div py-5 mb-5">
        <Container className="my-5 py-5 px-lg-5">
          <Row className="g-5 py-5">
            <Col className="text-center">
              <h1 className="text-white animated zoomIn project-page-heading">
                Career Page{" "}
              </h1>
              <hr className="heading-bt-line" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid="xxl" className="service-div py-5 wow fadeInUp">
        <Container className="px-lg-5">
          <Row className="g-4 equal-cols">
            {data ? (
              data.map((job) => {
                if (job.status) return <CareerSection jobs={job} />;
              })
            ) : (
              <p>Loading...</p>
            )}
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default CareerPage;
