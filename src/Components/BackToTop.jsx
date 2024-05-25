
import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import '../CSS/BackToTopButton.css';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Show the button if user has scrolled down 100px or more
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  };

  return (
    <div className={`back-to-top-button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <i><IoIosArrowUp className='back-to-top' /></i> {/* You can use any icon library */}
    </div>
  );
};

export default BackToTopButton;
