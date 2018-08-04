import { Component, OnInit } from '@angular/core';
import { Location } from '../models/Location';
import { ZVRPubapiService } from '../zvrpubapi.service';
import { Inventory } from '../models/Inventory';
import { LocationHasInventory } from '../models/LocationHasInventory';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  location: Location[] = [];
  inventory: Inventory[] = [];
  locationHasInventory: LocationHasInventory[] = [];
  city: string = "";

  constructor(
    private api: ZVRPubapiService,
    private route: ActivatedRoute
  
  ) { }

  ngOnInit() {
    this.getLocations();
    this.getInventory();
    this.getInventoryHasLocation();
  }

  getLocations(){
    this.api.getAllLocations((res)=>{console.log("success");  this.location = res;}, (res)=>console.log("failure"));
   
  };
  
  getLocationsById(){
    let locationId = this.route.snapshot.paramMap.get("id")
    this.api.getAllLocationsById(locationId, (res)=>{console.log("success");  this.location = res;}, (res)=>console.log("failure"));
  };
  
  
    
  getInventory(){
    this.api.getAllInventory((res)=>{console.log("success");  this.inventory = res;}, (res)=>console.log("failure"));
  };

  getInventoryHasLocation(){
    this.api.getAllLocationsInventory((res)=>{console.log("success");  this.locationHasInventory = res;}, (res)=>console.log("failure"));
  };



}