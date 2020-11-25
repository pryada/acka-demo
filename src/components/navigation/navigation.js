import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";

const Navigation = (props) => {
    return (
        <nav className={styles.container}>
            <div className={styles.link}>
                <span>
                    <NavLink to="/bids" activeClassName={styles.active}>
                        Заявки
                    </NavLink>
                </span>
            </div>
            <div className={styles.link}>
                <span>
                    <NavLink to="/facilitys/">Объекты</NavLink>
                </span>
            </div>
            <div className={styles.link}>
                <span>
                    <NavLink to="/clients/" activeClassName={styles.active}>
                        Клиенты
                    </NavLink>
                </span>
            </div>
            <div className={styles.link}>
                <span>
                    <NavLink to="/deals">Сделки</NavLink>
                </span>
            </div>
        </nav>
    );
};

export default Navigation;
