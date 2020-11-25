import React from "react";
import styles from "./bids-page.module.css";
import LeftMenuIcons from "../../components/left-menu/left-menu-icons/left-menu-icons";
import LeftMenu from "../../components/left-menu/left-menu";
import TopMenu from "../../components/top-menu/top-menu";
import Navigation from "../../components/navigation/navigation";
import PageContainer from "../../template/page-container/page-container";

import TitleOfBids from "../../components/bids-components/title-of-bids/title-of-bids";
import BidsList from "../../components/bids-components/bids-list/bids-list";
import SearchWithControls from "../../components/search-with-controls/search-with-controls";

function BidsPage() {
    return (
        <div className={styles.app}>
            <LeftMenu>
                <LeftMenuIcons />
            </LeftMenu>
            <TopMenu />
            <PageContainer>
                <Navigation />
                <SearchWithControls />
                <TitleOfBids />
                <BidsList />
            </PageContainer>
        </div>
    );
}

export default BidsPage;
