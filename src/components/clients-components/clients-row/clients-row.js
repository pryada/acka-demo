import React from "react";
import styles from "./clients-row.module.css";

import RowWithColumns from "../../../template/row-with-columns/row-with-columns";
import { WIDTH_FOR_CLIENTS } from "../../../helpers/const-values";

const ClientsRow = ({ checked, id, fio, phone, createdAt, objects, accountable }) => {
    return (
        <RowWithColumns
            widthArray={WIDTH_FOR_CLIENTS}
            wrapperStyles={styles.wrapper}
            containerStyles={styles.container}
        >
            <div>
                <div className={styles.checkBox}>{checked}</div>
            </div>
            <div>{id}</div>
            <div>{fio}</div>
            <div>{phone}</div>
            <div>{createdAt}</div>
            <div>{objects}</div>
            <div>{accountable}</div>
            <div></div>
        </RowWithColumns>
    );
};

export default ClientsRow;
