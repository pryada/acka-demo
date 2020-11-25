import React from "react";
import styles from "./clients-page.module.css";
import LeftMenuIcons from "../../components/left-menu/left-menu-icons/left-menu-icons";
import LeftMenu from "../../components/left-menu/left-menu";
import TopMenu from "../../components/top-menu/top-menu";
import Navigation from "../../components/navigation/navigation";
import PageContainer from "../../template/page-container/page-container";

import TitleOfTheClients from "../../components/clients-components/title-of-the-clients/title-of-the-clients";
import ClientsList from "../../components/clients-components/clients-list/clients-list";
import ControlPanelForClients from "../../components/clients-components/control-panel-for-clients/control-panel-for-clients";

function ClientsPage() {
    return (
        <div className={styles.app}>
            <LeftMenu>
                <LeftMenuIcons />
            </LeftMenu>
            <TopMenu />
            <PageContainer>
                <Navigation />
                <ControlPanelForClients />
                <TitleOfTheClients />
                <ClientsList />
            </PageContainer>
        </div>
    );
}

export default ClientsPage;
