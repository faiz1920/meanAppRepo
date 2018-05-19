import { JsonDataService } from './../../services/json-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _dataService: JsonDataService) { }

  ngOnInit() {
    this._dataService.getMenu().then(
      success => { console.log(JSON.stringify(success)); },
      error => { console.error(JSON.stringify(error)); }
    );

  }

}
