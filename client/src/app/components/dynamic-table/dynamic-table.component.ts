import { NumericEditor } from './numeric-editor.component';
import { MoodEditor } from './mood-editor.component';
import { MoodRenderer } from './mood-renderer.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'app';
  jsonData;

  // constructor(private _appService: AppService) { }

  // ngOnInit(): void {
  //   this._appService.getData("http://localhost:3000/getuser").then(
  //     response => {
  //       console.log(JSON.stringify(response));
  //       this.jsonData = response;
  //     },
  //     reject => {
  //       console.error(JSON.stringify(reject))

  //     }
  //   );
  // }



  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private rowData;
  private frameworkComponents;

  constructor() {
    this.columnDefs = [
      {
        headerName: "Name",
        field: "name",
        width: 300,
        editable: true,
        cellEditor: "agRichSelect",
        cellEditorParams: {
          values: [
            "Bob",
            "Harry",
            "Sally",
            "Mary",
            "John",
            "Jack",
            "Sue",
            "Sean",
            "Niall",
            "Albert",
            "Fred",
            "Jenny",
            "Larry"
          ]
        }
      },
      {
        headerName: "Mood",
        field: "mood",
        cellRenderer: "moodRenderer",
        cellEditor: "moodEditor",
        editable: true,
        width: 300
      },
      {
        headerName: "Numeric",
        field: "number",
        cellEditor: "numericEditor",
        editable: true,
        width: 280
      }
    ];
    this.rowData = createRowData();
    this.frameworkComponents = {
      moodRenderer: MoodRenderer,
      moodEditor: MoodEditor,
      numericEditor: NumericEditor
    };
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
