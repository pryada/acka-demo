import React from "react";
import AudioContainer from "../../../template/audio-container/audio-container";
import FlatButton from "../../../template/flat-button/flat-button";
import styles from "./bids-row.module.css";

import RowWithColumns from "../../../template/row-with-columns/row-with-columns";
import { WIDTH_FOR_BIDS } from "../../../helpers/const-values";

const BidsRow = ({
    date,
    phone,
    responsible,
    status,
    duration,
    record,
    buttonLabel,
    backgroundPlate,
}) => {
    const wrapper = `${styles.wrapper} ${colors[backgroundPlate]}`;
    return (
        <RowWithColumns
            widthArray={WIDTH_FOR_BIDS}
            wrapperStyles={wrapper}
            containerStyles={styles.container}
        >
            <div>{date}</div>
            <div>{phone}</div>
            <div>{responsible}</div>
            <div>{status}</div>
            <div>{duration}</div>
            {record === "" ? (
                <div></div>
            ) : (
                <div>
                    <AudioContainer duration={record} />
                </div>
            )}
            <FlatButton>{buttonLabel}</FlatButton>
        </RowWithColumns>
    );
};

const colors = {
    success: styles.success,
    didntPickUp: styles.didntPickUp,
    busyTone: styles.busyTone,
};

export default BidsRow;
