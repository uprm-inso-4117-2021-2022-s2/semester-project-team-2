
import styles from '../styles/dashboard.module.css'

import Header from '../components/dashboard/Header'
import Menu from '../components/dashboard/Menu'
import Navigation from '../components/dashboard/Navigation'
import DailyTasks from '../components/dashboard/DailyTasks'
import Chart from '../components/dashboard/Chart'
import { Task } from '../models/Task'


export default function Dashboard(){
    // El contenido de los daily tasks y su estado
    let tasks = [
        new Task("Milk cows"),
        new Task("Add manure to field"),
        new Task("Pick up eggs"),
        new Task("Feed chickens"),
        new Task("Open gates"),
        new Task("Check medication expiration dates"),
        new Task("Turn off generator")
    ]

    // El valor del pie chart es la razon de cantidad respecto a los 
    // otros valores
    const data = [
        { name: 'Group A', value: 1 },
        { name: 'Group B', value: 1 },
        { name: 'Group C', value: 1 },
        { name: 'Group D', value: 2},
    ];
    
    // Inventory data (progress bars %)
    const bars = {
        "one": [10, "cow food"],
        "two": [50, "pig food"],
        "three": [20, "chiken food"],
        "four": [70, "horse hay"],
    }
    

    return(

        <div className={styles.pagewrapper}>


            {/* <div className={styles.banner}>
                <img style={{position:"absolute",alignContent:"center"}}src="/banner1.png"/>
                </div>
         */}
            <Header styles={styles}/>
            <Menu />







            <div className={styles.boxone}>
                <Navigation bars={bars}/>

                <div className={styles.decont}>
                    <div className={styles.decor}></div>
                </div>

                <div className={styles.boxtwo}>
                    <DailyTasks tasks={tasks} styles={styles} />

                    <div className={styles.stats}>

                        <p className={styles.popu}>Population</p>
                        <Chart data={data} />

                    </div>
                </div>

                {/* <div className={styles.decontTwo}>
                    <div className={styles.decorTwo}></div>
                </div> */}

            </div>


        </div>
    )
}