
import styles from '../styles/dashboard.module.css'

import Header from '../components/dashboard/Header'
import Menu from '../components/dashboard/Menu'
import Navigation from '../components/dashboard/Navigation'
import DailyTasks from '../components/dashboard/DailyTasks'
import Chart from '../components/dashboard/Chart'
import React from 'react';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';
import 'devextreme/data/odata/store';
import {TasksData} from "../back_end/taskdata.js";
import 'devextreme/dist/css/dx.light.css';
import styles1 from '../styles/task.module.css'
import {
    ColumnChooser, LoadPanel, Toolbar, SearchPanel
  } from 'devextreme-react/data-grid';
  import { Item } from 'devextreme-react/form';
  import {
    Editing,  Lookup,
 } from 'devextreme-react/data-grid';
 import {
    Popup,
    Form,
  } from 'devextreme-react/data-grid';
  import {
    Export, Selection
  } from 'devextreme-react/data-grid';

const statuses = ['All', 'Not Started', 'In Progress', 'Need Assistance', 'Deferred', 'Completed'];

//   const gender=["Marcos","Fremiud","Diego","Pedro"]

//   TasksData.map((entry:any)=> {entry.Task_Assigned_Employee=gender[Math.floor(Math.random() * 4)]})
//   console.log(JSON.stringify(TasksData))


export default function Dashboard(){
    const dataSourceOptions = {
        store: {
          type: 'odata',
          url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks',
          key: 'Task_ID',
        },
        expand: 'ResponsibleEmployee',
        select: [
          'Task_ID',
          'Task_Subject',
          'Task_Start_Date',
          'Task_Status',
          'ResponsibleEmployee/Employee_Full_Name',
        ],
      };  

      

      
    return(

        <div className={styles.pagewrapper}>



            <Header styles={styles}/>

            <Menu />


​
        <DataGrid
          className={styles.datagrid}
        //   ref={(ref) => { this.dataGrid = ref; }}
          dataSource={TasksData}
          columnAutoWidth={true}
          showBorders={true}
          allowColumnReordering={true}
          rowAlternationEnabled={true}
          height={"70%"}
        >
            <SearchPanel visible={true} highlightCaseSensitive={true} />

            <Toolbar>
            <Item name="addRowButton" />
                <Item name="exportButton" />
            <Item name="searchPanel" />

            </Toolbar>


          <Column
            dataField="Task_ID"
            width={80} />
          <Column
            dataField="Task_Start_Date"
            caption="Start Date"
            dataType="date" />
          <Column
            allowSorting={false}
            dataField="Task_Assigned_Employee"
            cssClass={styles1.employee}
            caption="Assigned To" />
          <Column
            dataField="Task_Subject"
            caption="Subject"
            width={350} />
          <Column
            dataField="Task_Status"
            caption="Status" />
        
        <Editing
            mode="popup"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true}>
            <Popup title="Animal Info" showTitle={true} width={700} height={525} />
            <Form>
              <Item itemType="group" colCount={2} colSpan={2}>
                <Item dataField="Animal" />
                <Item dataField="Name" />
                <Item dataField="Amount" />
                <Item dataField="Food Quantity" />
                <Item dataField="Breed" />
                <Item dataField="Conditions" />
                <Item dataField="BirthDate" />
                <Item dataField="DeathDate" />
                <Item
                  dataField="Notes"
                  editorType="dxTextArea"
                  colSpan={2}
 />
              </Item>

              {/* <Item itemType="group" caption="Home Address" colCount={2} colSpan={2}>
                <Item dataField="StateID" />
                <Item dataField="Address" />
              </Item> */}

            </Form>


          
          </Editing>
          <Export enabled={true} allowExportSelectedData={true} />

        </DataGrid>
      





        

           
        

        </div>
    )
}