import React from "react";
import styles from '../components/Hero.module.css';


export default function Hero() {

    return (
        <div className={styles.container}>
            <img src="../images/photo-grid.png" />
            <h1>Online Experiences</h1>
            <h4>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </h4>
        </div>
    )
};