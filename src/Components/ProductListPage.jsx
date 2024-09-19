import classes from '../css/ProductListPage.module.css'
import React from "react";
import ProductCard from './ProductCard';
import { MAGIC_ITEMS } from '../magicItems';

export default function ProductListPage() {
    const availableProducts = MAGIC_ITEMS;
    return (
        <div className={classes.availableSection}>
            <h2>Available Products</h2>
            <div className={classes.productsGrid}>
                {availableProducts.map(product => (
                    <ProductCard key={product.id} product={product} isPromo={false} />
                ))}
            </div>
        </div>
    );
}