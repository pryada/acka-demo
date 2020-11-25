import React from "react";
import styles from "./row-with-columns.module.css";

const RowWithColumns = ({ widthArray, children, wrapperStyles, containerStyles }) => {
    const wrapper = `${styles.wrapper} ${wrapperStyles}`;
    const container = `${styles.container} ${containerStyles}`;

    return (
        <div className={wrapper}>
            <div className={container}>
                {React.Children.map(children, (child, i) => {
                    return React.cloneElement(child, {
                        style: { width: `${widthArray[i]}px` },
                    });
                })}
            </div>
        </div>
    );
};

export default RowWithColumns;
