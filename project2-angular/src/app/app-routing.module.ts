import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationsComponent } from './locations/locations.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { InventoryDisplayByLocationComponent } from './inventory-display-by-location/inventory-display-by-location.component';
import { OrderComponent} from './order/order.component';

const appRoutes: Routes =[
  {path: "login", component: LoginComponent },
  {path: "dashboard", component: DashboardComponent },
  {path: "Locations", component: LocationsComponent},
  {path: "Users", component: UsersComponent},
  {path: "detail/:username", component: UserDetailsComponent},
  {path: "inventory/:city", component: InventoryDisplayByLocationComponent},
  {path: 'Orders', component: OrderComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRoutingModule { }
