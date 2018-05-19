import { SERVER_APP_URL, DATA_END_POINTS } from './../commons/app.config';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TreeNode } from 'primeng/api';

const DEFAULT_USER = { "create_date": "2018-05-16T06:07:07.009Z", "_id": "faiz1920", "user_name": "faiz1920", "password": "admin@007", "user_type": "admin", "__v": 0 };

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {

  constructor(private _http: Http) { }

  getFiles() {
    return this._http.get('assets/json/files.json')
      .toPromise()
      .then(res => { return res.json() });
  }

  getCustomersList() {
    return this._http.get(SERVER_APP_URL + DATA_END_POINTS.CUSTOMERS_LIST)
      .toPromise()
      .then(res => { return res.json() });
  }

  getMenu() {
    return this._http.post(SERVER_APP_URL + DATA_END_POINTS.MENU, DEFAULT_USER)
      .toPromise()
      .then(res => { return res.json() });
  }

  userLogin(id: String, password: String) {
    let userData = {
      "id": id,
      "password": password
    }
    return this._http.post(SERVER_APP_URL + DATA_END_POINTS.USER_LOGIN, userData)
      .toPromise()
      .then(res => { return res.json() });
  }
}
