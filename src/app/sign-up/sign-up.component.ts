import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from '../AuthService/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginComponent } from '../login/login.component';

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
    private snackbar:MatSnackBar
  
  ){}
  username:any;
  email: any;
  password: any;
  is_producer:any;
  is_warehouser:any;
  registerBuyer(){
    if(this.password.length < 8){
      this.snackbar.open("Password must be 8 characters or more.", 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    }
    if(this.password.length >= 8){
      let form = new FormData();
      form.append('username',this.username),
      form.append('email',this.email),
      form.append('password',this.password),
      this.service.Register(form)
      this.dialogRef.close()
    }
   
  }
  showLoginDialog(){
    this.dialogRef.close()
    const dialogRef = this.dialog.open(LoginComponent,{
      width: '25pc'
    });
  }

}
