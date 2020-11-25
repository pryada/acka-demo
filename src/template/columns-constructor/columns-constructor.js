import React from "react";
import styles from "./columns-constructor.module.css";

const ColumnsConstructor = ({ children, wrapperStyles, containerStyles }) => {
    const wrapper = `${styles.wrapper} ${wrapperStyles}`;
    const container = `${styles.container} ${containerStyles}`;

    return (
        <div className={wrapper}>
            <div className={container}>
                {React.Children.map(children, (child, i) => {
                    return React.cloneElement(child, {});
                })}
            </div>
        </div>
    );
};

export default ColumnsConstructor;
