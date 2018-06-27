import { Component, OnInit, Input } from '@angular/core';
import { CommonDataService } from '@app/services/common-data.service';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.css']
})
export class CustomersDetailsComponent implements OnInit {
  @Input() setData: any;

  constructor(private _commonService: CommonDataService) { }

  ngOnInit() {
    console.log("Customer Details");
    if (this.setData) {
      console.log(this.setData)
      this.getCustomerDetails();
    }
  }

  getCustomerDetails() {
    let callKey = { "callKey": this.setData.callKey };
    let payload = { "id": this.setData.data.data._id };
    this._commonService.makeServerRequest(callKey, payload).then(
      success => { console.info(success); },
      error => { console.error(JSON.stringify(error._body)); }
    );
  }
}
