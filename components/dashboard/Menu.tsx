
import Link from "next/link";

export default function Menu({ styles }) {
    return (
    <div>
    <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
    </head>
    
    <Link href="./Dashboard">
        <i className={`${"material-icons"} ${styles.circle} ${styles.four}`} 
        style={{fontSize:"48px"}}>home</i>
    </Link>

    <Link href="./Calendar">
        <i className={`${"material-icons"} ${styles.circle} ${styles.five}`}
        style={{fontSize:"48px"}}>event</i>


    </Link>
    
    <Link href="./Stats">
        <i className={`${"material-icons"} ${styles.circle} ${styles.three}`}
        style={{fontSize:"48px"}}>bar_chart</i>
    </Link>


    <Link href="./Inventory">
        <i className={`${"material-icons"} ${styles.circle} ${styles.six}`}
        style={{fontSize:"48px"}}>list_alt_outlined</i>
    </Link>


    <Link href="./Tasks">
        <i className={`${"material-icons"} ${styles.circle} ${styles.two}`}
        style={{fontSize:"48px"}}>task_outlined</i>
    </Link>
    </div>
    )
}