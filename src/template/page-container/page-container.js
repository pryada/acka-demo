import React from "react";
import styles from "./page-container.module.css";

const PageContainer = (props) => <div className={styles.container}>{props.children}</div>;

export default PageContainer;
