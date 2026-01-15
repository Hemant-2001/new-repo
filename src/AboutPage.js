// src/AboutPage.js

import React from 'react';
import roomImg from './assets/images/room.jpg';

const AboutPage = () => {
    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src={roomImg} alt="Room" />
            </div>
            <div className="about-text">
                <h3>Furniture service About us</h3>
                <p>
                    Furniture website design includes creating digital platforms designed for displaying and marketing various
                    furniture product types. These websites aim to provide consumers with a pleasurable and instructive online
                    experience by enabling them to browse, research, and purchase furniture products from the comfort of their homes
                </p>
            </div>
        </section>
    );
};

export default AboutPage;