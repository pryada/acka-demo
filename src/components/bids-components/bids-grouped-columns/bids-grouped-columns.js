import React from "react";
import styles from "./bids-grouped-columns.module.css";

import ColumnsConstructor from "../../../template/columns-constructor/columns-constructor";

const BidsGroupedColumns = ({ success, busyTone, didntPickUp }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <ColumnsConstructor
                    wrapperStyles={styles.wrapper}
                    containerStyles={styles.container}
                >
                    <div className={styles.column}>{didntPickUp}</div>
                    <div className={styles.column}>{busyTone}</div>
                    <div className={styles.column}>{success}</div>
                </ColumnsConstructor>
            </div>
        </div>
    );
};

export default BidsGroupedColumns;
