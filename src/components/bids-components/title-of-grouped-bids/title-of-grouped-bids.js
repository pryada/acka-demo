import React from "react";
import styles from "./title-of-grouped-bids.module.css";
import RowWithColumns from "../../../template/row-with-columns/row-with-columns";
import { WIDTH_FOR_GROUPED_BIDS } from "../../../helpers/const-values";
import SpaceBetween from "../../../template/space-between/space-between";

const TitleOfGroupedBids = (props) => (
    <RowWithColumns widthArray={WIDTH_FOR_GROUPED_BIDS}>
        <div className={styles.red}>
            <SpaceBetween left={"Не взял трубку"} right={"20"} />
        </div>
        <div className={styles.green}>
            <SpaceBetween left={"Занято"} right={"20"} />
        </div>
        <div className={styles.blue}>
            <SpaceBetween left={"Успешно"} right={"16"} />
        </div>
    </RowWithColumns>
);

export default TitleOfGroupedBids;
