import { Component, OnInit } from '@angular/core';
import { ZVRPubapiService } from '../zvrpubapi.service';
import { Orders } from '../models/Orders';
import { User } from '../models/user';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  Orders:Orders [] = [];
  Users:User[]=[];
  constructor(private api: ZVRPubapiService) { }

  ngOnInit() {
    console.log("okay")
      this.getOrders();
  }
  getOrders(){
    console.log("enter get Order")
    this.api.getAllOrders((res)=> {console.log("success");  
    this.Orders = res;  this.api.getAllUsers((res)=> {console.log("success"); 
    this.Users = res}, (res)=> console.log("failure")) }, (res)=> console.log("failure"))
   

  }
}
