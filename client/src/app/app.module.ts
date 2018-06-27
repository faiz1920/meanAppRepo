// Modules Import
import { AppRoutingModule } from './app.router';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { GridsterModule } from 'angular2gridster';
import { Observable } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//PrimeNG Modules
import { TreeModule } from 'primeng/tree';
import { SlideMenuModule } from 'primeng/slidemenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

//Service Import
import { AppService } from './app.service';

// Components Import
import { NumericEditor } from './components/dynamic-table/numeric-editor.component';
import { MoodRenderer } from './components/dynamic-table/mood-renderer.component';
import { MoodEditor } from './components/dynamic-table/mood-editor.component';
import { DynamicComponentLoaderComponent } from './commons/dynamic-component-loader/dynamic-component-loader.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { CustomerSitesListComponent } from './components/customer-sites-list/customer-sites-list.component';
import { FloatingGenericDashboardComponent } from './dashboards/floating-generic-dashboard/floating-generic-dashboard.component';
import { TestDashboardComponent } from './dashboards/test-dashboard/test-dashboard.component';
import { DataTreeComponent } from './components/primeng/data-tree/data-tree.component';

//PrimeNG Components
import { SlideMenuComponent } from './components/primeng/slide-menu/slide-menu.component';
import { BreadcrumbComponent } from './components/primeng/breadcrumb/breadcrumb.component';
import { MenubarComponent } from './components/primeng/menubar/menubar.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { MenuComponent } from './components/menu/menu.component';
import { JsonDataService } from './services/json-data.service';
import { CustomerDashboardComponent } from './dashboards/customer-dashboard/customer-dashboard.component';
import { CommonDataService } from './services/common-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MoodEditor, MoodRenderer, NumericEditor, DynamicTableComponent,
    HomeComponent, CustomersListComponent, CustomersDetailsComponent,
    CustomerSitesListComponent, FloatingGenericDashboardComponent,
    TestDashboardComponent,
    DataTreeComponent, DynamicComponentLoaderComponent, SlideMenuComponent, BreadcrumbComponent, MenubarComponent, UserLoginComponent, MenuComponent, CustomerDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    GridsterModule,
    TreeModule, SlideMenuModule, BreadcrumbModule, MenubarModule, ButtonModule, InputTextModule,
    AgGridModule.withComponents([MoodEditor, MoodRenderer, NumericEditor])
  ],
  providers: [AppService, JsonDataService, CommonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
