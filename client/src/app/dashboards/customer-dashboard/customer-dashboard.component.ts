import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  constructor() { }
  setCustomersData: any = {
    "callKey": "getCustomers"
  };
  setCustomerDetails: any = null;

  ngOnInit() {
  }
  getCustomersData(data) {
    console.warn(data);
    this.setCustomerDetails = {
      "callKey": "getCustomerDetails",
      "data": data
    };
  }

}
