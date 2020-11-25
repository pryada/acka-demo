import React from "react";
import styles from "./icon-span.module.css";

const IconSpan = ({ icon, spanText, textStyle }) => {
    console.log(icon);

    return (
        <div className={styles.container}>
            {icon}
            <span className={textStyle}>{spanText}</span>
        </div>
    );
};

export default IconSpan;
