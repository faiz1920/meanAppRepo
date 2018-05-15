import { NumericEditor } from './components/dynamic-table/numeric-editor.component';
import { MoodRenderer } from './components/dynamic-table/mood-renderer.component';
import { MoodEditor } from './components/dynamic-table/mood-editor.component';
import { AppRoutingModule } from './app.router';
import { RouterModule } from '@angular/router';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { CustomerSitesListComponent } from './components/customer-sites-list/customer-sites-list.component';
import { FloatingGenericDashboardComponent } from './dashboards/floating-generic-dashboard/floating-generic-dashboard.component';
import { GridsterModule } from 'angular2gridster';
import { Observable } from 'rxjs';
import { TestDashboardComponent } from './dashboards/test-dashboard/test-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTreeComponent } from './components/primeng/data-tree/data-tree.component';
import { TreeModule } from 'primeng/tree';
@NgModule({
  declarations: [
    AppComponent,
    MoodEditor, MoodRenderer, NumericEditor, DynamicTableComponent,
    HomeComponent, CustomersListComponent, CustomersDetailsComponent,
    CustomerSitesListComponent, FloatingGenericDashboardComponent,
    TestDashboardComponent,
    DataTreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    GridsterModule,
    TreeModule,
    AgGridModule.withComponents([MoodEditor, MoodRenderer, NumericEditor])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
