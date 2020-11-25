import { SET_LOADING, GET_CLIENTS } from "../types";

const handlers = {
    [GET_CLIENTS]: (state, { payload }) => ({
        ...state,
        clients: payload,
        loading: false,
    }),
    [SET_LOADING]: (state) => ({
        ...state,
        loading: true,
    }),
    DEFAULT: (state) => state,
};

export const ClientsReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
};
