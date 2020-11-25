import React from "react";
import styles from "./audio-container.module.css";

const AudioContainer = ({ duration }) => {
    return (
        <div className={styles.container}>
            <div className={styles.circle} />
            <input type="range" min="0" max="100" value="50" />
            <span className={styles.duration}>{duration}</span>
        </div>
    );
};

export default AudioContainer;
