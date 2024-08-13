import React from 'react';
import '../CSS/Home.css';
import { Container } from "react-bootstrap";
import AboutSection from "../Section/AboutSection";
import Newsletter from "../Section/NewsletterSec";
import HeroSection from '../Section/HeroSection';
import ServiceSection from '../Section/ServiceSection';
import FeedbackSection from '../Section/FeedbackSection';
import TeamSection from '../Section/TeamSection';
import HireTrainerSection from '../Section/HireTrainerSection';
import ProductSection from '../Section/ProductSection';


function HomePage(){
  
  return(
    <Container fluid="xxl" className="home-div">
      <HeroSection/>
      
      <ServiceSection />
      <HireTrainerSection />
      <AboutSection />
      <TeamSection />
      <ProductSection />
      <Newsletter />
      {/* <ProjectSection /> */}
      <FeedbackSection />
  
    </Container>
  )
}

export default HomePage;