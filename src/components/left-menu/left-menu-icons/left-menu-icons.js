import React from "react";
import styles from "./left-menu-icons.module.css";
import LeftMenuIconsArray from "../../../icons/left-menu-icons-array";
import HumburgerIcon from "../../../icons/humburger-icon";
import SettingsIcon from "../../../icons/settings-icon";

const LeftMenuIcons = (props) => {
    return (
        <div className={styles.iconsColumn}>
            <div className={styles.iconsContainer}>
                <div className={styles.humburger}>
                    <HumburgerIcon className={styles.svgIcon} />
                </div>

                {LeftMenuIconsArray.map((item) => {
                    return (
                        <div className={styles.iconItem} key={item.title} title={item.title}>
                            <svg
                                className={styles.svgIcon}
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {item.svg}
                            </svg>
                        </div>
                    );
                })}
            </div>
            <div className={styles.settings}>
                <SettingsIcon className={styles.svgIcon} />
            </div>
        </div>
    );
};

export default LeftMenuIcons;
