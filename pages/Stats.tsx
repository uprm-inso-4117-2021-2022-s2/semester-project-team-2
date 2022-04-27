
import styles from '../styles/dashboard.module.css'


import Header from '../components/dashboard/Header'
import Menu from '../components/dashboard/Menu'
import Navigation from '../components/dashboard/Navigation'
import DailyTasks from '../components/dashboard/DailyTasks'
// import Chart from '../components/dashboard/Chart'
import { Chart, Series } from 'devextreme-react/chart';
import PieChart, {
    Legend,
    Label,
    Connector,
  } from 'devextreme-react/pie-chart';
import {
    CommonSeriesSettings,  ValueAxis, Title, Export, Tooltip, Border,
} from 'devextreme-react/chart';
  
import CenterTemplate from '../components/CenterTemplate';
import {InventoryData} from "../back_end/inventorydata.js";

export const data = [
    { country: 'Mammals', commodity: 'Caballos', total: InventoryData.filter(value => value.Animal === 'Caballos').length},
    { country: 'Mammals', commodity: 'Vacas', total: InventoryData.filter(value => value.Animal === 'Vacas').length},
    { country: 'Birds', commodity: 'Gallinas', total: InventoryData.filter(value => value.Animal === 'Gallinas').length},
    { country: 'Birds', commodity: 'Gansos', total: InventoryData.filter(value => value.Animal === 'Gansos').length},
    { country: 'Birds', commodity: 'Pavos', total: InventoryData.filter(value => value.Animal === 'Pavos').length},
    { country: 'Safari', commodity: 'Wind', total: 78598 },
    { country: 'Safari', commodity: 'Solar', total: 8160 },
    { country: 'Chrome', commodity: 'Solar', total: 38098 },
    { country: 'Chrome', commodity: 'Tidal, Wave', total: 501 },
  ];  
  const maleAgeData = [{
    state: 'USA',
    maleyoung: 29.956,
    malemiddle: 90.354,
    maleolder: 14.472,
    femaleyoung: 28.597,
    femalemiddle: 91.827,
    femaleolder: 20.362,
  }, {
    state: 'Brazil',
    maleyoung: 25.607,
    malemiddle: 55.793,
    maleolder: 3.727,
    femaleyoung: 24.67,
    femalemiddle: 57.598,
    femaleolder: 5.462,
  }, {
    state: 'Russia',
    maleyoung: 13.493,
    malemiddle: 48.983,
    maleolder: 5.802,
    femaleyoung: 12.971,
    femalemiddle: 52.14,
    femaleolder: 12.61,
  }, {
    state: 'Japan',
    maleyoung: 9.575,
    malemiddle: 43.363,
    maleolder: 9.024,
    femaleyoung: 9.105,
    femalemiddle: 42.98,
    femaleolder: 12.501,
  }, {
    state: 'Mexico',
    maleyoung: 17.306,
    malemiddle: 30.223,
    maleolder: 1.927,
    femaleyoung: 16.632,
    femalemiddle: 31.868,
    femaleolder: 2.391,
  }, {
    state: 'Germany',
    maleyoung: 6.679,
    malemiddle: 28.638,
    maleolder: 5.133,
    femaleyoung: 6.333,
    femalemiddle: 27.693,
    femaleolder: 8.318,
  }, {
    state: 'United Kindom',
    maleyoung: 5.816,
    malemiddle: 19.622,
    maleolder: 3.864,
    femaleyoung: 5.519,
    femalemiddle: 19.228,
    femaleolder: 5.459,
  }];
const countries = Array.from(new Set(data.map((item) => item.country)));



export default function Dashboard(){
  var result =   InventoryData.filter(value => value.Animal === 'Caballos').length;
  console.log(result);
    function customizeLabel(e:any) {
        return `${e.argumentText}\n${e.valueText}`;
      }
      const pies = countries.map((country) => (
        <PieChart
          style={{width:"25em", height:"25em", position:"relative"}}
          key={country}
          dataSource={data.filter((i) => i.country === country)}
          resolveLabelOverlapping="shift"
          // sizeGroup="piesGroup"
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
          <Header styles={styles}/>
          <Menu />


        {pies[0]}
        {pies[1]}

        <div style={{right:"2%",position:"absolute", top:"0%", left:"0%",display: "flex", justifyContent: "flex-end"}}>
        {/* <div style={{top:'-30%',marginRight:"2%",display: "flex",alignItems: "flex-end%",justifyContent: "flex-end"}}> */}
          {pies[2]} 

        </div>

       
        <div style={{right:"2%",position:"absolute", top:"50%", left:"0%",display: "flex", justifyContent: "flex-end"}}>
          {pies[3]}    
        </div> 




        




        <Chart
        className={styles.graficabarra}
        title="Population: Age Structure"
        dataSource={maleAgeData}
      >
        <CommonSeriesSettings argumentField="state" type="stackedBar" />
        <Series
          valueField="maleyoung"
          name="Male: 0-14"
          stack="male"
        />
        <Series
          valueField="malemiddle"
          name="Male: 15-64"
          stack="male"
        />
        <Series
          valueField="maleolder"
          name="Male: 65 and older"
          stack="male"
        />
        <Series
          valueField="femaleyoung"
          name="Female: 0-14"
          stack="female"
        />
        <Series
          valueField="femalemiddle"
          name="Female: 15-64"
          stack="female"
        />
        <Series
          valueField="femaleolder"
          name="Female: 65 and older"
          stack="female"
        />
        <ValueAxis>
          <Title text="Populations, millions" />
        </ValueAxis>
        <Legend position="inside"
          columnCount={2}
        //   customizeItems={customizeItems}
          horizontalAlignment="right">
          <Border visible={true} />
        </Legend>
        <Export enabled={true} />
        <Tooltip enabled={true} />
      </Chart>


        

        </div>
    )
}