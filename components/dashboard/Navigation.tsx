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
                    <div className={styles.myBar}  style={{width: bars.one + "%"}}>{bars.one}%</div>
                </div>
                <div className={styles.myProgress}>
                    <div className={styles.myBar}  style={{width: bars.two + "%"}}>{bars.two}%</div>
                </div>
                Inventory
                <div className={styles.myProgress}>
                    <div className={styles.myBar}  style={{width: bars.three + "%"}}>{bars.three}%</div>
                </div>
                <div className={styles.myProgress}>
                    <div className={styles.myBar}  style={{width: bars.four + "%"}}>{bars.four}%</div>
                </div>
            </div>
            <div className={`${styles["statbox"]} ${styles["navbox"]}`}>Stats</div>
            <div className={`${styles["recordbox"]} ${styles["navbox"]}`}>Records</div>

        </div>
    )
}