import stumps from "../assets/cricket-match-logo.png";
import styles from "./Match.module.css";
import { FaRegClock, FaMapMarkerAlt, FaTrophy, FaCrosshairs } from 'react-icons/fa';

export const Match = () => {
    const isLive = true;

    return (
        <div className={styles["match-container"]}>
            <div className={styles["match-logo"]}>
                <img className={styles.logo} src={stumps} alt="stumps" />
            </div>
            <div className={styles["match-details"]}>
                <div className={styles.statusContainer}>
                    <h3 className={`${styles.heading1} ${isLive ? styles.live : styles.completed}`}>
                        {isLive ? "Live Match" : "Match Completed"}
                    </h3>
                    <FaCrosshairs className={styles.liveIcon} />
                </div>
                <h3 className={styles.heading2}>Shirwal Story Night</h3>
                <div className={styles.details}>
                    <p className={styles.para}>
                        <FaRegClock className={styles.icon} /> 25-May-2024 at 5PM
                    </p>
                    <p className={styles.para}>
                        <FaMapMarkerAlt className={styles.icon} /> Milton Stadium, Shirwal
                    </p>
                    <p className={styles.para}>
                        Teams: <strong>Team A</strong> vs <strong>Team B</strong>
                    </p>
                    <p className={styles.para}>
                        Score: <strong>120/8</strong> (20 overs)
                    </p>
                    <p className={styles.result}>
                        {isLive ? <span className={styles.inProgress}>In Progress</span> : <span><FaTrophy className={styles.icon} /> Team A won by 20 runs</span>}
                    </p>
                </div>
            </div>
        </div>
    );
};
