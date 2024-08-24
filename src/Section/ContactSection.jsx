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
        axios.post("./mail.php", data)
            .then((response) => {
                console.log(response);
                
                alert("Message sent Successfully..")
                resetting()
            })
            .catch((e) => {
                console.log('====================================');
                console.log("error form submitting " + e);
                console.log('====================================');
            })
    }
    const resetting = () => {
        resetField("name", { keepError: true })
        resetField("email", { keepError: true })
        resetField("message", { keepError: true })
    }


    return (
        <Container fluid="xxl" className="products  py-3  wow fadeInUp">
            <Container className='px-lg-5 F-innerDiv'>
                <div className='S-section-title position-relative text-center mb-2 pb-2 wow fadeInUp'>
                    <h2 className='Service-sub-title '>Get in Touch with us</h2>
                    <p className=' mx-3 mt-3 lh-base text-center'>
                        We’d love to hear from you! Send us a question or comment below and we’ll get in touch with you shortly!
                    </p>
                </div>

                <Row className="product-section gx-5">
                    <Col xs={12} lg={6} className=' '>
                        <div className="hire-item  ">
                            <div className="container text-start">
                                <h3>Phone</h3>
                                <FaPhone />
                                <span className="m-3"  >
                                    +91- 98 40 64 26 67
                                </span>
                            </div>
                            <div className="container text-start my-3">
                                <h3>Email</h3>
                                <IoMdMail />
                                <span className="m-3"  >
                                    contact@emergewiz.com
                                </span>
                            </div>
                            <div className="container text-start my-3">
                                <h3>Location </h3>
                                <FaLocationArrow />
                                <span className="m-3"  >
                                    No – 287/3, Standard Towers,
                                    Near Fun Republic Mall,
                                    Avinashi main road, Peelamedu,
                                    Coimbatore – 641 004.
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className='contact  '>
                        <div className='hire-item' >
                            <h1>Contact <span> us</span></h1>
                            <form id='contact-form' onSubmit={handleSubmit(onFormSubmit)} >
                                <label htmlFor='name'>Full Name *</label>
                                <input name='name'  {...register('name', {
                                    required: "Name is required", pattern: {
                                        value: /^[a-zA-z ]+$/, message: "enter valid name"
                                    }
                                })} placeholder='Enter full name...' type='text' />
                                <span style={{ color: "red" }}> {errors?.name && errors.name.message}</span>
                                <label htmlFor='email'>Email *</label>
                                <input name='email' placeholder='Enter email...' type='email' {...register("email", {
                                    required: "Email is required", pattern: {
                                        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/, message: "enter valid email"
                                    }
                                })} />
                                <span style={{ color: "red" }}> {errors?.email && errors.email.message}</span>

                                <label htmlFor='phone'>Phone *</label>
                                <input name='phone' placeholder='Enter Phone Number...' type='number' {...register("phone", {
                                    required: "Phone is required", pattern: {
                                        value: /^[0-9]{10}$/, message: "enter valid phone number"
                                    }
                                })} />
                                <span style={{ color: "red" }}> {errors?.phone && errors.phone.message}</span>
                                <label htmlFor='message'>Message</label>
                                <textarea
                                    name='message'
                                    rows='3'
                                    {...register("message", {
                                        required: "please enter your message"
                                    })}
                                    placeholder='Enter message...'
                                ></textarea>
                                < span style={{ color: "red" }}> {errors?.message && errors.message.message}</span>
                                <button type='submit' id='formButton' > Send message</button>
                            </form>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <iframe title="Emergewiz-location" src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.109185713824!2d77.01117902326185!3d11.024451547001405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857730bb2abd5%3A0x27a2cfe9b594b986!2sEmergewiz%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1719230697391!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Row>
            </Container >
        </Container >
    )
}

export default ContactSection;