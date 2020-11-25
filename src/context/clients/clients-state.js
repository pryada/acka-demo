import React, { useReducer } from "react";
import { ClientsContext } from "./clients-context";
import { ClientsReducer } from "./clients-reducer";
import { SET_LOADING, GET_CLIENTS } from "../types";

import clientsJSON from "../../mock-data/clients-data.json";

export const ClientsState = ({ children }) => {
    const initialState = {
        clients: [],
        loading: false,
    };
    const [state, dispatch] = useReducer(ClientsReducer, initialState);

    // Странновато тут асинк-эвэйтить на мок данных, но это же демка.
    // В реальности здесь будет какой-то запрос на внешний сервер.
    // Будем считать это долгим обращением к диску.
    const getClients = async () => {
        setLoading();
        const clients = await clientsJSON.clientsData;
        dispatch({
            type: GET_CLIENTS,
            payload: clients,
        });
    };

    const setLoading = () => dispatch({ type: SET_LOADING });

    const { clients, loading } = state;
    return (
        <ClientsContext.Provider
            value={{
                getClients,
                setLoading,
                clients,
                loading,
            }}
        >
            {children}
        </ClientsContext.Provider>
    );
};
