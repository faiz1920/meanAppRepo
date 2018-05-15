import { JsonDataService } from './../../services/json-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-sites-list',
  templateUrl: './customer-sites-list.component.html',
  styleUrls: ['./customer-sites-list.component.css']
})
export class CustomerSitesListComponent implements OnInit {

  constructor(private _dataService: JsonDataService) { }

  ngOnInit() {
    let customerList;
    this._dataService.getCustomersList().then(
      success => { console.log(JSON.stringify(success)); },
      error => { console.error(JSON.stringify(error)); }
    );

  }

}
