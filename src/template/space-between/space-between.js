import React from "react";
import styles from "./space-between.module.css";

const SpaceBetween = ({ left, right }) => (
    <div className={styles.container}>
        <div>{left}</div>
        <div>{right}</div>
    </div>
);

export default SpaceBetween;
