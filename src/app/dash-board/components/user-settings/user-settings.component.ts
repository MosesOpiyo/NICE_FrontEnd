import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent {
  newEmail:any
  password:any
  newPassword:any
  confirmNewPassword:any
constructor(private dialog:MatDialog,private snackbar:MatSnackBar,private service:AuthenticationService){}

changePassword(){
  if(this.confirmNewPassword == this.newPassword){
    let form = new FormData()
    form.append('password',this.password)
    form.append('new_password',this.newPassword)
    this.service.changePassword(form)

  }else{
    this.snackbar.open("Passwords Do Not Match.", 'Close', {
      duration: 3000,
      panelClass: ['blue-snackbar']
    });
  }
}

showConfirmPasswordDialog(){
  if(this.newEmail){
    const dialogRef = this.dialog.open(ConfirmPasswordComponent,{
      width: '25pc',
      autoFocus: false,
      maxHeight: '90vh',
      data:{
        email:this.newEmail
      }
    });
  }else{
    this.snackbar.open("Please Enter Your New Email.", 'Close', {
      duration: 3000,
      panelClass: ['blue-snackbar']
    });
  }
}
}
