import { Component,Inject } from '@angular/core';
import { SocialUser,SocialAuthService, } from '@abacritt/angularx-social-login';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../AuthService/authentication.service';

import { SignUpComponent } from '../sign-up/sign-up.component';
import { FarmerSignUpComponent } from '../sign-up/farmer-sign-up/farmer-sign-up.component';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';

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
  private socialService: SocialAuthService,
  @Inject(MAT_DIALOG_DATA) public data: any
){}
email: any;
password: any;
profile:any;
isPasswordVisible = false;

socialUser: SocialUser
isLoggedIn: boolean;

  loginUser(){
    let form = new FormData();
    form.append('email',this.email),
    form.append('password',this.password),
    this.service.login(form)
    this.dialogRef.close();
  }

  signInWithGoogle(){
    this.socialService.authState.subscribe((user:any)=>{
    this.isLoggedIn = (user != null)
    if(this.isLoggedIn){
      this.socialUser = user
      let username = `${this.socialUser.firstName} ${this.socialUser.lastName}`
      console.log(this.socialUser.idToken.slice(0,50))
      let form = new FormData();
      form.append('username',username),
      form.append('email',this.socialUser.email),
      form.append('password',this.socialUser.idToken.slice(0,50)),
      this.service.googleRegistration(form)
      this.dialogRef.close();
    }
    })
  }
  
  closeDialog() {
    this.dialogRef.close();
  }

  showForgotDialog() {
    this.dialogRef.close()
    let dialogRef = this.dialog.open(ForgotpasswordComponent,{
      width: '25pc',
      maxWidth: '90vw',
      autoFocus: false,
      maxHeight: '90vh',
    })
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
