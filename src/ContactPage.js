// src/ContactPage.js

import React from 'react';

const ContactPage = () => {
    return (
        <section className="contact" id="contact">
            <div className="content-text">
                <h2>
                    <span>Contact us</span>
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
    );
};

export default ContactPage;