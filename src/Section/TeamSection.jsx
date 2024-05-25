import React from "react";
import '../CSS/Team.css';
import { Container } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import { FaAngular, FaReact, FaHtml5, FaCss3, FaVuejs, FaPython, } from "react-icons/fa";
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
                        <p className='text-white mt-4 mx-3 lh-base '>
                        As a leading digital transformation company, Emergewiz has mastered advanced technology stacks that lead them to deliver unique and next-gen digital solutions.
                        </p>
                    </div>
                    <Row className="gx-5  ">
                        <Col xs={12} md={6} className='  '>
                            <div className="hire-item   ">
                                <div>
                                    <h4 className='prof'>Frontend Development</h4>
                                    <p  >
                                        Our Front-end professionals build secure and user-friendly applications delivering high-end solutions to enhance business prospects.high-end solutions to enhance business prospects.
                                        Our Front-end professionals build secure and user-friendly applications delivering high-end solutions to enhance business prospects.
                                    </p>
                                    <button className='T-socialM-icon'><FaHtml5 /></button>
                                    {/* <button className='T-socialM-icon'><FaCss3 /></button> */}
                                    <button className='T-socialM-icon'><SiJavascript /></button>
                                    <button className='T-socialM-icon'><FaAngular /></button>
                                    <button className='T-socialM-icon'><FaReact /></button>
                                    <button className='T-socialM-icon'><FaVuejs /></button>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className=' '>
                            <div className="hire-item  ">
                                <div>
                                    <h4 className='prof'>Backend Development</h4>
                                    <p  >
                                        We have skilled backend professionals creating tailor-made solutions for your business and have many years of experience in offering feature-rich and enhanced user experience.
                                        We have skilled backend professionals creating tailor-made solutions for your business and have many.
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
                    <Row>
                        <Col xs={12} md={6} className=' '>
                            <div className="hire-item  ">
                                <div>
                                    <h4 className='prof'>Mobile Development</h4>
                                    <p  >
                                        Build scalable and user-friendly mobile apps on iOS and Android platforms for businesses and leverage our professional’s years of experience in mobile app development.
                                        Build scalable and user-friendly mobile apps on iOS and Android platforms for businesses and leverage our professional’.
                                    </p>
                                    <button className='T-socialM-icon'><SiFlutter /></button>
                                    <button className='T-socialM-icon'><SiSwift /></button>
                                    <button className='T-socialM-icon'><SiAndroid /></button>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className=' '>
                            <div className="hire-item  ">
                                <div>
                                    <h4 className='prof'> Database Development</h4>
                                    <p  >
                                    Our professionals help in powering enhanced business outcomes with premium database development with our experienced database design and development experts.
                                    Our professionals help in powering enhanced business outcomes with premium database.powering enhanced business outcomes with premium database.
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