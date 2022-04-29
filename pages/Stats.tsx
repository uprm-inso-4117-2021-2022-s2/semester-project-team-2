
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
    { country: 'Mammals', commodity: 'Obejas', total: InventoryData.filter(value => value.Animal === 'Obejas').length},
    { country: 'Mammals', commodity: 'Cabras', total: InventoryData.filter(value => value.Animal === 'Cabras').length},
    { country: 'Birds', commodity: 'Gallinas', total: InventoryData.filter(value => value.Animal === 'Gallinas').length},
    { country: 'Birds', commodity: 'Gansos', total: InventoryData.filter(value => value.Animal === 'Gansos').length},
    { country: 'Birds', commodity: 'Pavos', total: InventoryData.filter(value => value.Animal === 'Pavos').length},
    { country: 'Medical_Conditions', commodity: 'Obesity', total: InventoryData.filter(value => value['Medical Conditions'] === 'Obesity').length},
    { country: 'Medical_Conditions', commodity: 'Arthritis', total: InventoryData.filter(value => value['Medical Conditions'] === 'Arthritis').length},
    { country: 'Medical_Conditions', commodity: 'None', total: InventoryData.filter(value => value['Medical Conditions'] === 'None').length},
    { country: 'Medical_Conditions', commodity: 'Diabetes', total: InventoryData.filter(value => value['Medical Conditions'] === 'Diabetes').length},
    { country: 'Medical_Conditions', commodity: 'Urinary Problems', total: InventoryData.filter(value => value['Medical Conditions'] === 'Urinary Problems').length},
    { country: 'Amounts', commodity: '1-100', total: InventoryData.filter(value => value.Amount >= 0 && value.Amount <= 100).length},
    { country: 'Amounts', commodity: '100-500', total: InventoryData.filter(value => value.Amount >= 100 && value.Amount <= 500).length},
    { country: 'Amounts', commodity: '500-1000', total: InventoryData.filter(value => value.Amount >= 500 && value.Amount <= 1000).length},
    { country: 'Amounts', commodity: '1000-2500', total: InventoryData.filter(value => value.Amount >= 1000 && value.Amount <= 2500).length},
    { country: 'Amounts', commodity: '2500-5000', total: InventoryData.filter(value => value.Amount >= 2500 && value.Amount <= 5000).length},
    { country: 'Amounts', commodity: '5000+', total: InventoryData.filter(value => value.Amount >= 5000).length},
  ];  
  
  // const Gender=[randomDate(new Date(2012, 0, 1),new Date()),"","","","","","","","",""]
  
  // InventoryData.map((entry:any)=> {

    // let d=new Date(entry.birthDate)
    // d.setDate(d.getDate() + 1400)
    // const Gender=[randomDate(entry.BirthDate,new Date()),"","","","","","","","",""]
    // entry.DeathDate=Gender[Math.floor(Math.random() * 10)]})

  // InventoryData.map((entry:any)=> {entry.age=Math.floor(Math.random() * 21) })
//   function GetSortOrder(prop:any) {    
//     return function(a:any, b:any) {    
//         if (a[prop] > b[prop]) {    
//             return 1;    
//         } else if (a[prop] < b[prop]) {    
//             return -1;    
//         }    
//         return 0;    
//     }    
// }  
//   let Id=1
//   InventoryData.sort(GetSortOrder("BirthDate"))
//   InventoryData.map((entry:any)=> {entry.ID=Id;Id++ })
  // console.log(JSON.stringify(InventoryData))
  // InventoryData.map((entry:any)=> {entry.Gender=Gender[Math.floor(Math.random() * 2)]})

  // InventoryData.map((entry:any)=> {
  //   entry.name=names[Math.floor(Math.random()*names.length)] + " " + names[Math.floor(Math.random()*names.length)];
  //   console.log(entry.name)
  // })

  // function randomDate(start:any, end:any) {
  //   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  // }

  // InventoryData.map((entry:any)=> {
  //   let d=randomDate(new Date(2012, 0, 1),new Date());
  //   entry.BirthDate=d;
  //   const Gender=[randomDate(d,new Date()),"","","","","","",""];

  //   entry.DeathDate=Gender[Math.floor(Math.random() * 8)] }
  //   )
  // let Id=1
  // InventoryData.sort(GetSortOrder("BirthDate"))
  // InventoryData.map((entry:any)=> {entry.ID=Id;Id++ })

  // // InventoryData.map((entry:any)=> {entry.DeathDate="";})
  // console.log(JSON.stringify(InventoryData))
  
  //const newData = {}
  const maleAgeData = [{
    state: 'Caballos',
    maleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.Gender==="Male" && value.Animal==="Caballos").length ,
    malemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.Gender==="Male" && value.Animal==="Caballos").length,
    maleolder: InventoryData.filter((value:any)=> value.age >=10  && value.Gender==="Male" && value.Animal==="Caballos").length,
    femaleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.Gender==="Female"&& value.Animal==="Caballos").length ,
    femalemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.Gender==="Female"&& value.Animal==="Caballos" ).length,
    femaleolder: InventoryData.filter((value:any)=> value.age >=10  && value.Gender==="Female"&& value.Animal==="Caballos" ).length,
  }, {
    state: 'Vacas',
    maleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.Gender==="Male" && value.Animal==="Caballos").length ,
    malemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.Gender==="Male" && value.Animal==="Caballos").length,
    maleolder: InventoryData.filter((value:any)=> value.age >=10  && value.Gender==="Male" && value.Animal==="Caballos").length,
    femaleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.Gender==="Female"&& value.Animal==="Caballos").length ,
    femalemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.Gender==="Female"&& value.Animal==="Caballos" ).length,
    femaleolder: InventoryData.filter((value:any)=> value.age >=10  && value.Gender==="Female"&& value.Animal==="Caballos" ).length,
  }, {
    state: 'Obejas',
    maleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.Gender==="Male" && value.Animal==="Obejas").length ,
    malemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.Gender==="Male" && value.Animal==="Obejas").length,
    maleolder: InventoryData.filter((value:any)=> value.age >=10  && value.Gender==="Male" && value.Animal==="Obejas").length,
    femaleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.Gender==="Female"&& value.Animal==="Obejas").length ,
    femalemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.Gender==="Female"&& value.Animal==="Obejas" ).length,
    femaleolder: InventoryData.filter((value:any)=> value.age >=10  && value.Gender==="Female"&& value.Animal==="Obejas" ).length,
  }, {
    state: 'Cabras',
    maleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.Gender==="Male" && value.Animal==="Cabras").length ,
    malemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.Gender==="Male" && value.Animal==="Cabras").length,
    maleolder: InventoryData.filter((value:any)=> value.age >=10  && value.Gender==="Male" && value.Animal==="Cabras").length,
    femaleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.Gender==="Female"&& value.Animal==="Cabras").length ,
    femalemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.Gender==="Female"&& value.Animal==="Cabras" ).length,
    femaleolder: InventoryData.filter((value:any)=> value.age >=10  && value.Gender==="Female"&& value.Animal==="Cabras" ).length,
  }, {
    state: 'Gallinas',
    maleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.Gender==="Male" && value.Animal==="Gallinas").length ,
    malemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.Gender==="Male" && value.Animal==="Gallinas").length,
    maleolder: InventoryData.filter((value:any)=> value.age >=10  && value.Gender==="Male" && value.Animal==="Gallinas").length,
    femaleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.Gender==="Female"&& value.Animal==="Gallinas").length ,
    femalemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.Gender==="Female"&& value.Animal==="Gallinas" ).length,
    femaleolder: InventoryData.filter((value:any)=> value.age >=10  && value.Gender==="Female"&& value.Animal==="Gallinas" ).length,
  }, {
    state: 'Pavos',
    maleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.Gender==="Male" && value.Animal==="Pavos").length ,
    malemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.Gender==="Male" && value.Animal==="Pavos").length,
    maleolder: InventoryData.filter((value:any)=> value.age >=10  && value.Gender==="Male" && value.Animal==="Pavos").length,
    femaleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.Gender==="Female"&& value.Animal==="Pavos").length ,
    femalemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.Gender==="Female"&& value.Animal==="Pavos" ).length,
    femaleolder: InventoryData.filter((value:any)=> value.age >=10  && value.Gender==="Female"&& value.Animal==="Pavos" ).length,
  }, {
    state: 'Gansos',
    maleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.Gender==="Male" && value.Animal==="Gansos").length ,
    malemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.Gender==="Male" && value.Animal==="Gansos").length,
    maleolder: InventoryData.filter((value:any)=> value.age >=10  && value.Gender==="Male" && value.Animal==="Gansos").length,
    femaleyoung: InventoryData.filter((value:any)=> value.age < 5  && value.Gender==="Female"&& value.Animal==="Gansos").length ,
    femalemiddle: InventoryData.filter((value:any)=> value.age < 10 && value.age >=5  && value.Gender==="Female"&& value.Animal==="Gansos" ).length,
    femaleolder: InventoryData.filter((value:any)=> value.age >=10  && value.Gender==="Female"&& value.Animal==="Gansos" ).length,
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
          <Menu styles={styles}/>


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