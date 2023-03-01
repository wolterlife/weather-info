import React from "react";
import styles from "./content.module.css"
import InputCity from "../InputCity/InputCity";
import TimeAndDate from "../TimeAndDate/TimeAndDate";
import GoogleEvents from "../GoogleEvents/GoogleEvents";
import WeatherPanel from "../WeatherPanel/WeatherPanel";

const Content = () => {
    return (
        <div className={styles.content}>
            <InputCity />
            <TimeAndDate />
            <GoogleEvents />
            <WeatherPanel />
        </div>
    )
}

export default Content;
