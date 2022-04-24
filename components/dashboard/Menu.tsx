
import Link from "next/link";

export default function Menu({ styles }) {
    return (
    <div>
    <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
    </head>
    
    <Link href="./dashboard">
        <i className={`${"material-icons"} ${styles.circle} ${styles.four}`} 
        style={{fontSize:"48px"}}>home</i>
    </Link>

    <Link href="./calendar">
        <i className={`${"material-icons"} ${styles.circle} ${styles.five}`}
        style={{fontSize:"48px"}}>event</i>


    </Link>
    
    <Link href="./stats">
        <i className={`${"material-icons"} ${styles.circle} ${styles.three}`}
        style={{fontSize:"48px"}}>bar_chart</i>
    </Link>


    <Link href="./inventory">
        <i className={`${"material-icons"} ${styles.circle} ${styles.six}`}
        style={{fontSize:"48px"}}>list_alt_outlined</i>
    </Link>


    <Link href="./tasks">
        <i className={`${"material-icons"} ${styles.circle} ${styles.two}`}
        style={{fontSize:"48px"}}>task_outlined</i>
    </Link>
    </div>
    )
}