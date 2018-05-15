import { JsonDataService } from './../../services/json-data.service';
import { Component, OnInit } from '@angular/core';
import { NumericEditor } from './numeric-editor.component';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customersList: any;

  constructor(private _dataService: JsonDataService) { }

  ngOnInit() {
    this._dataService.getCustomersList().then(
      success => { this.setCustomerData(success); console.log(JSON.stringify(success.length)); },
      error => { console.error(JSON.stringify(error)); }
    );

  }
  getCustomerDetails(customer) {
    console.log(JSON.stringify(customer));
  }

  setCustomerData(data) {
    this.customersList = data;
    this.buildTable();
  }
  title = 'app';
  jsonData;
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private rowData;
  private frameworkComponents;

  buildTable() {
    this.columnDefs = [
      {
        headerName: "Name",
        field: "ite_code",
        width: 300,
        editable: true,
        // cellEditor: "agRichSelect",
        // cellEditorParams: {
        //   values: [
        //     "Bob",
        //     "Harry",
        //     "Sally",
        //     "Mary",
        //     "John",
        //     "Jack",
        //     "Sue",
        //     "Sean",
        //     "Niall",
        //     "Albert",
        //     "Fred",
        //     "Jenny",
        //     "Larry"
        //   ]
        // }
      },
      {
        headerName: "Mood",
        field: "group_code",
        editable: true,
        width: 300
      },
      {
        headerName: "Numeric",
        field: "group_name",
        // cellEditor: "numericEditor",
        editable: true,
        width: 280
      }
    ];
    // this.rowData = createRowData();
    this.rowData = this.customersList;
    this.frameworkComponents = {
      numericEditor: NumericEditor
    };

    // this.sizeToFit();
    setTimeout(
      this.autoSizeAll(), 1000);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }
  onRowEditingStarted(event) {
    console.log('never called - not doing row editing');
  }
  onRowEditingStopped(event) {
    console.log('never called - not doing row editing');
  }
  onCellEditingStarted(event) {
    console.log('cellEditingStarted');
  }
  onCellEditingStopped(event) {
    console.log('cellEditingStopped');
  }



  updateData(event) {
    console.log(JSON.stringify(this.rowData));
  }


  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }

  autoSizeAll() {
    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function (column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }
}

function createRowData() {
  return [
    {
      name: "Bob",
      mood: "Happy",
      number: 10
    },
    {
      name: "Harry",
      mood: "Sad",
      number: 3
    },
    {
      name: "Sally",
      mood: "Happy",
      number: 20
    },
    {
      name: "Mary",
      mood: "Sad",
      number: 5
    },
    {
      name: "John",
      mood: "Happy",
      number: 15
    },
    {
      name: "Jack",
      mood: "Happy",
      number: 25
    },
    {
      name: "Sue",
      mood: "Sad",
      number: 43
    },
    {
      name: "Sean",
      mood: "Sad",
      number: 1335
    },
    {
      name: "Niall",
      mood: "Happy",
      number: 2
    },
    {
      name: "Alberto",
      mood: "Happy",
      number: 123
    },
    {
      name: "Fred",
      mood: "Sad",
      number: 532
    },
    {
      name: "Jenny",
      mood: "Happy",
      number: 34
    },
    {
      name: "Larry",
      mood: "Happy",
      number: 13
    }
  ];
}
