import { Component, OnInit } from '@angular/core';
import { Location } from '../models/Location';
import { ZVRPubLocationsService } from '../zvrpub-locations.service';
import { SlicePipe } from '../../../node_modules/@angular/common';
import { ZVRPubapiService } from '../zvrpubapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  location: Location[] = [];

  constructor(private api: ZVRPubapiService) { }

  ngOnInit() {
    this.getLocations();
  }

  getLocations(){
    this.api.getAllLocations((res)=>{console.log("success"); this.location = res.results;}, (res)=>console.log("failure"));
  };

}
