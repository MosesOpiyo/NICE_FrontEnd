import { Component,Output, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from '../AuthService/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(
  public dialogRef: MatDialogRef<LoginComponent>,
  public service: AuthenticationService

){}
email: any;
password: any;
profile:any;
  

  loginUser(){
    let form = new FormData();
    form.append('username',this.email),
    form.append('password',this.password),
    this.service.login(form)
    this.dialogRef.close();
  }
  
  closeDialog() {
    this.dialogRef.close();
  }
}
