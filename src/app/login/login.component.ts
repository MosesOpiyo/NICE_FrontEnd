import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../AuthService/authentication.service';

import { SignUpComponent } from '../sign-up/sign-up.component';
import { FarmerSignUpComponent } from '../sign-up/farmer-sign-up/farmer-sign-up.component';

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
  @Inject(MAT_DIALOG_DATA) public data: any
){}
email: any;
password: any;
profile:any;
isPasswordVisible = false;

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

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  
  showSignUpDialog(){
    this.dialogRef.close()
    if(this.data.isBuyer){
      const dialogRef = this.dialog.open(SignUpComponent,{
        width: '25pc',
        maxWidth: '90vw',
        autoFocus: false,
        maxHeight: '100vh'
      });
    }
    else{
      const dialogRef = this.dialog.open(FarmerSignUpComponent,{
        width: '25pc',
        maxWidth: '90vw',
        autoFocus: false,
        maxHeight: '100vh'
      });
    }
  }

  // showFarmerSignUpDialog(){
  //   this.dialogRef.close()
  //   const dialogRef = this.dialog.open(FarmerSignUpComponent,{
  //     width: '25pc',
  //     autoFocus: false,
  //     maxHeight: '100vh'
  //   });
  // }
}
