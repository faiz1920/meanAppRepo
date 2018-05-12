import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Contact } from './contact';
import 'rxjs';


@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  // Get Contacts
  getContacts(){
    return this.http.get('http://localhost:3000/api/');
  }



}
