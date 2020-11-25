import React from "react";
import { Search } from "../../../icons/top-menu-icons-array";
import styles from "./top-menu-icons.module.css";

const SearchItem = (props) => {
    return (
        <div className={styles.item}>
            <Search />
        </div>
    );
};

export default SearchItem;
