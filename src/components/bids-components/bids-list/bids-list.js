import React, { useContext, useEffect } from "react";

// import styles from "./bids-list.module.css";

import BidsRow from "../bids-row/bids-row";
import { BidsContext } from "../../../context/bids/bids-context";

const BidsList = (props) => {
    const { getBids, loading, bids } = useContext(BidsContext);

    useEffect(() => {
        getBids();
    }, []);

    if (loading) {
        return <p>Загрузка...</p>;
    }

    if (bids !== []) {
        return bids.map((bid, i) => {
            return (
                <BidsRow
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
            );
        });
    }
};
export default BidsList;
