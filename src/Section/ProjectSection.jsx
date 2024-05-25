import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import '../CSS/Project.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import portfolio_1 from '../Images/portfolio-1.jpg'
import portfolio_2 from '../Images/portfolio-2.jpg'
import portfolio_3 from '../Images/portfolio-3.jpg'
import portfolio_4 from '../Images/portfolio-4.jpg'
import portfolio_5 from '../Images/portfolio-5.jpg'
import portfolio_6 from '../Images/portfolio-6.jpg'
import { GoFileDirectoryFill } from "react-icons/go";
import $ from 'jquery'; // Import jQuery;
import Isotope from 'isotope-layout';


function ProjectSection() {
    useEffect(() => {
        const portfolioIsotope = new Isotope('.project-row', {
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $('#portfolio-flters .filter-btn').on('click', function () {
            $("#portfolio-flters .filter-btn").removeClass('active');
            $(this).addClass('active');

            portfolioIsotope.arrange({ filter: $(this).data('filter') });
        });

        // Clean up the event listener on unmount
        return () => {
            $('#portfolio-flters .filter-btn').off('click');
        };
    });
    return(
        <Container fluid="xxl" className="project-div py-5 wow fadeInUp'">
            <Container className='px-lg-5'>
                <div className='P-section-title position-relative text-center mb-5 pb-2 wow fadeInUp'>
                    <h6 className='title ps-4'>Our Projects</h6>
                    <h2 className='Project-sub-title'>Recently Launched Projects</h2>
                    <p  className="lh-base mx-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </div>
                <Row className="filter-row wow fadeInUp" data-wow-delay="0.1s">
                    <Col className="filter-col mb-5" id="portfolio-flters">
                    <button className="filter-btn px-3 pe-4 active" data-filter="*">All</button>
                    <button className="filter-btn px-3 pe-4" data-filter=".first">Design</button>
                    <button className="filter-btn px-3 pe-4" data-filter=".second">Development</button>
                    </Col>
                </Row>
                <Row className="project-row g-4">
                    <Col lg={4} md={6} className=" portfolio-item Serive-col-1 first wow zoomIn" data-wow-delay="0.1s">
                        <div className="S-img-div">
                            <img src={portfolio_1} alt="portfolio" className="img-fluid w-100" />
                            <div className="S-img-div-overlay">
                                <div className="s-overlay-text">
                                   <small><GoFileDirectoryFill className="folder-icon" />Web Design</small>
                                   <h3 className="p-name">Project Name</h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6}className=" portfolio-item Serive-col-2 second wow zoomIn" data-wow-delay="0.3s">
                        <div className="S-img-div">
                            <img src={portfolio_2} alt="portfolio" className="img-fluid w-100" />
                            <div className="S-img-div-overlay">
                                <div className="s-overlay-text">
                                   <small><GoFileDirectoryFill className="folder-icon" />Web Design</small>
                                   <h3 className="p-name">Project Name</h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-item Serive-col-3 first wow zoomIn" data-wow-delay="0.6s">
                        <div className="S-img-div">
                            <img src={portfolio_3} alt="portfolio" className="img-fluid w-100" />
                            <div className="S-img-div-overlay">
                                <div className="s-overlay-text">
                                   <small><GoFileDirectoryFill className="folder-icon" />Web Design</small>
                                   <h3 className="p-name">Project Name</h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-item Serive-col-4 second wow zoomIn" data-wow-delay="0.1s">
                        <div className="S-img-div">
                            <img src={portfolio_4} alt="portfolio" className="img-fluid w-100" />
                            <div className="S-img-div-overlay">
                                <div className="s-overlay-text">
                                   <small><GoFileDirectoryFill className="folder-icon" />Web Design</small>
                                   <h3 className="p-name">Project Name</h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-item Serive-col-5 first wow zoomIn" data-wow-delay="0.3s">
                        <div className="S-img-div">
                            <img src={portfolio_5} alt="portfolio" className="img-fluid w-100" />
                            <div className="S-img-div-overlay">
                                <div className="s-overlay-text">
                                   <small><GoFileDirectoryFill className="folder-icon" />Web Design</small>
                                   <h3 className="p-name">Project Name</h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-item Serive-col-6 second wow zoomIn" data-wow-delay="0.6s">
                        <div className="S-img-div">
                            <img src={portfolio_6} alt="portfolio" className="img-fluid w-100" />
                            <div className="S-img-div-overlay">
                                <div className="s-overlay-text">
                                   <small><GoFileDirectoryFill className="folder-icon" />Web Design</small>
                                   <h3 className="p-name">Project Name</h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </Container>
    )
}

export default ProjectSection;

// import React, { useState, useEffect } from "react";
// import { Container } from "react-bootstrap";
// import '../CSS/Project.css';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import portfolio_1 from '../Images/portfolio-1.jpg';
// import portfolio_2 from '../Images/portfolio-2.jpg';
// import portfolio_3 from '../Images/portfolio-3.jpg';
// import portfolio_4 from '../Images/portfolio-4.jpg';
// import portfolio_5 from '../Images/portfolio-5.jpg';
// import portfolio_6 from '../Images/portfolio-6.jpg';
// import { GoFileDirectoryFill } from "react-icons/go";
// import $ from 'jquery'; // Import jQuery
// import Isotope from 'isotope-layout';


// function ProjectSection() {
//     const [activeFilter, setActiveFilter] = useState('*');

//     useEffect(() => {
//         // Initialize Isotope when component mounts
//         const portfolioIsotope = new Isotope('.project-row', {
//             itemSelector: '.portfolio-item',
//             layoutMode: 'fitRows'
//         });
    
//         // Clean up Isotope when component unmounts
//         return () => {
//             portfolioIsotope.destroy();
//         };
//     }, []); // Empty dependency array ensures this effect runs only once

//     const handleFilterClick = (filter) => {
//         setActiveFilter(filter);

//         // Filter Isotope items
//         $('.project-row').isotope({ filter: filter });
//     };

//     return (
//         <Container fluid="xxl" className="project-div py-5 wow fadeInUp">
//             <Container className='px-lg-5'>
//                 <div className='P-section-title position-relative text-center mb-5 pb-2 wow fadeInUp'>
//                     <h6 className='title ps-4'>Our Projects</h6>
//                     <h2 className='Project-sub-title'>Recently Launched Projects</h2>
//                 </div>
//                 <Row className="filter-row wow fadeInUp" data-wow-delay="0.1s">
//                     <Col className="filter-col mb-5" id="portfolio-flters">
//                         <button className={`filter-btn px-3 pe-4 ${activeFilter === '*' ? 'active' : ''}`} onClick={() => handleFilterClick('*')}>All</button>
//                         <button className={`filter-btn px-3 pe-4 ${activeFilter === '.first' ? 'active' : ''}`} onClick={() => handleFilterClick('.first')}>Design</button>
//                         <button className={`filter-btn px-3 pe-4 ${activeFilter === '.second' ? 'active' : ''}`} onClick={() => handleFilterClick('.second')}>Development</button>
//                     </Col>
//                 </Row>
//                 <Row className="project-row g-4">
//                 <Col lg={4} className=" portfolio-item Serive-col-1 first wow zoomIn" data-wow-delay="0.1s">
//                         <div className="S-img-div">
//                             <img src={portfolio_1} alt="portfolio" className="img-fluid w-100" />
//                             <div className="S-img-div-overlay">
//                                 <div className="s-overlay-text">
//                                    <small><GoFileDirectoryFill className="folder-icon" />Web Design</small>
//                                    <h3 className="p-name">Project Name</h3>
//                                 </div>
//                             </div>
//                         </div>
//                     </Col>
//                     <Col lg={4}className=" portfolio-item Serive-col-2 second wow zoomIn" data-wow-delay="0.3s">
//                         <div className="S-img-div">
//                             <img src={portfolio_2} alt="portfolio" className="img-fluid w-100" />
//                             <div className="S-img-div-overlay">
//                                 <div className="s-overlay-text">
//                                    <small><GoFileDirectoryFill className="folder-icon" />Web Design</small>
//                                    <h3 className="p-name">Project Name</h3>
//                                 </div>
//                             </div>
//                         </div>
//                     </Col>
//                     <Col lg={4} className="portfolio-item Serive-col-3 first wow zoomIn" data-wow-delay="0.6s">
//                         <div className="S-img-div">
//                             <img src={portfolio_3} alt="portfolio" className="img-fluid w-100" />
//                             <div className="S-img-div-overlay">
//                                 <div className="s-overlay-text">
//                                    <small><GoFileDirectoryFill className="folder-icon" />Web Design</small>
//                                    <h3 className="p-name">Project Name</h3>
//                                 </div>
//                             </div>
//                         </div>
//                     </Col>
//                     <Col lg={4} className="portfolio-item Serive-col-4 second wow zoomIn" data-wow-delay="0.1s">
//                         <div className="S-img-div">
//                             <img src={portfolio_4} alt="portfolio" className="img-fluid w-100" />
//                             <div className="S-img-div-overlay">
//                                 <div className="s-overlay-text">
//                                    <small><GoFileDirectoryFill className="folder-icon" />Web Design</small>
//                                    <h3 className="p-name">Project Name</h3>
//                                 </div>
//                             </div>
//                         </div>
//                     </Col>
//                     <Col lg={4} className="portfolio-item Serive-col-5 first wow zoomIn" data-wow-delay="0.3s">
//                         <div className="S-img-div">
//                             <img src={portfolio_5} alt="portfolio" className="img-fluid w-100" />
//                             <div className="S-img-div-overlay">
//                                 <div className="s-overlay-text">
//                                    <small><GoFileDirectoryFill className="folder-icon" />Web Design</small>
//                                    <h3 className="p-name">Project Name</h3>
//                                 </div>
//                             </div>
//                         </div>
//                     </Col>
//                     <Col lg={4} className="portfolio-item Serive-col-6 second wow zoomIn" data-wow-delay="0.6s">
//                         <div className="S-img-div">
//                             <img src={portfolio_6} alt="portfolio" className="img-fluid w-100" />
//                             <div className="S-img-div-overlay">
//                                 <div className="s-overlay-text">
//                                    <small><GoFileDirectoryFill className="folder-icon" />Web Design</small>
//                                    <h3 className="p-name">Project Name</h3>
//                                 </div>
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </Container>
//     );
// }

// export default ProjectSection;
