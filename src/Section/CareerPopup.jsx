import React, { useState } from "react";
import "../CSS/popup.css";
import { useForm } from "react-hook-form";
import axios from "axios";

function CareerPopup(props) {
  const [file, setFile] = useState(null);
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    data.designation=props.result
    const formData = new FormData();
    formData.append('file', file);  // Append the file
    formData.append('name',data.name);
    formData.append('email',data.email);
    formData.append('phone_no',data.phone_no);
    formData.append('designation',data.designation);
    
    // formData.forEach((value, key) => {
    //   console.log(key, value);
    // });
    axios
      .post("https://admin.emergewiz.com/api/send-email/", formData)
      .then((response) => {
        alert("Email Sent Successfully...");
        resetting();
      })
      .catch((e) => {
        console.log("=====");
        console.log("error form submitting " + e);
        console.log("=====");
      });
  };
  const resetting = () => {
    resetField("name", { keepError: true });
    resetField("email", { keepError: true });
    resetField("phone_no", { keepError: true });
    resetField("designation", { keepError: true });
    props.handleClose()
  };
const fileupload=(e) => {
    setFile(e.target.files[0])}

  return (
    <div className="popup-box">
      <div className="box text-center">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <h3>{props.content}</h3>
        <p className="mt-3 cl-prime">
          {" "}
          share your resume to <h5>hr@emergewiz.com</h5>
        </p>
        <p className="mt-3 cl-prime">
          {" "}
         Designation <h5>{props.result}</h5>
        </p>

        <div className="box mt-1">
          <form id="contact-form" onSubmit={handleSubmit(onFormSubmit)} >
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
            <span className="cl-red">
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
            <span  className="cl-red">
              {" "}
              {errors?.email && errors.email.message}
            </span>
            <input
              name="phone_no"
              placeholder="Enter phone number..."
              type="phone"
              {...register("phone_no", {
                required: "phone is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter valid phone number",
                },
              })}
            />
            <span className="cl-red">
              {" "}
              {errors?.phone_no && errors.phone_no.message}
            </span>

            <input
              type="file"
              name="file"
              onClick={fileupload}
              accept="application/pdf,application/msword"
              {...register("file", {
                validate: {
                  lessThan10MB: (files) =>
                    files[0]?.size < 300000 || "Max 300kb",
                },
              })}
            />
            {errors.file && <span>{errors.file.message}</span>}
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
