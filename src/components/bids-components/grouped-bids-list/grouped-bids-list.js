import React, { useContext, useEffect } from "react";

// import styles from "./grouped-bids-list.module.css";

import BidsPlate from "../bids-plate/bids-plate";
import { BidsContext } from "../../../context/bids/bids-context";
import BidsGroupedColumns from "../bids-grouped-columns/bids-grouped-columns";

const GroupedBidsList = (props) => {
    const { getGroupedBids, groupedBids, loading } = useContext(BidsContext);

    useEffect(() => {
        getGroupedBids("status");
    }, []);

    if (
        loading ||
        groupedBids === undefined ||
        groupedBids === {} ||
        Object.keys(groupedBids).length === 0
    ) {
        return <p>Загрузка...</p>;
    }

    const arrayToBidsPlate = (status) => {
        console.log("grouped-component", groupedBids);
        return groupedBids[status].map((bid, i) => (
            <BidsPlate
                date={bid.date}
                phone={bid.phone}
                responsible={bid.responsible}
                status={bid.status}
                duration={bid.duration}
                record={bid.record}
                buttonLabel={bid.buttonLabel}
                backgroundPlate={bid.backgroundPlate}
                key={i}
            />
        ));
    };
    return (
        <BidsGroupedColumns
            success={arrayToBidsPlate("Успешно")}
            busyTone={arrayToBidsPlate("Занято")}
            didntPickUp={arrayToBidsPlate("Не взял трубку")}
        />
    );
};
export default GroupedBidsList;
