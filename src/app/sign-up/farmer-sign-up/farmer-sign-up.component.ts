import { Component,ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IPasswordStrengthMeterService } from 'angular-password-strength-meter';

@Component({
  selector: 'app-farmer-sign-up',
  templateUrl: './farmer-sign-up.component.html',
  styleUrls: ['./farmer-sign-up.component.css']
})
export class FarmerSignUpComponent {
  constructor(
    public dialogRef: MatDialogRef<FarmerSignUpComponent>,
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
      this.service.farmerRegister(form)
      this.dialogRef.close()
    }
   
  }
  

  togglePasswordVisibility() {
  this.isPasswordVisible = !this.isPasswordVisible;
  }

}