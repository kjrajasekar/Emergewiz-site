import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import smartstorez from "./../Images/newsletter.png";
import logistics from "./../Images/newsletter.png";

function ProductSection() {
  return (
    <Container fluid="xxl" className="mt-5 products  py-3  wow fadeInUp">
      <Container className="px-lg-5 F-innerDiv">
        <div className="S-section-title position-relative text-center mb-2 pb-2 wow fadeInUp">
          <h2 className="Service-sub-title ">Our Products</h2>
          <p className=" mx-5 mt-5 p-lh text-start">
            Our products are designed to fit different needs, making your work
            easier and more efficient. Whether you want to improve operations,
            engage customers better, or grow your business, EmergeWiz has the
            right tools for you. Experience the future of business with
            EmergeWiz – where great ideas become reality.
          </p>
        </div>

        <Row className="product-section gx-5 equal-cols">
          <Col xs={12} lg={6} className=" ">
            <div className="hire-item ">
              <div className=" text-center">
                <img src={smartstorez} alt="smartstorez" className="w-75" />
                <h4 className="text-center">Smartstorez</h4>
                <p className="m-3 mb-5 p-lh text-start">
                  Smartstorez provides a powerful E-commerce
                  software designed for businesses. Key features include product
                  management, product reviews, tax handling, user management,
                  inventory tracking, discounts, detailed reports, integrated
                  shipping, and more. Our solution ensuring affordability and
                  scalability for your business.
                </p>
              </div>
              <div class="row  justify-content-center ">
                <span>
                  {" "}
                  Get a Quote <FaArrowRight />{" "}
                </span>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6} className=" ">
            <div className="hire-item  ">
              <div className=" text-center">
                <img src={logistics} alt="smartstorez" className="w-75" />
                <h4 className="text-center">Food Duke</h4>
                <p className="m-3  mb-5  p-lh text-start">
                  Food Duke offers a robust food ordering app designed for
                  convenience and variety. Key features include restaurant
                  listings, menu browsing, order tracking, secure payments, and
                  user reviews. Our platform ensures a smooth ordering
                  experience with quick delivery and real-time updates, making
                  dining out easier from the comfort of your home.
                </p>
              </div>
              <div class="row  justify-content-center ">
                <span>
                  {" "}
                  Get a Quote <FaArrowRight />{" "}
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProductSection;
