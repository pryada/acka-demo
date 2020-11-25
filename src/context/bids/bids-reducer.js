import { SET_LOADING, GET_BIDS, GET_GROUPED_BIDS } from "../types";

const handlers = {
    [GET_BIDS]: (state, { payload }) => ({
        ...state,
        bids: payload,
        loading: false,
    }),
    [GET_GROUPED_BIDS]: (state, { payload }) => ({
        ...state,
        groupedBids: payload,
        loading: false,
    }),
    [SET_LOADING]: (state) => ({
        ...state,
        loading: true,
    }),
    DEFAULT: (state) => state,
};

export const BidsReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
};
