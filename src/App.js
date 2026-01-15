// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ProductPage from './ProductPage';
const App = () => {
    return (
        <Router>
            <Header /> {/* Header is common to all pages */}
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/products" element={<ProductPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;