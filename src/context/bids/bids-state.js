import React, { useReducer } from "react";
import { BidsContext } from "./bids-context";
import { BidsReducer } from "./bids-reducer";
import { SET_LOADING, GET_BIDS, GET_GROUPED_BIDS } from "../types";

import bidsJSON from "../../mock-data/bids-data.json";
import GroupBy from "../../helpers/group-by";

export const BidsState = ({ children }) => {
    const initialState = {
        bids: [],
        groupedBids: {},
        loading: false,
    };
    const [state, dispatch] = useReducer(BidsReducer, initialState);

    // Странновато тут асинк-эвэйтить на мок данных, но это же демка.
    // В реальности здесь будет какой-то запрос на внешний сервер.
    // Будем считать это долгим обращением к диску.
    const getBids = async () => {
        setLoading();
        const bids = await bidsJSON.bidsData;
        dispatch({
            type: GET_BIDS,
            payload: bids,
        });
    };

    const getGroupedBids = async (value) => {
        setLoading();

        const groupedBids = await GroupBy(value)(bidsJSON.bidsData);
        console.log("state", groupedBids);
        dispatch({
            type: GET_GROUPED_BIDS,
            payload: groupedBids,
        });
    };

    const setLoading = () => dispatch({ type: SET_LOADING });

    const { bids, loading, groupedBids } = state;
    return (
        <BidsContext.Provider
            value={{
                getBids,
                setLoading,
                getGroupedBids,
                bids,
                groupedBids,
                loading,
            }}
        >
            {children}
        </BidsContext.Provider>
    );
};
