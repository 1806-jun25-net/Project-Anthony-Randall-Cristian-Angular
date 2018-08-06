import { Component, OnInit } from '@angular/core';
import { BigOrder } from '../models/BigOrder';
import { ZVRPubapiService } from '../zvrpubapi.service';

@Component({
  selector: 'app-super-order',
  templateUrl: './super-order.component.html',
  styleUrls: ['./super-order.component.css']
})
export class SuperOrderComponent implements OnInit {
bigOrde: BigOrder;

  constructor(private api: ZVRPubapiService) { }

  ngOnInit() {
    this.getOrders();
  }

 
  
  getOrders(){
    console.log("enter get Order")
    this.api.getAllOrders((res)=> {console.log("success"); this.bigOrde = res}  , (res)=> console.log("failure"));

  }
 

}
