// src/ProductPage.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/style3.css';

const ProductPage = () => {
    // React State hooks for managing products and cart
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Helper function to create the correct absolute URL path for images
    // Assumes product images are in public/images/
    const resolveImagePath = (imagePath) => {
        // e.g., converts "images/p1.png" from JSON to "/images/p1.png"
        // The leading '/' ensures the browser looks in the public folder root.
        return `/${imagePath}`;
    };

    // --- FIX: Cart Visibility Logic (Vanilla JS to React) ---
    useEffect(() => {
        // This manually toggles the 'showCart' class on the <body> tag, 
        // which the original CSS relies on for the cart overlay to work correctly.
        if (isCartOpen) {
            document.body.classList.add('showCart');
        } else {
            document.body.classList.remove('showCart');
        }
    }, [isCartOpen]); // Rerun whenever isCartOpen changes


    // --- Utility Functions ---
    const getProductInfo = (id) => {
        return products.find(p => p.id === Number(id));
    };

    const addCartToMemory = (updatedCart) => {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    // --- Initial Data Loading (Replacing initApp and initial fetch) ---
    useEffect(() => {
        // 1. Fetch products.json (path /products.json is correct for public/ folder)
        fetch('/products.json')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => console.error("Could not fetch products.json", error));

        // 2. Load Cart from Memory 
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }

        // Clean up the body class when the component unmounts (e.g., user navigates away)
        return () => {
            document.body.classList.remove('showCart');
        };
    }, []);

    // --- Cart State Persistence (Replacing addCartToMemory call) ---
    useEffect(() => {
        addCartToMemory(cart);
    }, [cart]);


    // --- Event Handlers (Replacing addCart and listProductHTML event listener) ---
    const addToCart = (productId) => {
        const id = Number(productId);
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(item => item.product_id === id);
            let updatedCart;
            if (existingItemIndex > -1) {
                // If product exists, increase quantity
                updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity += 1;
            } else {
                // If not, add new item
                updatedCart = [...prevCart, { product_id: id, quantity: 1 }];
            }
            return updatedCart;
        });
    };

    // --- Change Quantity Handler (Replacing changeQuantityCart and listCartHTML event listener) ---
    const changeQuantityCart = (productId, type) => {
        const id = Number(productId);
        setCart(prevCart => {
            const positionItemInCart = prevCart.findIndex((value) => value.product_id === id);
            let updatedCart = [...prevCart];
            if (positionItemInCart >= 0) {
                let newQuantity = updatedCart[positionItemInCart].quantity;
                if (type === 'plus') {
                    newQuantity += 1;
                } else { // 'minus'
                    newQuantity -= 1;
                }
                if (newQuantity > 0) {
                    updatedCart[positionItemInCart].quantity = newQuantity;
                } else {
                    // Remove item if quantity drops to 0 or less
                    updatedCart.splice(positionItemInCart, 1);
                }
            }
            return updatedCart;
        });
    };

    return (
        <>
            {/* We use 'container' for general layout, but 'showCart' class is managed on <body> */}
            <div className="container">
                <header>
                    <div className="showcart"></div>
                    <div className="title"></div>
                    {/* Toggle isCartOpen state */}
                    <div className="icon-cart" onClick={() => setIsCartOpen(!isCartOpen)}>
                        {/* SVG code for the cart icon */}
                        <svg
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
                            />
                        </svg>
                        <span>{totalQuantity}</span>
                    </div>
                </header>

                <div className="listProduct">
                    {/* Replacing addDataToHTML and the forEach loop */}
                    {products.length > 0 ? (
                        products.map(product => (
                            <div className="item" data-id={product.id} key={product.id}>
                                {/* FIX: Use helper function to get correct image path */}
                                <img src={resolveImagePath(product.image)} alt={product.name} />
                                <h2>{product.name}</h2>
                                <div className="price">₹{product.price}</div>
                                <button
                                    className="addCart"
                                    onClick={() => addToCart(product.id)} // Calls React state handler
                                >
                                    Add To Cart
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>Loading products...</p>
                    )}
                </div>
            </div>

            <div className="cartTab">
                <h1>Shopping Cart</h1>
                <div className="listCart">
                    {/* Replacing addCartToHTML and the forEach loop */}
                    {cart.length > 0 ? (
                        cart.map(item => {
                            const productInfo = getProductInfo(item.product_id);
                            if (!productInfo) return null;

                            return (
                                <div className="item" data-id={item.product_id} key={item.product_id}>
                                    <div className="image">
                                        {/* FIX: Apply same path logic to cart images */}
                                        <img src={resolveImagePath(productInfo.image)} alt={productInfo.name} />
                                    </div>
                                    <div className="name">{productInfo.name}</div>
                                    <div className="totalPrice">
                                        ₹{productInfo.price * item.quantity}
                                    </div>
                                    <div className="quantity">
                                        {/* Minus button */}
                                        <span
                                            className="minus"
                                            onClick={() => changeQuantityCart(item.product_id, 'minus')}
                                        >
                                            &lt;
                                        </span>
                                        <span>{item.quantity}</span>
                                        {/* Plus button */}
                                        <span
                                            className="plus"
                                            onClick={() => changeQuantityCart(item.product_id, 'plus')}
                                        >
                                            &gt;
                                        </span>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                </div>
                <div className="btn">
                    {/* Replacing closeCart event listener */}
                    <button className="close" onClick={() => setIsCartOpen(false)}>
                        CLOSE
                    </button>
                    <Link to="/login">
                        <button>Check Out</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ProductPage;