import { Component,ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from '../AuthService/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginComponent } from '../login/login.component';
import { IPasswordStrengthMeterService } from 'angular-password-strength-meter';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(
    public dialogRef: MatDialogRef<SignUpComponent>,
    private dialog:MatDialog,
    public service: AuthenticationService,
    private snackbar:MatSnackBar,
    private checker:IPasswordStrengthMeterService,
    private el: ElementRef
  ){
    
  }
  username:any;
  email: any;
  password: any;
  confirm_password:any
  is_producer:any;
  is_warehouser:any;
  isPasswordVisible = false;
  registerBuyer(){
    if(this.checker.score(this.password) < 2){
      this.snackbar.open("Password is too weak. Try Another Password", 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    }
    if(this.password != this.confirm_password){
      this.snackbar.open("Password confirmation does not match. Try again", 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    }
    
    if(this.checker.score(this.password) >= 3 && this.password == this.confirm_password){
      let form = new FormData();
      form.append('username',this.username),
      form.append('email',this.email),
      form.append('password',this.password),
      this.service.Register(form)
      this.dialogRef.close()
    }
   
  }
  

  togglePasswordVisibility() {
  this.isPasswordVisible = !this.isPasswordVisible;
  }
  showLoginDialog(){
    this.dialogRef.close()
    const dialogRef = this.dialog.open(LoginComponent,{
      width: '25pc'
    });
  }

}
