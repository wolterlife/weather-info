import React from "react";
import styles from "./content.module.css"
import InputCity from "../InputCity/InputCity";
import TimeAndDate from "../TimeAndDate/TimeAndDate";

const Content = () => {
    return (
        <div className={styles.content}>
            <InputCity />
            <TimeAndDate />
        </div>
    )
}

export default Content;
