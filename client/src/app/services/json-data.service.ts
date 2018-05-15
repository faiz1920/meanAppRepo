import { SERVER_APP_URL, DATA_END_POINTS } from './../commons/app.config';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TreeNode } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {


  constructor(private _http: Http) { }

  getCustomersList() {
    return this._http.get(SERVER_APP_URL + DATA_END_POINTS.CUSTOMERS_LIST)
      .toPromise()
      .then(res => { return res.json() });
  }

  getFiles() {
    return this._http.get('assets/json/files.json')
      .toPromise()
      .then(res => { return res.json() });
  }
}
