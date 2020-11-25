import React from "react";
import styles from "./search-panel.module.css";
import { Search } from "../../icons/top-menu-icons-array";

const SearchPanel = (props) => {
    return (
        <div className={styles.container}>
            <span className={styles.searchBlock}>Поиск</span>
            <span className={styles.searchArea}>Иванов Евгений Александрович</span>
            <div className={styles.search}>
                <Search height={20} width={20} />
            </div>
        </div>
    );
};

export default SearchPanel;
