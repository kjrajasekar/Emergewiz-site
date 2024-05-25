import React from "react";
import '../CSS/Team.css';
import { Container } from "react-bootstrap";
import { Row, Col} from 'react-bootstrap';
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import team_img_1 from '../Images/team-1.jpg'
import team_img_2 from '../Images/team-2.jpg'
import team_img_3 from '../Images/team-3.jpg'

function ClientSection(){
    return(
        <Container fluid="xxl" className='Team-div py-5 wow fadeInUp'>
            <Container className='px-lg-5 team-container'>
                <div className='T-section-title position-relative text-center mb-5 pb-2 wow fadeInUp'>
                    <h6 className='title ps-4'>Our Team</h6>
                    <h2 className='Team-sub-title'>Meet Our Team Members</h2>
                </div>
                <Row className='g-4'>
                    <Col sm={6} md={4} className='animated wow zoomIn' data-wow-delay="0.1s">
                        <div className="team-item">
                            <div className="img_and_icon">
                                <div className="team-socialIcon">
                                    <button className='T-socialM-icon'><FaFacebookF /></button>
                                    <button className='T-socialM-icon mt-3'><BsTwitterX /></button>
                                    <button className='T-socialM-icon mt-3'><BsInstagram /></button>
                                    <button className='T-socialM-icon mt-3'><FaLinkedinIn /></button>
                                </div>
                                <img src={team_img_1} alt="team_img" className="img-fluid team_img" />
                            </div>
                            <div className="px-4 py-2 ">
                                <h5 className="teamEmp_name fw-bold">Jhon Doe</h5>
                                <small className="desing">CEO</small>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={4} className='animated wow zoomIn' data-wow-delay="0.3s">
                        <div className="team-item">
                            <div className="img_and_icon">
                                <div className="team-socialIcon">
                                    <button className='T-socialM-icon'><FaFacebookF /></button>
                                    <button className='T-socialM-icon mt-3'><BsTwitterX /></button>
                                    <button className='T-socialM-icon mt-3'><BsInstagram /></button>
                                    <button className='T-socialM-icon mt-3'><FaLinkedinIn /></button>
                                </div>
                                <img src={team_img_2} alt="team_img" className="img-fluid team_img " />
                            </div>
                            <div className="px-4 py-2 ">
                                <h5 className="teamEmp_name fw-bold">Emma William</h5>
                                <small className="desing">Manager</small>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={4} className='animated wow zoomIn' data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="img_and_icon">
                                <div className="team-socialIcon">
                                    <button className='T-socialM-icon'><FaFacebookF /></button>
                                    <button className='T-socialM-icon mt-3'><BsTwitterX /></button>
                                    <button className='T-socialM-icon mt-3'><BsInstagram /></button>
                                    <button className='T-socialM-icon mt-3'><FaLinkedinIn /></button>
                                </div>
                                <img src={team_img_3} alt="team_img" className="img-fluid team_img" />
                            </div>
                            <div className="px-4 py-2 ">
                                <h5 className="teamEmp_name fw-bold">Noah Michael</h5>
                                <small className="desing">Designer</small>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default ClientSection;