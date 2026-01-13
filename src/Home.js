// src/Home.js

import React from 'react';
import roomImg from './assets/images/room.jpg';

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="main-text">
                    <h1>
                        Discover The Best <br />
                        Furniture For You
                    </h1>
                </div>
            </div>

            <section className="about" id="about">
                <div className="about-img">
                    {/* FIX: Imported roomImg का उपयोग करें */}
                    <img src={roomImg} alt="Room" />
                </div>
                <div className="about-text">
                    <h3>Furniture service About us</h3>
                    <p>
                        Furniture website design includes creating digital platforms designed for displaying and marketing various
                        furniture product types. These websites aim to provide consumers with a pleasurable and instructive online
                        experience by enabling them to browse, research, and purchase furniture products from the comfort of their
                        homes
                    </p>
                </div>
            </section>

            <section className="contact" id="contact">
                <div className="content-text">
                    <h2>
                        <span>Contact us </span>
                    </h2>
                    <p></p>
                    <div className="list">
                        <li>
                            {/* FIX: Accessibility - tel: protocol */}
                            <a href="tel:9372576945">9372576945</a>
                        </li>
                        <li>
                            {/* FIX: Accessibility - mailto: protocol */}
                            <a href="mailto:hemantvishwakarma200@gmail.com">hemantvishwakarma200@gmail.com</a>
                        </li>
                        {/* REMOVED: Empty anchor link */}
                    </div>
                </div>

                <div className="contact-form">
                    <form action="#">
                        <input type="name" placeholder="Name" required />
                        <input type="number" placeholder="Phone" required />
                        <input type="email" placeholder="Email" required />
                        <textarea name="" id="" cols="35" rows="10" placeholder="Message"></textarea>
                        <input type="submit" value="Send" className="submit" required />
                    </form>
                </div>
            </section>
        </>
    );
};

export default Home;