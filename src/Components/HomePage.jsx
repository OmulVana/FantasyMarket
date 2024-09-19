import classes from '../css/HomePage.module.css';
import React from "react";
import ReactPlayer from 'react-player';
import ShopButton from './ShopButton';
import ProductCard from './ProductCard';
import { PROMOTION_ITEMS } from '../magicItems';

export default function HomePage() {
    const featuredProducts = PROMOTION_ITEMS; // Ensure PROMOTION_ITEMS has valid 'id' fields

    return (
        <div className={classes.homePage}>
            <div className={classes.hero}>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=B5yw58ty-bw&ab_channel=ExpertBread%F0%9F%93%9C%F0%9F%96%8B"
                    className={classes.heroVideo}
                    playing
                    loop
                    muted
                    width="40%"
                    height="80%"
                />
                <div className={classes.heroContent}>
                    <h1 className={classes.h1}>Welcome to the Fantasy Market</h1>
                    <p className={classes.p}>Discover magical items and otherworldly oddities</p>
                    <ShopButton text={'Shop Now'} />
                </div>
            </div>
            <div className={classes.featuredSection}>
                <h2>Featured Products</h2>
                <div className={classes.productsGrid}>
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} isPromo={true} />
                    ))}
                </div>
            </div>
        </div>
    );
}
