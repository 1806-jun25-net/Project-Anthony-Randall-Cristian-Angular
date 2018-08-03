import { Component, OnInit } from '@angular/core';
import { Location } from '../models/Location';
import { ZVRPubLocationsService } from '../zvrpub-locations.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  location: Location[] = [];

  constructor(private locationService: ZVRPubLocationsService) { }

  ngOnInit() {
    this.getLocations();
  }

  getLocations(): void{
    this.locationService.getLocations().subscribe(location => this.location)
  }

}
