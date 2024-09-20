import styles from "./ScrollingText.module.css";
import ball from "../assets/cricket ball.png";

export const ScrollingText = () => {
    return (
        <>
            <div className={styles["scrolling-Header"]}>
                <div className={styles["scrolling-Text"]}>
                    <div className={styles["items-container"]}>
                        <img className={styles["cricket-ball"]} src={ball} alt="cricket ball" /> 
                        <span className={styles["text"]}>Cric 11 | Cric 11 | Cric 11 </span> 
                        <img className={styles["cricket-ball"]} src={ball} alt="cricket ball" /> 
                    </div>
                </div>
            </div>
        </>
    )
}