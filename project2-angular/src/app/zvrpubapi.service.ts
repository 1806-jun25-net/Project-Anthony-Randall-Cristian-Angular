import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { SELECT_VALUE_ACCESSOR } from '../../node_modules/@angular/forms/src/directives/select_control_value_accessor';


@Injectable({
  providedIn: 'root'
})
export class ZVRPubapiService {

  constructor(private httpClient: HttpClient,
    @Inject(DOCUMENT) private document: any) { }



  submitLogin(username: string, password: string, success, failure) {
    // const header =  new HttpHeaders({
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers': 'Content-Type, Origin , Access-Control-* , X-Requested-With, Accept',
    //     'Content-Type':  'application/json,charset=utf-8',
    //     'Accept': 'application/json',
    //     'Allow' : 'GET, POST, PUT, DELETE, OPTIONS, HEAD'
    //   })
    let url = "https://project2zvrapi.azurewebsites.net/api/account/loginmanager";
    let request = this.httpClient.post(url, { "username": username, "userpassword": password });
    let promise = request.toPromise();

    promise.then((res) => {
      this.document.location.href = "http://localhost:4200/dashboard"
    }, (res) => this.document.location.href = "https://project2zoellnerrosariovalentin.azurewebsites.net/Account/Login");

  }

  goToUrl() {
    this.document.location.href = 'https://project2zvrapi.azurewebsites.net/api/account/isadmin'
  }

  getAllLocations(success, failure) {

    let stuff: any;
    let url = 'https://project2zvrapi.azurewebsites.net/api/locations'
    let request = this.httpClient.get(url);
    let promise = request.toPromise();

    promise.then((res) => { console.log("gathered locations from database"); success(res); }, (res) => console.log("failed to gather locations from database"));
  }
}

