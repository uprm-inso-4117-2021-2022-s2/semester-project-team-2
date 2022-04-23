
import styles from '../styles/dashboard.module.css'

import Header from '../components/dashboard/Header'
import Menu from '../components/dashboard/Menu'
import Navigation from '../components/dashboard/Navigation'
import DailyTasks from '../components/dashboard/DailyTasks'
// import Chart from '../components/dashboard/Chart'
import Link from "next/link";
import { Chart, Series } from 'devextreme-react/chart';
import PieChart, {
    Legend,
    Label,
    Connector,
  } from 'devextreme-react/pie-chart';
  
import CenterTemplate from '../components/CenterTemplate';
export const data = [
    { country: 'Firefox', commodity: 'Nuclear', total: 403195 },
    { country: 'Firefox', commodity: 'Nuclear', total: 84634 },
    { country: 'Firefox', commodity: 'Thermal', total: 57471 },
    { country: 'Firefox', commodity: 'Thermal', total: 419591 },
    { country: 'Firefox', commodity: 'Wind', total: 21400 },
    { country: 'Safari', commodity: 'Wind', total: 78598 },
    { country: 'Safari', commodity: 'Solar', total: 8160 },
    { country: 'Chrome', commodity: 'Solar', total: 38098 },
    { country: 'Chrome', commodity: 'Tidal, Wave', total: 501 },
  ];  
const countries = Array.from(new Set(data.map((item) => item.country)));



export default function Dashboard(){
    function customizeLabel(e:any) {
        return `${e.argumentText}\n${e.valueText}`;
      }
      const pies = countries.map((country) => (
        <PieChart
          id="pie-chart"
          key={country}
          dataSource={data.filter((i) => i.country === country)}
          resolveLabelOverlapping="shift"
          sizeGroup="piesGroup"
          innerRadius={0.65}
          centerRender={CenterTemplate}
          type="doughnut"
        >
          <Series
            argumentField="commodity"
            valueField="total"
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
      ));
    return(

        <div className={styles.pagewrapper}>

        <div className={styles.piescontainer}>
          {pies}
        </div>

{/* <Chart id="chart" dataSource={data}>
        <Series
          valueField="oranges"
          argumentField="day"
          name="My oranges"
          type="bar"
          color="#ffaa66" />
      </Chart> */}


            <Menu styles={styles}/>







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