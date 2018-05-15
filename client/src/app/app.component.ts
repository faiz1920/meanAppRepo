import { AppService } from './app.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import "ag-grid-enterprise";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
