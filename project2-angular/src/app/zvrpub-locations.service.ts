import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Location } from './models/Location';
import { ZVRPubapiService } from './zvrpubapi.service';
import { SELECT_VALUE_ACCESSOR } from '../../node_modules/@angular/forms/src/directives/select_control_value_accessor';

@Injectable({
  providedIn: 'root'
})
export class ZVRPubLocationsService {

  getLocations(success){
    this.api.getAllLocations((res)=>success(res), (res)=>console.log("failure"));
  }

  constructor(private api: ZVRPubapiService) { }
}
