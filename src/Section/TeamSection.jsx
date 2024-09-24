import React from "react";
import '../CSS/Team.css';
import { Container } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import { FaAngular, FaReact, FaHtml5, FaVuejs, FaPython, } from "react-icons/fa";
import { FaNodeJs, FaLaravel, FaPhp } from "react-icons/fa";
import { SiFlutter, SiJavascript, SiAndroid, SiSwift, SiDjango } from "react-icons/si";
import { SiMongodb, SiMysql, SiPostgresql, SiSqlite, SiMicrosoftsqlserver } from "react-icons/si";


function TeamSection() {
    return (
        <Container fluid="xxl" className='Team-div py-2 wow fadeInUp'>
            <Container fluid="xxl" className="hire-div py-5  wow fadeInUp">
                <Container className='px-lg-5 F-innerDiv'>
                    <div className='S-section-title position-relative text-center mb-2 pb-2 wow fadeInUp'>
                        <h2 className='Service-sub-title text-white'>RESOURCE AS A SERVICE</h2>
                        <p className='text-white mt-4 mx-3 p-lh '>
                            Emergewiz, Leading the way in digital transformation, leverages advanced technology stacks to provide groundbreaking and next-generation digital solutions.
                        </p>
                    </div>
                    <Row className="gx-5 equal-cols  ">
                        <Col xs={12} lg={6} className='  '>
                            <div className="hire-item   ">
                                <div>
                                    <h4 className='prof'>Frontend Development</h4>
                                    <p className="p-lh" >
                                        At Emergewiz, our skilled frontend developers create attractive and user-friendly websites tailored to your business needs. We focus on making sure your site looks great and works well on all devices, providing a seamless and enjoyable experience for your users.
                                    </p>
                                    <button className='T-socialM-icon'><FaHtml5 /></button>
                                    <button className='T-socialM-icon'><SiJavascript /></button>
                                    <button className='T-socialM-icon'><FaAngular /></button>
                                    <button className='T-socialM-icon'><FaReact /></button>
                                    <button className='T-socialM-icon'><FaVuejs /></button>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} className=' '>
                            <div className="hire-item  ">
                                <div>
                                    <h4 className='prof'>Backend Development</h4>
                                    <p  className="p-lh">
                                        At Emergewiz, our expert  developers create custom solutions for your business. With years of experience, we build reliable, user-friendly systems that improve your service. Trust Emergewiz for efficient and innovative  development that helps your business grow.
                                    </p>
                                    <button className='T-socialM-icon'><FaNodeJs /></button>
                                    <button className='T-socialM-icon'><FaPython /></button>
                                    <button className='T-socialM-icon'><FaPhp /></button>
                                    <button className='T-socialM-icon'><FaLaravel /></button>
                                    <button className='T-socialM-icon'><SiDjango /></button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="equal-cols">
                        <Col xs={12} lg={6} className=' '>
                            <div className="hire-item  ">
                                <div>
                                    <h4 className='prof'>Mobile Development</h4>
                                    <p  className="p-lh">
                                        Emergewiz specializes in developing high-quality mobile apps for both iOS and Android platforms. Our experienced team builds intuitive, engaging, and performance-driven apps designed to meet your business goals and provide a great user experience.
                                    </p>
                                    <button className='T-socialM-icon'><SiFlutter /></button>
                                    <button className='T-socialM-icon'><SiSwift /></button>
                                    <button className='T-socialM-icon'><SiAndroid /></button>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} className=' '>
                            <div className="hire-item  ">
                                <div>
                                    <h4 className='prof'> Database Development</h4>
                                    <p className="p-lh" >
                                        Our experts at Emergewiz design and manage reliable and efficient databases to support your business operations. We focus on ensuring your data is secure, well-organized, and easily accessible, providing a strong foundation for your applications and services.
                                    </p>
                                    <button className='T-socialM-icon'><SiMongodb /></button>
                            <button className='T-socialM-icon'><SiMysql /></button>
                            <button className='T-socialM-icon'><SiPostgresql /></button>
                            <button className='T-socialM-icon'><SiSqlite /></button>
                            <button className='T-socialM-icon'><SiMicrosoftsqlserver /></button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Container>
    )
}

export default TeamSection;