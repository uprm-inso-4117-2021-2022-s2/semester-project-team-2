
import styles from '../styles/dashboard.module.css'

import Header from '../components/dashboard/Header'
import Menu from '../components/dashboard/Menu'
import Navigation from '../components/dashboard/Navigation'
import DailyTasks from '../components/dashboard/DailyTasks'
import Chart from '../components/dashboard/Chart'
import Link from "next/link";
import 'devextreme/dist/css/dx.light.css';

import DataGrid, {
    Column,
    Grouping,
    GroupPanel,
    Pager,
    Paging,
    SearchPanel,
  } from 'devextreme-react/data-grid';

import Scheduler from 'devextreme-react/scheduler';
import { CalendarData } from '../back_end/calendardata'
  
const currentDate = new Date();

export default function Dashboard(){
    
    return(

        <div className={styles.pagewrapper}>


            <Menu styles={styles}/>


            <Scheduler
            className={styles.calendar}
            timeZone="America/Los_Angeles"
            dataSource={CalendarData}
            views={['day', 'workWeek', 'month', 'agenda']}
            defaultCurrentView="workWeek"
            defaultCurrentDate={currentDate}
            height={"70%"}
            startDayHour={9}
            />




            <div className={styles.boxone}>
                {/* <Navigation bars={bars}/>

                <div className={styles.decont}>
                    <div className={styles.decor}></div>
                </div>

                <div className={styles.boxtwo}>
                    <DailyTasks tasks={tasks} styles={styles} />

                    <div className={styles.stats}>

                        <p className={styles.popu}>Population</p>
                        <Chart data={data} />

                    </div>
                </div> */}

                {/* <div className={styles.decontTwo}>
                    <div className={styles.decorTwo}></div>
                </div> */}

            </div>

           
        

        </div>
    )
}