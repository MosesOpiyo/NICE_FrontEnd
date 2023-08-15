import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from '../AuthService/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(
    public dialogRef: MatDialogRef<SignUpComponent>,
    public service: AuthenticationService
  
  ){}
  username:any;
  email: any;
  password: any;
  is_producer:any;
  is_warehouser:any;
  registerBuyer(){
    if(this.is_producer == false && this.is_warehouser == false){
      let form = new FormData();
    form.append('username',this.username),
    form.append('email',this.email),
    form.append('password',this.password),
    this.service.Register(form)
    }
  }
  switchToProducer(){
    this.is_producer = true
    this.is_warehouser = false
  }
  switchToWarehouser(){
    this.is_producer = false
    this.is_warehouser = true
  }
  switchToBuyer(){
    this.is_producer = false
    this.is_warehouser = false
  }

}
