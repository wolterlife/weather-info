import styles from "./InputCity.module.css"

const InputCity = () => {
    return (
        <div className={styles.inputBackground}>
            <input placeholder="someCity" className={styles.input} />
            <hr className={styles.line}/>
        </div>
    )
}

export default InputCity;
