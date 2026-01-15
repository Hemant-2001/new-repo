// src/Footer.js

import React from 'react';
import logo from './assets/images/logo.png';
// import upArrow from './assets/images/up-arrow.png';

const Footer = () => {

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="footer">
            <div className="footer-content">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <p>
                    To provide customers with a seamless and
                    <br /> enjoyable shopping experience, the design should also represent the appearance and feel of the brand
                </p>
                {/* <div className="socail-links">
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-pinterest-p"></i>
                </div> */}
                <div class="socail-links">

                    <button type="button">
                        <i class="fab fa-facebook-f"></i>
                    </button>

                    <button type="button">
                        <i class="fab fa-twitter"></i>
                    </button>

                    <button type="button">
                        <i class="fab fa-instagram"></i>
                    </button>

                    <button type="button">
                        <i class="fab fa-linkedin-in"></i>
                    </button>

                </div>
            </div>
            <hr />
            <button onClick={scrollToTop} className="arrow">
                <i>
                </i>
            </button>
        </footer>
    );
};

export default Footer;