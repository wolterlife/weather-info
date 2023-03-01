import styles from "./WeatherPanel.module.css"

const WeatherPanel = () => {
    return (
        <div className={styles.panel}>
            <div className={styles.leftContainer}>
                <img className={styles.imgMain} src="/img/sun.png" alt="Sun"/>
                <div className={styles.todayContainer}>
                    <p className={styles.textToday}>Today</p>
                    <p className={styles.textDegree}>12°</p>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.containerDays}>
                    <p className={styles.textDays}>Thu</p>
                    <img className={styles.imgSmallDays} src="/img/partly-cloudy.png" alt="partly-cloudy"/>
                    <p className={styles.textDaysDegree}>11°</p>
                </div>
                <div className={styles.containerDays}>
                    <p className={styles.textDays}>Thu</p>
                    <img className={styles.imgSmallDays} src="/img/partly-cloudy.png" alt="partly-cloudy"/>
                    <p className={styles.textDaysDegree}>11°</p>
                </div>
                <div className={styles.containerDays}>
                    <p className={styles.textDays}>Thu</p>
                    <img className={styles.imgSmallDays} src="/img/partly-cloudy.png" alt="partly-cloudy"/>
                    <p className={styles.textDaysDegree}>11°</p>
                </div>
                <div className={styles.containerDays}>
                    <p className={styles.textDays}>Thu</p>
                    <img className={styles.imgSmallDays} src="/img/partly-cloudy.png" alt="partly-cloudy"/>
                    <p className={styles.textDaysDegree}>11°</p>
                </div>
                <div className={styles.containerDays}>
                    <p className={styles.textDays}>Thu</p>
                    <img className={styles.imgSmallDays} src="/img/partly-cloudy.png" alt="partly-cloudy"/>
                    <p className={styles.textDaysDegree}>11°</p>
                </div>
                <div className={styles.containerDays}>
                    <p className={styles.textDays}>Thu</p>
                    <img className={styles.imgSmallDays} src="/img/partly-cloudy.png" alt="partly-cloudy"/>
                    <p className={styles.textDaysDegree}>11°</p>
                </div>
                <div className={styles.containerDays}>
                    <p className={styles.textDays}>Thu</p>
                    <img className={styles.imgSmallDays} src="/img/partly-cloudy.png" alt="partly-cloudy"/>
                    <p className={styles.textDaysDegree}>11°</p>
                </div>
                <div className={styles.containerDays}>
                    <p className={styles.textDays}>Thu</p>
                    <img className={styles.imgSmallDays} src="/img/partly-cloudy.png" alt="partly-cloudy"/>
                    <p className={styles.textDaysDegree}>11°</p>
                </div>
                <div className={styles.containerDays}>
                    <p className={styles.textDays}>Thu</p>
                    <img className={styles.imgSmallDays} src="/img/partly-cloudy.png" alt="partly-cloudy"/>
                    <p className={styles.textDaysDegree}>11°</p>
                </div>
                <div className={styles.containerDays}>
                    <p className={styles.textDays}>Thu</p>
                    <img className={styles.imgSmallDays} src="/img/partly-cloudy.png" alt="partly-cloudy"/>
                    <p className={styles.textDaysDegree}>11°</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherPanel;
