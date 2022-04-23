
import styles from '../styles/dashboard.module.css'

import Header from '../components/dashboard/Header'
import Menu from '../components/dashboard/Menu'
import Navigation from '../components/dashboard/Navigation'
import DailyTasks from '../components/dashboard/DailyTasks'
import Chart from '../components/dashboard/Chart'
import Link from "next/link";
import ReactFlexyTable from "react-flexy-table";
import 'react-flexy-table/dist/index.css'
import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import ODataStore from 'devextreme/data/odata/store';

import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel,
} from 'devextreme-react/data-grid';

import DiscountCell from "../components/DiscountCell";

const pageSizes = [10];

const dataSourceOptions = {
  store: new ODataStore({
    url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
    key: 'Id',
    beforeSend(request) {
      request.params.startDate = '2020-05-10';
      request.params.endDate = '2020-05-15';
    },
  }),
};

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
    
    // Inventory data (progress bars %)
    const bars = {
        "one": [10, "cow food"],
        "two": [50, "pig food"],
        "three": [20, "chiken food"],
        "four": [70, "horse hay"],
    }

    return(

        <div className={styles.pagewrapper}>


<DataGrid
        dataSource={dataSourceOptions}
        allowColumnReordering={true}
        rowAlternationEnabled={true}
        showBorders={true}
        // onContentReady={onContentReady}
      >
        <GroupPanel visible={true} />
        <SearchPanel visible={true} highlightCaseSensitive={true} />
        <Grouping autoExpandAll={false} />

        <Column dataField="Product" groupIndex={0} />
        <Column
          dataField="Amount"
          caption="Sale Amount"
          dataType="number"
          format="currency"
          alignment="right"
        />
        <Column
          dataField="Discount"
          caption="Discount %"
          dataType="number"
          format="percent"
          alignment="right"
          allowGrouping={false}
          cellRender={DiscountCell}
          cssClass="bullet"
        />
        <Column dataField="SaleDate" dataType="date" />
        <Column dataField="Region" dataType="string" />
        <Column dataField="Sector" dataType="string" />
        <Column dataField="Channel" dataType="string" />
        <Column dataField="Customer" dataType="string" width={150} />

        <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
        <Paging defaultPageSize={10} />
      </DataGrid>

            <Menu styles={styles}/>







            <div className={styles.boxone}>

            {/* <ReactFlexyTable data={data}
            globalSearch
            showExcelButton 
/> */}

            </div>

           
        

        </div>
    )
}