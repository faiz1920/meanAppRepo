/*
@Author : Faiz Ansari
@Email : faiz1920@live.in
@Created Date : May 11 2018
@File Name : test-dashboard.component.ts
@Description : Generic component for implementing Gridster functionality.
@Link : https://github.com/swiety85/angular2gridster
*/


import { Component, OnInit, ViewEncapsulation, ViewChild, Output, EventEmitter } from '@angular/core';
import { GridsterComponent, IGridsterOptions, IGridsterDraggableOptions } from 'angular2gridster';
import { AutoWidthCalculator } from 'ag-grid';
import { DynamicTableComponent } from '../../components/dynamic-table/dynamic-table.component';
import { Gridster } from '../../commons/gridster';
import { EventsEmitService } from '../../services/events-emit.service';
import { CustomersListComponent } from '../../components/customers-list/customers-list.component';
import { DataTreeComponent } from '../../components/primeng/data-tree/data-tree.component';
import { SlideMenuComponent } from '../../components/primeng/slide-menu/slide-menu.component';
import { BreadcrumbComponent } from '../../components/primeng/breadcrumb/breadcrumb.component';
import { MenubarComponent } from '../../components/primeng/menubar/menubar.component';

@Component({
  selector: 'app-test-dashboard',
  templateUrl: './test-dashboard.component.html',
  styleUrls: ['./test-dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestDashboardComponent extends Gridster implements OnInit {

  constructor(private _eventEmit: EventsEmitService) {
    super();
  }
  ngOnInit() {
    this.addstaticWidgets();
  }

  addstaticWidgets() {
    this.widgetsCopy = this.widgets.map(widget => ({ ...widget }));
    let widget = [
      {
        x: 0, y: 0, w: 10, h: 10,
        dragAndDrop: true,
        resizable: true,
        title: 'DynamicTableComponent',
        content: {
          component: DynamicTableComponent,
          inputs: {
            showNum: 9
          }
        }
      },
      {
        x: 10, y: 0, w: 10, h: 10,
        dragAndDrop: true,
        resizable: true,
        title: 'CustomersListComponent',
        content: {
          component: CustomersListComponent,
          inputs: {
            showNum: 9
          }
        }
      },
      {
        x: 20, y: 0, w: 10, h: 10,
        dragAndDrop: true,
        resizable: true,
        title: 'DataTreeComponent',
        content: {
          component: DataTreeComponent,
          inputs: {
            showNum: 9
          }
        }
      },
      {
        x: 30, y: 0, w: 10, h: 10,
        dragAndDrop: true,
        resizable: true,
        title: 'SlideMenuComponent',
        content: {
          component: SlideMenuComponent,
          inputs: {
            showNum: 9
          }
        }
      },
      {
        x: 40, y: 0, w: 10, h: 10,
        dragAndDrop: true,
        resizable: true,
        title: 'BreadcrumbComponent',
        content: {
          component: BreadcrumbComponent,
          inputs: {
            showNum: 9
          }
        }
      },
      {
        x: 0, y: 10, w: 50, h: 6,
        dragAndDrop: true,
        resizable: true,
        title: 'MenubarComponent',
        content: {
          component: MenubarComponent,
          inputs: {
            showNum: 9
          }
        }
      }
    ];
    this.addWidgets(this.gridster, widget);
  }

  itemChange($event: any, gridster) {
    console.log('item change', $event);
    if ($event["changes"].includes("w") || $event["changes"].includes("h"))
      this._eventEmit.emitNavChangeEvent("hello");
  }

}

