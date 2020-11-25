import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import styles from "./index.module.css";
import Routes from "./routes";

import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
    return (
        <React.StrictMode>
            <Router>
                {/* <TopBar /> */}
                <Routes />
            </Router>
        </React.StrictMode>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
