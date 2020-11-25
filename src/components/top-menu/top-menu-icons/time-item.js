import React from "react";
import { Clock } from "../../../icons/top-menu-icons-array";
import styles from "./top-menu-icons.module.css";

const TimeItem = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.flexGroup}>
                <Clock />
                <span className={styles.clock}>8:00</span>
            </div>
        </div>
    );
};

export default TimeItem;
