import React from "react";
import '../CSS/Contact.css';
import { Container } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { IoMdMail, } from "react-icons/io";
import { useForm } from "react-hook-form";
import axios from "axios";

function ContactSection() {
    const { register, handleSubmit, resetField, formState: { errors } } = useForm();
    const onFormSubmit = data => {
        const formData = new FormData();

        // formData.append('name',data.name);
        // formData.append('email',data.email);
        // formData.append('phone_no',data.phone_no);
        // formData.append('message',data.message);
        
        axios.post("https://admin.emergewiz.com/api/send-contact-email/", data)
            .then((response) => {
                alert("Message sent Successfully..")
                resetting()
            })
            .catch((e) => {
                console.log('============');
                console.log("error form submitting " + e);
                console.log('=============');
            })
    }
    const resetting = () => {
        resetField("name", { keepError: true })
        resetField("email", { keepError: true })
        resetField("message", { keepError: true })
        resetField("phone_no", { keepError: true })
    }


    return (
        <Container fluid="xxl" className="  py-3  wow fadeInUp">
            <Container className='px-lg-5 F-innerDiv  '>
                <div className='S-section-title position-relative text-center mb-2 pb-2 wow fadeInUp'>
                    <h2 className='Service-sub-title '>Get in Touch with us</h2>
                    <p className=' mx-3 mt-3 lh-base text-center'>
                        We’d love to hear from you! Send us a question or comment below and we’ll get in touch with you shortly!
                    </p>
                </div>

                <Row className="equal-cols  product-section gx-5 shadow bg-light  bg-body rounded">
                    <Col xs={12} lg={5} className=''>
                        <div className=" bg-prime  " >
                            <div className="container text-start text-light px-5 py-4">
                                <h3  className=" text-light">Phone</h3>
                                <FaPhone />
                                <span className="m-3 text-light"  >
                                    +91- 98 40 64 26 67
                                </span>
                            </div>
                            <div className="container text-start text-light px-5 ">
                                <h3 className=" text-light">Email</h3>
                                <IoMdMail />
                                <span className="m-3 text-light"  >
                                    contact@emergewiz.com
                                </span>
                            </div>
                            <div className="container text-start text-light  px-5 py-3">
                                <h3 className=" text-light">Location </h3>
                                {/* <FaLocationArrow /> */}
                                <span className=" text-light p-lh"  >
                                    No – 287/3, Standard Towers,<br />
                                    Near Fun Republic Mall,<br />
                                    Avinashi main road, Peelamedu,<br />
                                    Coimbatore – 641 004.
                                </span>
                            </div>
                        </div>
                        <Row  className="p-3 mx-0 bg-prime">
                    <iframe title="Emergewiz-location" src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.109185713824!2d77.01117902326185!3d11.024451547001405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857730bb2abd5%3A0x27a2cfe9b594b986!2sEmergewiz%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1719230697391!5m2!1sen!2sin"   height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Row>
                    </Col>
                    <Col xs={12} lg={6} className='contact  ' >
                        <div className='hire-item bg-white'  >
                            <h1>Contact <span> us</span></h1>
                            <form id='contact-form' onSubmit={handleSubmit(onFormSubmit)} >
                               <Row>
                                <Col xs={12} lg={6}>
                                <label htmlFor='name'>Full Name *</label>
                                <input className="ps-2" name='name'  {...register('name', {
                                    required: "Name is required", pattern: {
                                        value: /^[a-zA-z ]+$/, message: "enter valid name"
                                    }
                                })} placeholder='Enter full name...' type='text' />
                                <span className="cl-red"> {errors?.name && errors.name.message}</span>
                                </Col>
                                <Col xs={12} lg={6}>
                                <label htmlFor='phone_no'>Phone *</label>
                                <input className="ps-2" name='phone_no' placeholder='Enter Phone Number...' type='number' {...register("phone_no", {
                                    required: "Phone is required", pattern: {
                                        value: /^[0-9]{10}$/, message: "enter valid phone number"
                                    }
                                })} />
                                <span className="cl-red"> {errors?.phone_no && errors.phone_no.message}</span>
                                </Col>
                                
                                </Row>

                                <Col xs={12} >
                                <label htmlFor='email'>Email *</label>
                                <input name='email' className="ps-2" placeholder='Enter email...' type='email' {...register("email", {
                                    required: "Email is required", pattern: {
                                        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/, message: "enter valid email"
                                    }
                                })} />
                                <span className="cl-red"> {errors?.email && errors.email.message}</span>
                                </Col>
                                <Col xs={12}  >
                                <label htmlFor='message'>Message</label>
                                <textarea
                                    name='message'
                                    rows='3'
                                    {...register("message", {
                                        required: "please enter your message"
                                    })}
                                    placeholder='Enter message...'
                                ></textarea>
                                < span  className="cl-red"> {errors?.message && errors.message.message}</span>
                                </Col>
                                <Col xs={12} >
                                <button type='submit' id='formButton' className="mt-5"> Send message</button>
                                </Col>
                            </form>
                        </div>
                    </Col>
                </Row>
               
            </Container >
        </Container >
    )
}

export default ContactSection;