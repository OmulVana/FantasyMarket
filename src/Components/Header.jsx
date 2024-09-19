import '../css/Header.css'
import React from "react"
import { Link } from 'react-router-dom';
import marketImage from '../assets/Market.webp';

export default function Header() {
    return (
        <header>
            <dir className='header-content'>
                <img src={marketImage} alt="MarketImage" className='header-image' />
                <h1 id="site-name">Fantasy Black Market</h1>
            </dir>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </header>
    )
};