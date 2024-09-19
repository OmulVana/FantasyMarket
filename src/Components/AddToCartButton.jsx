import React from "react";
import styles from '../css/AddToCartButton.module.css';
import { useCart } from "../CartContext";

export default function AddToCartButton({ item, context, onClick }) {

    const { addToCart } = useCart();

    const handleClick = (e) => {
        e.stopPropagation();
        if (item) {
            addToCart(item); 
        }
        if (onClick) onClick(e);
    };

    const className = `${styles.addToCartButton} ${styles[context] || ''}`;

    return (
        <button className={className} onClick={handleClick}>
            Add to Cart
        </button>
    );
}
