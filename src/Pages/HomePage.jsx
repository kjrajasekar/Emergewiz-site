import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../CSS/Home.css";
import { Container } from "react-bootstrap";
import AboutSection from "../Section/AboutSection";
import Newsletter from "../Section/NewsletterSec";
import HeroSection from "../Section/HeroSection";
import ServiceSection from "../Section/ServiceSection";
import FeedbackSection from "../Section/FeedbackSection";
import TeamSection from "../Section/TeamSection";
import HireTrainerSection from "../Section/HireTrainerSection";
import ProductSection from "../Section/ProductSection";
import Myhelmet from "./Myhelmet";
import ContactPopup from "../Section/ContactPopup";

function HomePage() {
  const { pathname } = useLocation();

  // autoscroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  let metas = {
    title: "Best Web Development Company in Coimbatore",
    describe:
      "We are a leading website design, web development, and digital marketing company based in Coimbatore, offering comprehensive services to enhance your online presence.",
  };
  return (
    <Container fluid="xxl" className="home-div">
      <Myhelmet mymeta={metas} />
      <HeroSection option="hero" />
      <ServiceSection />
      <HireTrainerSection />
      <AboutSection />
      <TeamSection />
      <ProductSection />
      <FeedbackSection />
      <ContactPopup />
      <Newsletter />
    </Container>
  );
}

export default HomePage;
