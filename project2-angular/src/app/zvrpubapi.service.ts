import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ZVRPubapiService {

  constructor(private httpClient: HttpClient,
              @Inject(DOCUMENT) private document: any) { }

  submitLogin(username: string, password: string, success, failure){
    let url = "https://project2zvrapi.azurewebsites.net/api/account/login";
    let request = this.httpClient.post(url, {username, password}, {withCredentials: true} );
    let promise = request.toPromise();

    promise.then(success, failure);

    this.goToUrl();
  }

  goToUrl() {
    this.document.location.href = 'https://project2zoellnerrosariovalentin.azurewebsites.net/'
  }
}

