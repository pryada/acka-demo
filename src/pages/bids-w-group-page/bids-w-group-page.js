import React from "react";
import styles from "./bids-w-group-page.module.css";
import LeftMenuIcons from "../../components/left-menu/left-menu-icons/left-menu-icons";
import LeftMenu from "../../components/left-menu/left-menu";
import TopMenu from "../../components/top-menu/top-menu";
import Navigation from "../../components/navigation/navigation";
import PageContainer from "../../template/page-container/page-container";

import SearchWithControls from "../../components/search-with-controls/search-with-controls";
import TitleOfGroupedBids from "../../components/bids-components/title-of-grouped-bids/title-of-grouped-bids";
import GroupedBidsList from "../../components/bids-components/grouped-bids-list/grouped-bids-list";

function BidsWithGroupPage() {
    return (
        <div className={styles.app}>
            <LeftMenu>
                <LeftMenuIcons />
            </LeftMenu>
            <TopMenu />
            <PageContainer>
                <Navigation />
                <SearchWithControls />
                <TitleOfGroupedBids />
                <GroupedBidsList />
            </PageContainer>
        </div>
    );
}

export default BidsWithGroupPage;
