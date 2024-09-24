import React from "react";
import "../CSS/Contact.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

function Newsletter() {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();
  const onFormSubmit = (data) => {
    axios
      .post("http://admin.emergewiz.com/api/send-contact-email/", data)
      .then((response) => {
        alert("Message sent Successfully..");
        resetting();
      })
      .catch((e) => {
        console.log("============");
        console.log("error form submitting " + e);
        console.log("=============");
      });
  };
  const resetting = () => {
    resetField("name", { keepError: true });
    resetField("email", { keepError: true });
    resetField("message", { keepError: true });
    resetField("phone_no", { keepError: true });
  };

  return (
    <Container
      fluid="xxl"
      className="Newsletter-div my-3 wow fadeInUp bg-light pt-5"
      data-wow-delay="0.1s"
    >
      <Container className="inner-div px-lg-5">
        <Row className="Newsletter-row ">
          <Col className=" heading text-center">
            <h3>Get Consultation with us</h3>
            <p className="sub-title mt-4">
              Let's turn your ideas into reality today!. We keep your project
              ideas confidential, Let’s work together
            </p>
          </Col>
        </Row>
        <Row className="mt-4 pb-5">
          <Col sm={10} className="mx-auto px-5">
            <form id="contact-form" onSubmit={handleSubmit(onFormSubmit)}>
              <Row>
                <Col xs={12} lg={4}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    name="name"
                    {...register("name", {
                      required: "Name is required",
                      pattern: {
                        value: /^[a-zA-z ]+$/,
                        message: "enter valid name",
                      },
                    })}
                    placeholder="Enter full name..."
                    type="text"
                  />
                  <span style={{ color: "red" }}>
                    {" "}
                    {errors?.name && errors.name.message}
                  </span>
                </Col>
                <Col xs={12} lg={4}>
                  <label htmlFor="email">Email *</label>
                  <br />
                  <input
                    name="email"
                    placeholder="Enter email..."
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/,
                        message: "enter valid email",
                      },
                    })}
                  />
                  <span style={{ color: "red" }}>
                    {" "}
                    {errors?.email && errors.email.message}
                  </span>
                </Col>
                <Col xs={12} lg={4}>
                  <label htmlFor="phone_no">Phone *</label>
                  <br />
                  <input
                    name="phone_no"
                    placeholder="Enter Phone Number..."
                    type="number"
                    {...register("phone_no", {
                      required: "Phone is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "enter valid phone number",
                      },
                    })}
                  />
                  <span style={{ color: "red" }}>
                    {" "}
                    {errors?.phone_no && errors.phone_no.message}
                  </span>
                </Col>
              </Row>
              <Row className="align-items-end">
                <Col xs={12} lg={8}>
                  {" "}
                  <label htmlFor="message">Message</label>
                  <br />
                  <textarea
                    name="message"
                    rows="3"
                    {...register("message", {
                      required: "please enter your message",
                    })}
                    placeholder="Enter message..."
                  ></textarea>
                  <span style={{ color: "red" }}>
                    {" "}
                    {errors?.message && errors.message.message}
                  </span>
                </Col>
                <Col xs={12} lg={4} className="mt-3">
                  <button
                    type="submit"
                    id="formButton"
                    className="btn btn-primary w-100"
                  >
                    {" "}
                    Send message
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Newsletter;
