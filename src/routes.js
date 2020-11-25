import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

// import App from "./App";
import { BidsState } from "./context/bids/bids-state";
import { ClientsState } from "./context/clients/clients-state";
import BidsPage from "./pages/bids-page/bids-page";
import BidsWithGroupPage from "./pages/bids-w-group-page/bids-w-group-page";
import ClientsPage from "./pages/clients-page/clients-page";

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <BidsState>
                    <ClientsState>
                        <Route path="/" exact render={() => <Redirect to="/bids" />} />
                        <Route path="/bids" exact component={BidsPage} />
                        <Route path="/bids-group" component={BidsWithGroupPage} />
                        <Route path="/clients" exact component={ClientsPage} />
                    </ClientsState>
                </BidsState>
            </Switch>
        </BrowserRouter>
    );
};
