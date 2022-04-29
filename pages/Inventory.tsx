
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
  SearchPanel, FilterPanel,HeaderFilter ,
  Scrolling, 
  MasterDetail,
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
import {
  ColumnChooser, LoadPanel, Toolbar, 
} from 'devextreme-react/data-grid';
import {InventoryData} from "../back_end/inventorydata.js";
import SelectBox from 'devextreme-react/select-box';
import {
  Summary, GroupItem, SortByGroupSummaryInfo,
} from 'devextreme-react/data-grid';

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
  const [count, setCount] = React.useState("");
  const groupingValues = [{
    value: 'CustomerStoreState',
    text: 'Grouping by State',
  }, {
    value: 'Product',
    text: 'Grouping by Product',
  }]; 

    return(

        <div className={styles.pagewrapper}>
          <Menu styles={styles}/>

                <DataGrid
                    className={styles.datagrid}
                    dataSource={InventoryData}
                    allowColumnReordering={true}
                    rowAlternationEnabled={true}
                    showBorders={true}
                    height={"70%"}
                    // filterValue={"Type"}
                    filterBuilderPopup={{}}
                    // ref={}

                    // onContentReady={onContentReady}
                >

                          {/* <LoadPanel enabled={true} /> */}
            <GroupPanel visible={true} allowColumnDragging={true} />
            <SearchPanel visible={true} highlightCaseSensitive={true} />
            <Toolbar>
                <Item name="addRowButton" />
                <Item name="applyFilterButton" />
                <Item name="exportButton" />
                <Item name="columnChooserButton	" />
                <Item name="searchPanel" />
                <Item name="groupPanel" />
                {/* <Item>  
                  <SelectBox 
                        visible={true}
                        width="225"
                        items={groupingValues}
                        displayExpr="text"
                        valueExpr="value"
                        // value={state.grouping}
                        // onValueChanged={groupChanged}
                    /> 
                </Item> */}
            </Toolbar>


                    

  


                      
                    
            <Grouping autoExpandAll={false} />

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
                <Item dataField="ID" />
                <Item dataField="Food Quantity" />
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

                    <Scrolling mode="virtual" />
                    <Selection mode="multiple" />
                    <Export enabled={true} allowExportSelectedData={true} />

                    <Column dataField="Animal" groupIndex={0} />


                    <Column dataField="Name" dataType="string" width={150} />
                    <Column
                    dataField="ID"
                    caption="ID"
                    dataType="number"
                    format="fixedPoint"
                    alignment="left"
                    />
                    <Column dataField="Gender" dataType="string" />
                    <Column
                    dataField="Food Quantity"
                    caption="Food %"
                    dataType="number"
                    format="percent"
                    alignment="left"
                    allowGrouping={false}
                    cellRender={DiscountCell}
                    cssClass="bullet"
                    />        
                    {/* <Column dataField="Type" dataType="string" /> */}
                    <Column dataField="Medical Conditions" caption="Conditions" dataType="string" />
                    <Column dataField="BirthDate" dataType="date" />
                    <Column dataField="DeathDate" dataType="date" />
                    <Column dataField="Notes" dataType="string" />


                    <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
                    <Paging defaultPageSize={10} />

                    <Summary>
                    <GroupItem
                      column="ID"
                      summaryType="count"
                      valueFormat="fixedPoint"
                      showInGroupFooter={false}
                      alignByColumn={true} />

                    </Summary>
                </DataGrid>
                
            







            <div className={styles.boxone}>

            {/* <ReactFlexyTable data={data}
            globalSearch
            showExcelButton 
/> */}

            </div>

           
        

        </div>
    )
}