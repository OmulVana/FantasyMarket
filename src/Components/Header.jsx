import "../css/Header.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import marketImage from "../assets/Market.webp";
import { useAuth } from "../AuthContext";
import { useCart } from "../CartContext";

export default function Header() {
  const { user } = useAuth();
  const { cartItems } = useCart();
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/home" className="header-content">
          <img src={marketImage} alt="MarketImage" className="header-image" />
          <h1 id="site-name">Fantasy Black Market</h1>
        </Link>
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart" className="cart-link">
            Cart
            {cartItems.length > 0 && (
              <span className="cart-badge">{cartItems.length}</span>
            )}
          </NavLink>
          {user && user.role === "Vendor" && (
            <NavLink to="/vendor-dashboard">Vendor Dashboard</NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}
