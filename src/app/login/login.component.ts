import { Component,Output, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../AuthService/authentication.service';
import { Router } from '@angular/router';
import { AuthService } from '../Auth/auth.service';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(
  public dialogRef: MatDialogRef<LoginComponent>,
  private dialog:MatDialog,
  public service: AuthenticationService,
){}
email: any;
password: any;
profile:any;

  loginUser(){
    let form = new FormData();
    form.append('email',this.email),
    form.append('password',this.password),
    this.service.login(form)
    this.dialogRef.close();
  }
  
  closeDialog() {
    this.dialogRef.close();
  }
  showSignUpDialog(){
    this.dialogRef.close()
    const dialogRef = this.dialog.open(SignUpComponent,{
      width: '25pc'
    });
  }
}
