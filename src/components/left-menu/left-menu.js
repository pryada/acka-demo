import React from "react";
import styles from "./left-menu.module.css";

const LeftMenu = (props) => <div className={styles.leftMenu}>{props.children}</div>;

export default LeftMenu;
