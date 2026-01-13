// src/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <input type="checkbox" id="show-search" />
                <input type="checkbox" id="show-menu" />
                <label htmlFor="show-menu" className="menu-icon">
                    <i className="fas fa-bars"></i>
                </label>
                <div className="content">
                    <div className="logo">
                        <Link to="/">
                            {/* FIX: Imported variable का उपयोग करें */}
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <ul className="links">
                        <li><Link to="/" id="first">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/products">product</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                    </ul>
                </div>
                {/* ... Search Box HTML ... */}
                <label htmlFor="show-search" className="search-icon">
                    <i className="fas fa-search"></i>
                </label>
                <form action="#" className="search-box">
                    <input type="text" placeholder="Search" required />
                    <button type="submit" className="go-icon">
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </button>
                </form>
            </nav>
        </div>
    );
};

export default Header;
