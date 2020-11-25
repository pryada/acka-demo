import React from "react";
import styles from "./top-menu.module.css";

import MessagesIcon from "./top-menu-icons/messages-icon";
import TimeItem from "./top-menu-icons/time-item";
import SearchItem from "./top-menu-icons/search-item";
import DropdownMenu from "./top-menu-icons/dropdown-menu";
import ExitIcon from "./top-menu-icons/exit-icon";

const TopMenu = (props) => {
    return (
        <nav className={styles.container}>
            <ExitIcon />
            <MessagesIcon />
            <DropdownMenu />
            <TimeItem />
            <SearchItem />
        </nav>
    );
};

export default TopMenu;
