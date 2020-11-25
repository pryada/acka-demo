import React from "react";
import AudioContainer from "../../../template/audio-container/audio-container";
import FlatButton from "../../../template/flat-button/flat-button";
import styles from "./bids-plate.module.css";
import { Person, Phone, Calendar, Eye } from "../../../icons/bids-plate-icons";
import { Clock } from "../../../icons/top-menu-icons-array";

const BidsPlate = ({ date, phone, responsible, record, buttonLabel, backgroundPlate }) => {
    const wrapper = `${styles.wrapper} ${colors[backgroundPlate]}`;

    let longRecord;
    if (record === "") {
        longRecord = "0 сек.";
    } else {
        longRecord = "25 м. 23 сек.";
    }

    return (
        <div className={wrapper}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <Person />
                </div>
                <div className={styles.row}>
                    <Phone />
                    <span className={styles.phone}>{phone}</span>
                </div>
                <div className={styles.row}>
                    <Calendar />
                    <span>{date}</span>
                </div>
                <div className={styles.row}>
                    <Eye />
                    <span>{responsible}</span>
                </div>
                <div className={styles.row}>
                    <Clock width={"15px"} height={"15px"} fill={"#BFBFBF"} />
                    <span>{longRecord}</span>
                </div>
                <div className={styles.row}>
                    {record === "" ? (
                        <div className={styles.emptyAudio}></div>
                    ) : (
                        <AudioContainer duration={record} />
                    )}
                </div>
            </div>
            <div className={styles.footer}>
                <FlatButton>{buttonLabel}</FlatButton>
            </div>
        </div>
    );
};

const colors = {
    success: styles.success,
    didntPickUp: styles.didntPickUp,
    busyTone: styles.busyTone,
};

export default BidsPlate;
