import React from "react";
import styles from '../css/NotFound.module.css'

export default function NotFound() {
    return (
        <div className={styles.notFound}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    )
}