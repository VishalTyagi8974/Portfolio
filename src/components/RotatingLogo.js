import React from "react";
import styles from "./RotatingLogo.module.css";

const RotatingLogo = () => {
    return (
        <div className={`${styles.logoContainer} mx-3 mx-md-4`}>
            <div className={styles.vLogo}>
                <span className={styles.v}>V</span>
            </div>ishal Tyagi
        </div>
    );
};

export default RotatingLogo;
