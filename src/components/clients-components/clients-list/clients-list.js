import React, { useContext, useEffect } from "react";

// import styles from "./clients-list.module.css";

import ClientsRow from "../clients-row/clients-row";
import { ClientsContext } from "../../../context/clients/clients-context";

const ClientsList = (props) => {
    const { getClients, clients, loading } = useContext(ClientsContext);

    useEffect(() => {
        getClients();
    }, []);

    if (loading) {
        return <p>Загрузка...</p>;
    }
    if (clients !== []) {
        return clients.map((client, i) => {
            return (
                <ClientsRow
                    checked={client.checked}
                    id={client.id}
                    fio={client.fio}
                    phone={client.phone}
                    createdAt={client.createdAt}
                    objects={client.objects}
                    accountable={client.accountable}
                    key={i}
                />
            );
        });
    }
};
export default ClientsList;
