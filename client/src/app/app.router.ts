import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { TestDashboardComponent } from './dashboards/test-dashboard/test-dashboard.component';
import { FloatingGenericDashboardComponent } from './dashboards/floating-generic-dashboard/floating-generic-dashboard.component';
import { CustomerSitesListComponent } from './components/customer-sites-list/customer-sites-list.component';
import { HomeComponent } from './components/home/home.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTreeComponent } from './components/primeng/data-tree/data-tree.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { MenuComponent } from './components/menu/menu.component';
import { CustomerDashboardComponent } from './dashboards/customer-dashboard/customer-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'table', component: DynamicTableComponent },
  { path: 'customerslist', component: CustomersListComponent },
  { path: 'customersdetails', component: CustomersDetailsComponent },
  { path: 'customersitelist', component: CustomerSitesListComponent },
  { path: 'datatree', component: DataTreeComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'floatinggenericdash', component: FloatingGenericDashboardComponent },
  { path: 'testdash', component: TestDashboardComponent },
  { path: 'customers', component: CustomerDashboardComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
