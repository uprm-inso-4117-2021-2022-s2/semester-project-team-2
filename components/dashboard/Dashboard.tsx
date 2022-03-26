
import styles from '../../styles/dashboard.module.css'

import Header from './Header'
import Navigation from './Navigation'
import DailyTasks from './DailyTasks'
import Chart from './Chart'


export default function Dashboard(){
    // El contenido de los daily tasks y su estado
    let tasks = {
        t1: {content: 'Milk cows', complete: false},
        t2: {content: 'Add manure to field', complete: false},
        t3: {content: 'Pick up eggs', complete: false},
        t4: {content: 'Feed chickens', complete: false},
        t5: {content: 'Open gates', complete: false}
    }

    // El valor del pie chart es la razon de cantidad respecto a los 
    // otros valores
    const data = [
        { name: 'Group A', value: 1 },
        { name: 'Group B', value: 1 },
        { name: 'Group C', value: 1 },
        { name: 'Group D', value: 2},
    ];
    

    return(
        <div className={styles.pagewrapper}>
            <Header/>

            <div className={styles.boxone}>
                <Navigation />

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
            </div>

           


        </div>
    )
}