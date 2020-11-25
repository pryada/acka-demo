import React from "react";
// import styles from "./button-custom.module.css";

const ButtonCustom = (props) => (
    <button className={props.buttonClassName} type="button">
        {props.children}
    </button>
);

export default ButtonCustom;
