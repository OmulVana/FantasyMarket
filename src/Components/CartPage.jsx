import React from 'react';
import { useCart } from '../CartContext';
import styles from '../css/CartPage.module.css';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
    const { cartItems } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
    };

    if (cartItems.length === 0) {
        return (
            <div className={styles.cartPage}>
                <h1 className={styles.title}>Shopping Cart</h1>
                <p className={styles.emptyText}>Your cart is empty.</p>
            </div>
        );
    }

    return (
        <div className={styles.cartPage}>
            <h1 className={styles.title}>Shopping Cart</h1>
            <div className={styles.cartList}>
                {cartItems.map(item => (
                    <div key={item.id} className={styles.cartItem}>
                        <div className={styles.imageContainer}>
                            <h3 className={styles.itemTitle}>{item.name}</h3>
                            <img src={item.image} alt={item.name} className={styles.cartImage} />
                        </div>
                        <div className={styles.itemDetails}>
                            <p>{item.description}</p>
                            <p className={styles.price}>{item.price} Gold</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handleCheckout} className={styles.checkoutButton}>Checkout</button>
        </div>
    );
}
