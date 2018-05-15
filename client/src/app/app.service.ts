import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: Http) { }

  getData(filename) {
    return this._http.get(filename)
      .toPromise()
      .then(res => { return res.json() });
  }
}
