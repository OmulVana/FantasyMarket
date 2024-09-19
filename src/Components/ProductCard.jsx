import React from "react"
import { useNavigate } from 'react-router-dom';
import styles from '../css/ProductCard.module.css'
import promoImage from '../assets/Promo.png'
import AddToCartButton from "./AddToCartButton"

export default function ProductCard({ product, isPromo }) {

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/products/${product.id}`);
    };

    const handleButtonClick = (e) => {
        e.stopPropagation();
    };
    return (
        <div className={styles.productCard} onClick={handleCardClick}>
            {isPromo && <img src={promoImage} alt="Promo" className={styles.promoLogo} />}
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <h3 className={styles.productName}>{product.name}</h3>
            <h3 className={styles.productCategory}>{product.category}</h3>
            <p className={styles.productPrice}>{product.price}</p>
            <div className={styles.buttonWrapper}>
                <AddToCartButton item={product} context={isPromo ? 'promo' : 'productPage'} onClick={handleButtonClick} />
            </div>
        </div>
    )
}