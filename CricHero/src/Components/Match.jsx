import stumps from "../assets/stumps.png";
import styles from "./Match.module.css";

export const Match = () => {
    return (
        <div className={styles["match-container"]}>
            <div className={styles["match-logo"]}>
                <img className={styles.logo} src={stumps} alt="stumps" />
            </div>
            <div className={styles["match-information"]}>
                    <h3 className={styles.heading1}>Ongoing</h3>
                    <h3 className={styles.heading2}>Shirwal Story Night</h3>
                    <div className={styles.paragraph}>
                        <p className={`${styles.para} ${styles.text}`}>
                            25-May-2024 at 5PM
                        </p>
                        <p className={`${styles.para} ${styles.text}`}>
                            Milton Stadium Shirwal
                        </p>
                    </div>
            </div>
        </div>
    )
}