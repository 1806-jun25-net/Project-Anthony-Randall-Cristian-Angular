import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Location } from './models/Location';
import { ZVRPubapiService } from './zvrpubapi.service';
import { SELECT_VALUE_ACCESSOR } from '../../node_modules/@angular/forms/src/directives/select_control_value_accessor';

@Injectable({
  providedIn: 'root'
})
export class ZvrpubInventoryDisplayByLocationService {

  getLocations(success){
    this.api.getAllLocations((res)=>success(res), (res)=>console.log("failure"));
  }
  
  // getLocationsInventory(success){
  //   this.api.getAllLocationsInventory((res)=>success(res), (res)=>console.log("failure"));
  // }

  // getInventory(success){
  //   this.api.getAllInventory((res)=>success(res), (res)=>console.log("failure"));
  // }
  constructor(private api: ZVRPubapiService) { }
}
