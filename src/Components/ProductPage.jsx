import React from "react";
import { useParams } from 'react-router-dom';
import styles from '../css/ProductPage.module.css'
import { MAGIC_ITEMS, PROMOTION_ITEMS } from '../magicItems';
import AddToCartButton from "./AddToCartButton";

export default function ProductPage() {
    const { productId } = useParams();
    const allItems = [...MAGIC_ITEMS, ...PROMOTION_ITEMS]; // Combine both arrays
    const product = allItems.find(item => item.id === productId); // Search for the product in the combined array

    if (!product) {
        return <div>Product not found</div>;
    }
    return (
        <div className={styles.productPage}>
            {/* Left section: Image and title */}
            <div className={styles.productImageSection}>
                <h1 className={styles.productTitle}>{product.name}</h1>
                <img src={product.image} alt={product.name} className={styles.productImage} />

            </div>

            {/* Right section: Price, Add to Cart, and description */}
            <div className={styles.productInfoSection}>
                <p className={styles.productPrice}>{product.price} Gold</p>
                <p className={styles.productDescription}>{product.description}</p>
                <div className={styles.addToCartWrapper}>
                    <AddToCartButton item={product} context="productPage" />
                </div>
            </div>
        </div>
    );
}