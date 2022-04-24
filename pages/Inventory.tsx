
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
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';
// Our demo infrastructure requires us to use 'file-saver-es'.
// We recommend that you use the official 'file-saver' package in your applications.
import { exportDataGrid } from 'devextreme/excel_exporter';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import {
  Export, Selection
} from 'devextreme-react/data-grid';
import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel,
  Scrolling
} from 'devextreme-react/data-grid';
import {
   Editing,  Lookup,
} from 'devextreme-react/data-grid';
import DiscountCell from "../components/DiscountCell";
import {
  Popup,
  Form,
} from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';
import { Item } from 'devextreme-react/form';
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
  // function constructor(props) {
  //   super(props);
  //   this.employees = service.getEmployees();
  //   this.onExporting = this.onExporting.bind(this);
  // }

    return(

        <div className={styles.pagewrapper}>

                <DataGrid
                    className={styles.datagrid}
                    dataSource={dataSourceOptions}
                    allowColumnReordering={true}
                    rowAlternationEnabled={true}
                    showBorders={true}
                    height={"70%"}

                    // onContentReady={onContentReady}
                >
                    <GroupPanel visible={true} />
                    <SearchPanel visible={true} highlightCaseSensitive={true} />
                    <Grouping autoExpandAll={false} />
                    <Editing
            mode="popup"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true}>
            <Popup title="Employee Info" showTitle={true} width={700} height={525} />
            <Form>
              <Item itemType="group" colCount={2} colSpan={2}>
                <Item dataField="FirstName" />
                <Item dataField="LastName" />
                <Item dataField="Prefix" />
                <Item dataField="BirthDate" />
                <Item dataField="Position" />
                <Item dataField="HireDate" />
                <Item
                  dataField="Notes"
                  editorType="dxTextArea"
                  colSpan={2}
 />
              </Item>

              <Item itemType="group" caption="Home Address" colCount={2} colSpan={2}>
                <Item dataField="StateID" />
                <Item dataField="Address" />
              </Item>
            </Form>
          </Editing>
                    <Scrolling mode="virtual" />
                    <Selection mode="multiple" />
                    <Export enabled={true} allowExportSelectedData={true} />

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