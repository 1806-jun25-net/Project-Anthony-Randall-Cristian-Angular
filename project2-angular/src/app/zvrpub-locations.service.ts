import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Location } from './models/Location';
import { ZVRPubapiService } from './zvrpubapi.service';

@Injectable({
  providedIn: 'root'
})
export class ZVRPubLocationsService {

  getLocations(){
    this.api.getAllLocations((res)=>console.log("success"), (res)=>console.log("failure"));
  }

  constructor(private api: ZVRPubapiService) { }
}
