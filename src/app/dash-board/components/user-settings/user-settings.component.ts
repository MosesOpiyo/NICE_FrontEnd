import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { AuthenticationStoreService } from 'src/app/AuthServiceStore/authentication-store.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  user:any
  newEmail:any
  newNumber:any
  newUsername:any
  password:any
  newPassword:any
  confirmNewPassword:any
  isPasswordVisible = false;
  
constructor(private dialog:MatDialog,private snackbar:MatSnackBar,private service:AuthenticationService,private store:AuthenticationStoreService){}

ngOnInit(): void {
  this.store.data$.subscribe((res:any) => {
    this.user = res
    console.log(this.user)
  })
}



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

showConfirmPasswordDialog(attr:any){
  if(attr == 'email'){
    this.newNumber = null;
    this.newUsername = null;
    const dialogRef = this.dialog.open(ConfirmPasswordComponent,{
      width: '25pc',
      autoFocus: false,
      maxHeight: '90vh',
      data:{
        value:this.newEmail,
        key:'email'
      }
    });
  }else if(attr == 'username'){
    this.newEmail = null
    this.newNumber = null
    const dialogRef = this.dialog.open(ConfirmPasswordComponent,{
      width: '25pc',
      autoFocus: false,
      maxHeight: '90vh',
      data:{
        value:this.newUsername,
        key:'username'
      }
    });
  }else if(attr == 'phone_number'){
    this.newEmail = null
    this.newUsername = null
    const dialogRef = this.dialog.open(ConfirmPasswordComponent,{
      width: '25pc',
      autoFocus: false,
      maxHeight: '90vh',
      data:{
        value:this.newNumber,
        key:'phone_number'
      }
    });
  }
  else{
    this.snackbar.open("Please Enter Your New Email.", 'Close', {
      duration: 3000,
      panelClass: ['blue-snackbar']
    });
  }
}

togglePasswordVisibility() {
  this.isPasswordVisible = !this.isPasswordVisible;
}

}
