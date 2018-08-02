import { Component, OnInit } from '@angular/core';
import { ZVRPubapiService } from '../zvrpubapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Username: string = "";
  Password: string = "";

  constructor(private api: ZVRPubapiService) { }

  ngOnInit() {
  }

  submit(){
    if (this.Username !== "" && this.Password !== ""){
      this.api.submitLogin(this.Username, this.Password, (res)=>console.log((res)), (res)=>console.log((res)));
    }
  }
}
