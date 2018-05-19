import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../../services/json-data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  private user: any = {};

  constructor(private _dataService: JsonDataService) { }

  ngOnInit() {
  }

  userLogin() {
    this._dataService.userLogin(this.user.id, this.user.password).then(
      success => {
        console.log(JSON.stringify(success));
        if (success)
          alert("Login Successful");
        else
          alert("Invalid User Credentials!");
      },
      error => { console.error(JSON.stringify(error)); }
    );
  }

}
