import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '@app/services/common-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private commonService: CommonDataService) { }

  ngOnInit() {
    let callKey = { "callKey": "getProducts" };
    let payload = { "limit": 100 };
    this.commonService.makeServerRequest(callKey, payload).then(
      success => { console.log(success) },
      error => { console.error(error) }
    );
  }

}
