
import React from 'react';
import './CSS/App.css';
import { useEffect } from 'react';
import WOW from 'wow.js';
import HeaderSection from './Section/HeaderSection';
import Spinner from './Components/loading_spinner';
import BackToTopButton from './Components/BackToTop';
import FooterSection from './Section/FooterSection';
import { useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();

  // autoscroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  // onscroll animation
  useEffect(() => {
    const wow = new WOW({});
    wow.init();
  });

  return (
    <div className='App'>
      <Spinner/>
      <HeaderSection/>
      <FooterSection/>
      <BackToTopButton/>
    </div>
  );
}

export default App;
