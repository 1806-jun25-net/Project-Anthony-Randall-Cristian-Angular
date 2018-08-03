import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';
import { ZVRPubapiService } from '../zvrpubapi.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User

  constructor(
    private api: ZVRPubapiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getSingleUser();
  }

  getSingleUser(){
    let name = this.route.snapshot.paramMap.get("username")
    this.api.getUserByUsername(name, (res)=>{console.log("success"); this.user = res}, (res)=>console.log("failure"))
  }
}
