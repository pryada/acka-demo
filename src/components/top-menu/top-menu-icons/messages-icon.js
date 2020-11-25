import React from "react";
import { Messages } from "../../../icons/top-menu-icons-array";
import styles from "./top-menu-icons.module.css";

const MessagesIcon = (props) => {
    return (
        <div className={styles.item}>
            <Messages />
        </div>
    );
};

export default MessagesIcon;
