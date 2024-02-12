import { Component } from '@angular/core';
import { AuthenticationService } from '../AuthService/authentication.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  constructor(private service:AuthenticationService,private dialogRef:MatDialogRef<ForgotpasswordComponent>){}
  email:any
  sendEmail(){
    let form = new FormData();
      form.append('email',this.email),
      this.service.passwordRecoveryEmail(form)
      this.dialogRef.close();
  }
}
