import { Component, OnInit } from '@angular/core';
import { Location } from '../models/Location';
import { ZVRPubLocationsService } from '../zvrpub-locations.service';
import { SlicePipe } from '../../../node_modules/@angular/common';
import { ZVRPubapiService } from '../zvrpubapi.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  location: Location[] = [];

  constructor(private api: ZVRPubapiService) { }

  ngOnInit() {
    this.getLocations();
  }

  getLocations(){
    this.api.getAllLocations((res)=>{console.log("success"); this.location = res;}, (res)=>console.log("failure"));
  };

}
