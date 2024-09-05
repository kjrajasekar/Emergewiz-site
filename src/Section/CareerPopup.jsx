import React from "react";
import { Row,Container, Col } from "react-bootstrap";
import "../CSS/Service.css";
import "../CSS/popup.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

function CareerPopup(props) {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();
  const onFormSubmit = (data) => {
    console.log(data)
    axios
      .post("./mail.php", data)
      .then((response) => {
        console.log(response);
        alert("Message sent Successfully..");
        resetting();
      })
      .catch((e) => {
        console.log("====================================");
        console.log("error form submitting " + e);
        console.log("====================================");
      });
  };
  const resetting = () => {
    resetField("name", { keepError: true });
    resetField("email", { keepError: true });
    resetField("message", { keepError: true });
  };

  return (
    <div className="popup-box">
      <div className="box text-center">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <h3>{props.content}</h3>
        <p className="mt-3">
          {" "}
          share your resume to <h5>hr@emergewiz.com</h5>
        </p>

        <div className="box mt-1">
          <form id="contact-form" onSubmit={handleSubmit(onFormSubmit)}>
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

            <input
              name="email"
              placeholder="Enter email..."
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/,
                  message: "enter valid email",
                },
              })}
            />
            <span style={{ color: "red" }}>
              {" "}
              {errors?.email && errors.email.message}
            </span>
            <input
              name="phone"
              placeholder="Enter phone number..."
              type="phone"
              {...register("phone", {
                required: "phone is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter valid phone number",
                },
              })}
            />
            <span style={{ color: "red" }}>
              {" "}
              {errors?.phone && errors.phone.message}
            </span>

            <input type="file"   name="resume" accept="application/pdf,application/msword"   {...register("resume", {
            validate: {
              lessThan10MB: (files) => files[0]?.size < 300000 || "Max 300kb"
            }
          })} />
           {errors.resume && <span>{errors.resume.message}</span>}
            <button
              type="submit"
              id="formButton"
              className="btn btn-primary mt-2"
            >
              {" "}
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CareerPopup;
