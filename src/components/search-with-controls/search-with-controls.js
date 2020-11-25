import React from "react";
import styles from "./search-with-controls.module.css";
import { Feed, Grid } from "../../icons/top-menu-icons-array";
import SearchPanel from "../search-panel/search-panel";
import { NavLink } from "react-router-dom";

const SearchWithControls = ({ feedClass, gridClass }) => {
    return (
        <div className={styles.container}>
            <SearchPanel />
            <div className={styles.feedButtons}>
                <div className={styles.spaceBetween}>
                    <NavLink
                        to={`/bids`}
                        className={feedClass}
                        activeClassName={styles.active}
                        exact
                    >
                        {/* <NavLink to={`/bids`} className="nav-link" exact> */}
                        <Feed className={feedClass} />
                    </NavLink>
                    <NavLink
                        to={`/bids-group`}
                        className={gridClass}
                        activeClassName={styles.active}
                        exact
                    >
                        <Grid className={gridClass} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default SearchWithControls;
