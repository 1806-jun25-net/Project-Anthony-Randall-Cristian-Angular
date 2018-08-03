import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationsComponent } from './locations/locations.component';

const appRoutes: Routes =[
  {path: "login", component: LoginComponent },
  {path: "dashboard", component: DashboardComponent },
  {path: "Locations", component: LocationsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRoutingModule { }
