import React from "react";
import { Exit } from "../../../icons/top-menu-icons-array";
import styles from "./top-menu-icons.module.css";

const ExitIcon = (props) => {
    return (
        <div className={styles.item}>
            <Exit />
        </div>
    );
};

export default ExitIcon;
