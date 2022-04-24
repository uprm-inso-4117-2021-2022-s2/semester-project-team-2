
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
export const data = [
    {
      text: 'Website Re-Design Plan',
      startDate: new Date('2021-04-26T16:30:00.000Z'),
      endDate: new Date('2021-04-26T18:30:00.000Z'),
      color: "#white",  

    }, {
      text: 'Book Flights to San Fran for Sales Trip',
      startDate: new Date('2021-04-26T19:00:00.000Z'),
      endDate: new Date('2021-04-26T20:00:00.000Z'),
      allDay: true,
    }, {
      text: 'Install New Router in Dev Room',
      startDate: new Date('2021-04-26T21:30:00.000Z'),
      endDate: new Date('2021-04-26T22:30:00.000Z'),
    }, {
      text: 'Approve Personal Computer Upgrade Plan',
      startDate: new Date('2021-04-27T17:00:00.000Z'),
      endDate: new Date('2021-04-27T18:00:00.000Z'),
    }, {
      text: 'Final Budget Review',
      startDate: new Date('2021-04-27T19:00:00.000Z'),
      endDate: new Date('2021-04-27T20:35:00.000Z'),
    }, {
      text: 'New Brochures',
      startDate: new Date('2021-04-27T21:30:00.000Z'),
      endDate: new Date('2021-04-27T22:45:00.000Z'),
    }, {
      text: 'Install New Database',
      startDate: new Date('2021-04-28T16:45:00.000Z'),
      endDate: new Date('2021-04-28T18:15:00.000Z'),
    }, {
      text: 'Approve New Online Marketing Strategy',
      startDate: new Date('2021-04-28T19:00:00.000Z'),
      endDate: new Date('2021-04-28T21:00:00.000Z'),
    }, {
      text: 'Upgrade Personal Computers',
      startDate: new Date('2021-04-28T22:15:00.000Z'),
      endDate: new Date('2021-04-28T23:30:00.000Z'),
    }, {
      text: 'Customer Workshop',
      startDate: new Date('2021-04-29T18:00:00.000Z'),
      endDate: new Date('2021-04-29T19:00:00.000Z'),
      allDay: true,
    }, {
      text: 'Prepare 2021 Marketing Plan',
      startDate: new Date('2021-04-29T18:00:00.000Z'),
      endDate: new Date('2021-04-29T20:30:00.000Z'),
    }, {
      text: 'Brochure Design Review',
      startDate: new Date('2021-04-29T21:00:00.000Z'),
      endDate: new Date('2021-04-29T22:30:00.000Z'),
    }, {
      text: 'Create Icons for Website',
      startDate: new Date('2021-04-30T17:00:00.000Z'),
      endDate: new Date('2021-04-30T18:30:00.000Z'),
    }, {
      text: 'Upgrade Server Hardware',
      startDate: new Date('2021-04-30T21:30:00.000Z'),
      endDate: new Date('2021-04-30T23:00:00.000Z'),
    }, {
      text: 'Submit New Website Design',
      startDate: new Date('2021-04-30T23:30:00.000Z'),
      endDate: new Date('2021-05-01T01:00:00.000Z'),
    }, {
      text: 'Launch New Website',
      startDate: new Date('2021-04-30T19:20:00.000Z'),
      endDate: new Date('2021-04-30T21:00:00.000Z'),
    },
  ];
  
const currentDate = new Date(2021, 3, 29);
const views = ['day', 'workWeek', 'month', 'agenda'];
export default function Dashboard(){
    

    return(

        <div className={styles.pagewrapper}>


            <Menu styles={styles}/>


            <Scheduler
            className={styles.calendar}
            timeZone="America/Los_Angeles"
            dataSource={data}
            views={views}
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