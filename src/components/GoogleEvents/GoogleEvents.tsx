import styles from "./GoogleEvents.module.css"

const GoogleEvents = () => {
    return (
        <div className={styles.container}>
            <div className={styles.eventList}>
                <p className={styles.textTime}>9:00</p>
                <p className={styles.textEvent}>Create design for company</p>
            </div>
            <div className={styles.eventList}>
                <p className={styles.textTime}>9:00</p>
                <p className={styles.textEvent}>Create desi</p>
            </div>
            <div className={styles.eventList}>
                <p className={styles.textTime}>9:00</p>
                <p className={styles.textEvent}>Create design for</p>
            </div>
            <div className={styles.eventList}>
                <p className={styles.textTime}>9:00</p>
                <p className={styles.textEvent}>Create design for rrrrrrrrrrrrrrrrrrrrr</p>
            </div>

        </div>
    )
}

export default GoogleEvents;
