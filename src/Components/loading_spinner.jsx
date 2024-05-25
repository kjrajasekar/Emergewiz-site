
import '../CSS/Spinner.css'
import React, { useEffect } from 'react';
import { Container } from "react-bootstrap";


const Spinner = () => {
    useEffect(() => {
        const hideSpinner = () => {
            const spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        };
        setTimeout(hideSpinner, 1);

        return () => clearTimeout(hideSpinner);
    });

    return (
        <Container fluid="xxl">
           <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        </Container>
    );
};

export default Spinner;