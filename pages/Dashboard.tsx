
import styles from '../styles/dashboard.module.css'

import Header from '../components/dashboard/Header'
import Menu from '../components/dashboard/Menu'
import Navigation from '../components/dashboard/Navigation'
import DailyTasks from '../components/dashboard/DailyTasks'
// import Chart from '../components/dashboard/Chart'
import { Chart, Series } from 'devextreme-react/chart';
import { Task } from '../models/Task'
import PieChart, {
    Legend,
    Label,
    Connector,
} from 'devextreme-react/pie-chart';


export default function Dashboard() {
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
        { name: 'Caballos', value: 54 },
        { name: 'Cabras', value: 45 },
        { name: 'Gallinas', value: 143 },
        { name: 'Gansos', value: 32 },
        { name: 'Obejas', value: 56 },
        { name: 'Pavos', value: 18 },
        { name: 'Vacas', value: 15 },
    ];

    // Inventory data (progress bars %)
    const bars = {
        "one": [10, "cow food"],
        "two": [50, "pig food"],
        "three": [20, "chiken food"],
        "four": [70, "horse hay"],
    }

    function customizeLabel(e:any) {
        return `${e.argumentText}\n${e.valueText}`;
      }

    return (

        <div className={styles.pagewrapper}>


            {/* <div className={styles.banner}>
                <img style={{position:"absolute",alignContent:"center"}}src="/banner1.png"/>
                </div>
         */}
            <Header styles={styles} />
            <Menu />







            <div className={styles.boxone}>
                <Navigation bars={bars} />

                <div className={styles.decont}>
                    <div className={styles.decor}></div>
                </div>

                <div className={styles.boxtwo}>
                    <DailyTasks tasks={tasks} styles={styles} />

                    <div className={styles.stats}>

                        <p className={styles.popu}>Population</p>
                        {/* <Chart data={data} /> */}
                        <PieChart
                            style={{ width: "25em", height: "25em", position: "relative" }}
                            // key={data.keys}
                            dataSource={data}
                            resolveLabelOverlapping="shift"
                            // sizeGroup="piesGroup"
                            innerRadius={0.65}
                            // centerRender={CenterTemplate}
                            type="doughnut"
                        >
                            <Series
                                argumentField="name"
                                valueField="value"
                            >
                                <Label visible={true}
                                    format="fixedPoint"
                                    customizeText={customizeLabel}
                                    backgroundColor="none">
                                    <Connector visible={true}></Connector>
                                </Label>
                            </Series>
                            <Legend visible={false}></Legend>
                        </PieChart>

                    </div>
                </div>

                {/* <div className={styles.decontTwo}>
                    <div className={styles.decorTwo}></div>
                </div> */}

            </div>


        </div>
    )
}