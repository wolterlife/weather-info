import React from "react";
import styles from "./content.module.css"
import InputCity from "../InputCity/InputCity";

const Content = () => {
    return (
        <div className={styles.content}>
            <InputCity />
        </div>
    )
}

export default Content;
