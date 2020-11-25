import React from "react";
import styles from "./control-panel-for-clients.module.css";
import { Share, Trash } from "../../../icons/top-menu-icons-array";
import SearchPanel from "../../search-panel/search-panel";
import ButtonCustom from "../../../template/buttons/button-custom/button-custom";
import IconSpan from "../../../template/icon-span/icon-span";

const ControlPanelForClients = (props) => {
    return (
        <div className={styles.container}>
            <ButtonCustom buttonClassName={styles.greenButton}>
                <span className={styles.createText}>Создать клиента</span>
            </ButtonCustom>
            <div className={styles.searchWrapper}>
                <SearchPanel />
            </div>
            <ButtonCustom buttonClassName={styles.greenButton}>
                <IconSpan
                    icon={<Share fill="#fff" />}
                    spanText="Передать"
                    textStyle={styles.shareButton}
                />
            </ButtonCustom>
            <ButtonCustom buttonClassName={styles.whiteButton}>
                <IconSpan icon={<Trash />} spanText="На удаление" textStyle={styles.deleteButton} />
            </ButtonCustom>
        </div>
    );
};

export default ControlPanelForClients;
