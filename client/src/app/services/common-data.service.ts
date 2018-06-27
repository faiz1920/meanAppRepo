import { Injectable } from '@angular/core';
import { SERVER_APP_URL, COMMON_END_POINT } from '../commons/app.config';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  constructor(private _http: Http) { }

  // getMethodSample() {
  //   return this._http.get('assets/json/files.json')
  //     .toPromise()
  //     .then(res => { return res.json() });
  // }
  // postMethodSample() {
  //   return this._http.post(SERVER_APP_URL + DATA_END_POINTS.MENU, DEFAULT_USER)
  //     .toPromise()
  //     .then(res => { return res.json() });
  // }

  makeServerRequest(callKey: object, payload?: object) {
    console.log("Server Request ")
    console.log(JSON.stringify(callKey))
    console.log(JSON.stringify(payload))
    return this._http.post(SERVER_APP_URL + "" + COMMON_END_POINT, callKey)
      .toPromise()
      .then(res => { return res.json() });
  }



}
