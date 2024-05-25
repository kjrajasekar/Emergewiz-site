import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../CSS/AboutPage.css';
import AboutSection from "../Section/AboutSection";
import TeamSection from '../Section/TeamSection';
import Newsletter from "../Section/NewsletterSec";

function AboutPage() {
    return(
        <div className="bg-white">
            <Container fluid="xxl" className="aboutPage_div py-5 mb-5">
                <Container className="my-5 py-5 px-lg-5">
                    <Row className="g-5 py-5">
                        <Col className="text-center">
                           <h1 className="text-white animated zoomIn about-page-heading">About Us</h1>
                           <hr className="heading-bt-line"/>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <AboutSection/>
            <Newsletter/>
            <TeamSection/>
            
        </div>
    )
}

export default AboutPage;