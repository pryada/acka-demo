import React from "react";

import styles from "./title-of-the-clients.module.css";
import RowWithColumns from "../../../template/row-with-columns/row-with-columns";
import { WIDTH_FOR_CLIENTS } from "../../../helpers/const-values";
import { UpDownArrows } from "../../../icons/top-menu-icons-array";

const TitleOfTheClients = (props) => (
    <RowWithColumns
        widthArray={WIDTH_FOR_CLIENTS}
        wrapperStyles={styles.wrapper}
        containerStyles={styles.container}
    >
        <div></div>
        <div>ID</div>
        <div>ФИО</div>
        <div>Телефон</div>
        <div>Дата создания</div>
        <div>Кол-во объектов</div>
        <div>Ответственный</div>
        <div>
            <UpDownArrows />
        </div>
    </RowWithColumns>
);

export default TitleOfTheClients;
