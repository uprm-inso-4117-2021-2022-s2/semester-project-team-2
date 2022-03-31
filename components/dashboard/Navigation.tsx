import styles from '../../styles/dashboard.module.css'
import Script from 'next/script'

export default function Navigation({ bars }){

   

    return (
        <div className={styles.navcont}>
            <div className={styles.calenbox}>
                <div className={styles.calenCircle}>Calendar</div>
            </div>
            <div className={`${styles["invenbox"]} ${styles["navbox"]}`}>
                <div className={styles.myProgress}>
                    <div className={styles.myBar}  style={{width: bars.one[0] + "%"}}>
                        <span className={styles.barLabel}>{bars.one[1]}</span>
                        {bars.one[0]}%
                    </div>
                </div>
                <div className={styles.myProgress}>
                    <div className={styles.myBar}  style={{width: bars.two[0] + "%"}}>
                        <span className={styles.barLabel}>{bars.two[1]}</span>
                        {bars.two[0]}%
                    </div>
                </div>
                Inventory
                <div className={styles.myProgress}>
                    <div className={styles.myBar}  style={{width: bars.three[0] + "%"}}>
                        {bars.three[0]}%
                        <span className={styles.barLabel}>{bars.three[1]}</span>
                    </div>
                </div>
                <div className={styles.myProgress}>
                    <div className={styles.myBar}  style={{width: bars.four[0] + "%"}}>
                        {bars.four[0]}%
                        <span className={styles.barLabel}>{bars.four[1]}</span>
                    </div>
                </div>
            </div>
            <div className={`${styles["statbox"]} ${styles["navbox"]}`}>Stats</div>
            <div className={`${styles["recordbox"]} ${styles["navbox"]}`}>Records</div>

        </div>
    )
}