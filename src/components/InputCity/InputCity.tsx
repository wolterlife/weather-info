import styles from "./InputCity.module.css"

const InputCity = () => {
    return (
        <div className={styles.inputBackground}>
            <div className={styles.inputContent}>
                <input placeholder="Write city" className={styles.input} />
                <input type="image" src="/img/search.png" className={styles.imgSearch} alt="search"/>
            </div>
            <hr className={styles.line}/>
        </div>
    )
}

export default InputCity;
