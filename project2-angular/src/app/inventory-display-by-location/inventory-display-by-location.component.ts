import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../models/Location';
import { ZVRPubapiService } from '../zvrpubapi.service';
import { Inventory } from '../models/Inventory';
import { LocationHasInventory } from '../models/LocationHasInventory';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-inventory-display-by-location',
  templateUrl: './inventory-display-by-location.component.html',
  styleUrls: ['./inventory-display-by-location.component.css']
})
export class InventoryDisplayByLocationComponent implements OnInit {
  @Input() loc: Location;
  inventory: Inventory[] = [];

  constructor(
    private api: ZVRPubapiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getLocationInventory();
  }
  
  getLocationInventory(){
    let city = this.route.snapshot.paramMap.get("city");
    this.api.getInventoryFromCityName(city, (res)=>{console.log("overall success"); this.inventory = res}, (res)=>console.log("failed to gather location"))
  }
}
