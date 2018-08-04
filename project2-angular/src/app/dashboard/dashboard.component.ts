import { Component, OnInit } from '@angular/core';
import { DashboardButton } from '../models/dashboardButton';
import { ZVRPubLocationsService } from '../zvrpub-locations.service';
import { SlicePipe } from '../../../node_modules/@angular/common';
import { ZVRPubapiService } from '../zvrpubapi.service';
import { RouterTestingModule } from '@angular/router/testing';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboard: DashboardButton[] = [
    {name: "Users"},
    {name: "Locations"},
    {name: "Orders"}
  ];

  constructor(private api: ZVRPubapiService) { }

  ngOnInit() {
  }

  

}
