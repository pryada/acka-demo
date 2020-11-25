import React from "react";
import styles from "./top-menu-icons.module.css";
import avatar from "../../../assets/images/top_menu/image_109.png";

const DropdownMenu = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.flexGroup}>
                <img src={avatar} alt="" />
                <span className={styles.name}>Саламатин Дмитрий</span>
            </div>
        </div>
    );
};

export default DropdownMenu;
