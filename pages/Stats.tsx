
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
import {
    CommonSeriesSettings,  ValueAxis, Title, Export, Tooltip, Border,
} from 'devextreme-react/chart';
  
import CenterTemplate from '../components/CenterTemplate';
import {InventoryData} from "../back_end/inventorydata.js";

export const data = [
    { country: 'Mammals', commodity: 'Caballos', total: InventoryData.filter(value => value.Animal === 'Caballos').length},
    { country: 'Mammals', commodity: 'Vacas', total: InventoryData.filter(value => value.Animal === 'Vacas').length},
    { country: 'Mammals', commodity: 'Obejas', total: InventoryData.filter(value => value.Animal === 'Obejas').length},
    { country: 'Mammals', commodity: 'Cabras', total: InventoryData.filter(value => value.Animal === 'Cabras').length},
    { country: 'Birds', commodity: 'Gallinas', total: InventoryData.filter(value => value.Animal === 'Gallinas').length},
    { country: 'Birds', commodity: 'Gansos', total: InventoryData.filter(value => value.Animal === 'Gansos').length},
    { country: 'Birds', commodity: 'Pavos', total: InventoryData.filter(value => value.Animal === 'Pavos').length},
    { country: 'Safari', commodity: 'Wind', total: 78598 },
    { country: 'Safari', commodity: 'Solar', total: 8160 },
    { country: 'Chrome', commodity: 'Solar', total: 38098 },
    { country: 'Chrome', commodity: 'Tidal, Wave', total: 501 },
  ];  
  
  // const gender=["Male","Female"]
  // InventoryData.map((entry:any)=> {entry.age=Math.floor(Math.random() * 21) })

  // InventoryData.map((entry:any)=> {entry.gender=gender[Math.floor(Math.random() * 2)]})

  // InventoryData.map((entry:any)=> {
  //   if(entry.Animal=== "Caballos"||entry.Animal=== "Cabras"|| entry.Animal=== "Obejas"||
  //   entry.Animal=== "Vacas") entry.type="Mammal"

  //   else{ entry.type="Bird"}
  
  // })

  console.log(JSON.stringify([InventoryData,false," "]))
  //const newData = {}
  const maleAgeData = [{
    state: 'Caballos',
    maleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.gender==="Male" && value.Animal==="Caballos").length ,
    malemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.gender==="Male" && value.Animal==="Caballos").length,
    maleolder: InventoryData.filter((value:any)=> value.age >=10  && value.gender==="Male" && value.Animal==="Caballos").length,
    femaleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.gender==="Female"&& value.Animal==="Caballos").length ,
    femalemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.gender==="Female"&& value.Animal==="Caballos" ).length,
    femaleolder: InventoryData.filter((value:any)=> value.age >=10  && value.gender==="Female"&& value.Animal==="Caballos" ).length,
  }, {
    state: 'Vacas',
    maleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.gender==="Male" && value.Animal==="Caballos").length ,
    malemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.gender==="Male" && value.Animal==="Caballos").length,
    maleolder: InventoryData.filter((value:any)=> value.age >=10  && value.gender==="Male" && value.Animal==="Caballos").length,
    femaleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.gender==="Female"&& value.Animal==="Caballos").length ,
    femalemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.gender==="Female"&& value.Animal==="Caballos" ).length,
    femaleolder: InventoryData.filter((value:any)=> value.age >=10  && value.gender==="Female"&& value.Animal==="Caballos" ).length,
  }, {
    state: 'Obejas',
    maleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.gender==="Male" && value.Animal==="Obejas").length ,
    malemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.gender==="Male" && value.Animal==="Obejas").length,
    maleolder: InventoryData.filter((value:any)=> value.age >=10  && value.gender==="Male" && value.Animal==="Obejas").length,
    femaleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.gender==="Female"&& value.Animal==="Obejas").length ,
    femalemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.gender==="Female"&& value.Animal==="Obejas" ).length,
    femaleolder: InventoryData.filter((value:any)=> value.age >=10  && value.gender==="Female"&& value.Animal==="Obejas" ).length,
  }, {
    state: 'Cabras',
    maleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.gender==="Male" && value.Animal==="Cabras").length ,
    malemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.gender==="Male" && value.Animal==="Cabras").length,
    maleolder: InventoryData.filter((value:any)=> value.age >=10  && value.gender==="Male" && value.Animal==="Cabras").length,
    femaleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.gender==="Female"&& value.Animal==="Cabras").length ,
    femalemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.gender==="Female"&& value.Animal==="Cabras" ).length,
    femaleolder: InventoryData.filter((value:any)=> value.age >=10  && value.gender==="Female"&& value.Animal==="Cabras" ).length,
  }, {
    state: 'Gallinas',
    maleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.gender==="Male" && value.Animal==="Gallinas").length ,
    malemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.gender==="Male" && value.Animal==="Gallinas").length,
    maleolder: InventoryData.filter((value:any)=> value.age >=10  && value.gender==="Male" && value.Animal==="Gallinas").length,
    femaleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.gender==="Female"&& value.Animal==="Gallinas").length ,
    femalemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.gender==="Female"&& value.Animal==="Gallinas" ).length,
    femaleolder: InventoryData.filter((value:any)=> value.age >=10  && value.gender==="Female"&& value.Animal==="Gallinas" ).length,
  }, {
    state: 'Pavos',
    maleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.gender==="Male" && value.Animal==="Pavos").length ,
    malemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.gender==="Male" && value.Animal==="Pavos").length,
    maleolder: InventoryData.filter((value:any)=> value.age >=10  && value.gender==="Male" && value.Animal==="Pavos").length,
    femaleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.gender==="Female"&& value.Animal==="Pavos").length ,
    femalemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.gender==="Female"&& value.Animal==="Pavos" ).length,
    femaleolder: InventoryData.filter((value:any)=> value.age >=10  && value.gender==="Female"&& value.Animal==="Pavos" ).length,
  }, {
    state: 'Gansos',
    maleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.gender==="Male" && value.Animal==="Gansos").length ,
    malemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.gender==="Male" && value.Animal==="Gansos").length,
    maleolder: InventoryData.filter((value:any)=> value.age >=10  && value.gender==="Male" && value.Animal==="Gansos").length,
    femaleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.gender==="Female"&& value.Animal==="Gansos").length ,
    femalemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.gender==="Female"&& value.Animal==="Gansos" ).length,
    femaleolder: InventoryData.filter((value:any)=> value.age >=10  && value.gender==="Female"&& value.Animal==="Gansos" ).length,
  }];
const countries = Array.from(new Set(data.map((item) => item.country)));



export default function Dashboard(){


  var result =   InventoryData.filter(value => value.Animal === 'Caballos');
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



        {pies[0]}
        {pies[1]}

        <div style={{right:"2%",position:"absolute", top:"0%", left:"0%",display: "flex", justifyContent: "flex-end"}}>
        {/* <div style={{top:'-30%',marginRight:"2%",display: "flex",alignItems: "flex-end%",justifyContent: "flex-end"}}> */}
          {pies[2]} 

        </div>

       
        <div style={{right:"2%",position:"absolute", top:"50%", left:"0%",display: "flex", justifyContent: "flex-end"}}>
          {pies[3]}    
        </div> 




            <Menu styles={styles}/>




        <Chart
        className={styles.graficabarra}
        title="Population: Age Structure"
        dataSource={maleAgeData}
      >
        <CommonSeriesSettings argumentField="state" type="stackedBar" />
        <Series
          valueField="maleyoung"
          name="Male: 0-5"
          stack="male"
        />
        <Series
          valueField="malemiddle"
          name="Male: 5-10"
          stack="male"
        />
        <Series
          valueField="maleolder"
          name="Male: 10 and older"
          stack="male"
        />
        <Series
          valueField="femaleyoung"
          name="Female: 0-5"
          stack="female"
        />
        <Series
          valueField="femalemiddle"
          name="Female: 5-10"
          stack="female"
        />
        <Series
          valueField="femaleolder"
          name="Female: 10 and older"
          stack="female"
        />
        <ValueAxis>
          <Title text="Populations" />
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