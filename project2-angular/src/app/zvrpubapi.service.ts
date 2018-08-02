import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZVRPubapiService {

  constructor(private httpClient: HttpClient) { }
}

let url = "https://project2zvrapi.azurewebsites.net/";