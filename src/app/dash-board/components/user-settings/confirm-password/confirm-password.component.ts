import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent {
  password:any
  
  constructor(private service:AuthenticationService,@Inject(MAT_DIALOG_DATA) public data:any,private dialog:MatDialog){}
  postNewEmail(){
    let form = new FormData()
    form.append('password',this.password)
    form.append('new_email',this.data.email)
    this.service.updateUserEmail(form)
    console.log(this.data.email,this.password)
  }  
}
