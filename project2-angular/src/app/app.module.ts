import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '../../node_modules/@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationsComponent } from './locations/locations.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { InventoryDisplayByLocationComponent } from './inventory-display-by-location/inventory-display-by-location.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LocationsComponent,
    UsersComponent,
    UserDetailsComponent,
    InventoryDisplayByLocationComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
