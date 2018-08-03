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
    let url = "https://project2zvrapi.azurewebsites.net/api/account/loginmanager";
    let request = this.httpClient.post(url, { "username": username, "userpassword": password });
    let promise = request.toPromise();

    promise.then((res) => {
      this.document.location.href = "http://localhost:4200/dashboard"
    }, (res) => this.document.location.href = "https://project2zoellnerrosariovalentin.azurewebsites.net/Account/Login");

  }

  getAllLocations(success, failure) {

    let url = 'https://project2zvrapi.azurewebsites.net/api/locations'
    let request = this.httpClient.get(url);
    let promise = request.toPromise();

    promise.then((res) => { console.log("gathered locations from database"); success(res); }, (res) => console.log("failed to gather locations from database"));
  }

  getAllUsers(success, failure) {

    let url = 'https://project2zvrapi.azurewebsites.net/api/user'
    let request = this.httpClient.get(url);
    let promise = request.toPromise();

    promise.then((res) => { console.log("gathered users from database"); success(res); }, (res) => console.log("failed to gather users from database"));
  }

  getUserByUsername(username: string, success, failure) {
    let url = 'https://project2zvrapi.azurewebsites.net/api/user/username?=' + username;
    let request = this.httpClient.get(url);
    let promise = request.toPromise();

    promise.then((res)=>{console.log("gathered desired user"); success(res);}, (res)=>console.log("failed to gather desired user"));
  }
}

