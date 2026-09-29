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
        return <div className={styles.notFound}>Product not found</div>;
    }
    return (
        <div className={styles.productPage}>
            <div className={styles.productImageSection}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
            </div>

            <div className={styles.productInfoSection}>
                {product.category && <span className={styles.productCategory}>{product.category}</span>}
                <h1 className={styles.productTitle}>{product.name}</h1>
                <p className={styles.productPrice}>{product.price} <span>Gold</span></p>
                <p className={styles.productDescription}>{product.description}</p>
                <div className={styles.addToCartWrapper}>
                    <AddToCartButton item={product} context="productPage" />
                </div>
            </div>
        </div>
    );
}
