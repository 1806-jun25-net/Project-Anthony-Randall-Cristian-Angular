import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { SELECT_VALUE_ACCESSOR } from '../../node_modules/@angular/forms/src/directives/select_control_value_accessor';

@Injectable({
  providedIn: 'root'
})
export class ZVRPubapiService {

  public stuff: any;
  constructor(private httpClient: HttpClient,
              @Inject(DOCUMENT) private document: any) { }

  submitLogin(username: string, password: string, success, failure){
    let url = "https://project2zvrapi.azurewebsites.net/api/account/loginmanager";
    let request = this.httpClient.post(url, {"username": username, "userpassword": password}, {withCredentials: true} );
    let promise = request.toPromise();

    promise.then(success, failure);

    url = "https://project2zvrapi.azurewebsites.net/api/account/isadmin";
    request = this.httpClient.post(url, {withCredentials: true});
    promise = request.toPromise();

    promise.then(success, failure);
    
  }

  goToUrl() {
    this.document.location.href = 'https://project2zvrapi.azurewebsites.net/api/account/isadmin'
  }

  getAllLocations(success, failure){
    
    let url = 'https://project2zvrapi.azurewebsites.net/api/locations'
    let request = this.httpClient.get(url);
    let promise = request.toPromise();

    promise.then((res)=>{console.log("gathered locations from database"); this.stuff = res;}, (res)=>console.log("failed to gather locations from database"));
    return this.stuff;
  }
}

