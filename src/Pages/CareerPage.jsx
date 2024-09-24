import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container,Row,Col } from "react-bootstrap";
import CareerSection from "../Section/CareerSection";
import Myhelmet from "./Myhelmet";
import ContactPopup from "../Section/ContactPopup";

function CareerPage() {
  const { pathname } = useLocation();

  // autoscroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://admin.emergewiz.com/api/job_openings/")
      .then((response) => response.json())
      .then((data) => setdata(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  let metas={
    title : "Best Web Development Company in Coimbatore",
describe: "Looking for the best web development company in Coimbatore? We deliver innovative, custom web solutions with a focus on quality and client satisfaction."
  }
  return (
    <div className="bg-white">
      <Myhelmet mymeta={metas}/>
      <Container fluid="xxl" className="projectPage_div py-5 mb-5">
        <Container className="my-5 py-5 px-lg-5">
          <Row className="g-5 py-5">
            <Col className="text-center" >
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
          <Row className="g-4 equal-cols" >
            {data ? (
              data.map((job) => {
                if (job.status) return <CareerSection jobs={job} />;
              })
            ) : (
              <p>Loading...</p>
            )}
          </Row>
        </Container>
        <ContactPopup />
      </Container>
    </div>
  );
}

export default CareerPage;
