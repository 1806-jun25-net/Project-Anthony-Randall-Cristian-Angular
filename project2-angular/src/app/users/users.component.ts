import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ZVRPubapiService } from '../zvrpubapi.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[] = [];

  constructor(private api: ZVRPubapiService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.api.getAllUsers((res)=>{console.log("success");  this.users = res;}, (res)=>console.log("failure"));
  };
}