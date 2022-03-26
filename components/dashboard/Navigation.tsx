import styles from '../../styles/dashboard.module.css'

export default function Navigation(){
    return (
        <div className={styles.navcont}>
            <div className={styles.calenbox}>
                <div className={styles.calenCircle}>Calendar</div>
            </div>
            <div className={`${styles["invenbox"]} ${styles["navbox"]}`}>Inventory</div>
            <div className={`${styles["statbox"]} ${styles["navbox"]}`}>Stats</div>
            <div className={`${styles["recordbox"]} ${styles["navbox"]}`}>Records</div>
        </div>
    )
}