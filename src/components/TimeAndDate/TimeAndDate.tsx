import styles from "./TimeAndDate.module.css"

const TimeAndDate = () => {
    return (
        <div className={styles.container}>
            <p className={styles.time}>12:47</p>
            <p className={styles.date}>Wednesday, 2 February 2023</p>
        </div>
    )
}

export default TimeAndDate
