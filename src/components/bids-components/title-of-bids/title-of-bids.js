import React from "react";

import styles from "./title-of-bids.module.css";
import RowWithColumns from "../../../template/row-with-columns/row-with-columns";
import { WIDTH_FOR_BIDS } from "../../../helpers/const-values";

const TitleOfBids = (props) => (
    <RowWithColumns
        widthArray={WIDTH_FOR_BIDS}
        wrapperStyles={styles.wrapper}
        containerStyles={styles.container}
    >
        <div>Дата звонка</div>
        <div>Телефон</div>
        <div>Ответственный</div>
        <div>Статус</div>
        <div>Длительность</div>
        <div className={styles.record}>Запись</div>
    </RowWithColumns>
);

export default TitleOfBids;
