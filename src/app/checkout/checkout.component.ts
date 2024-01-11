import { Component } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  email: any;
  firstname:any;
  lastname:any;
  companyname:any;
  address: any;
  apartment:any
  postcode:any
  phone: any;
  city: any;
  cardnumber: any;
  cardname: any;
  expiration: any;
  securitycode: any;

  constructor(private dialog:MatDialog){}

  showSignUpDialog(){
    const dialogRef = this.dialog.open(SignUpComponent,{
      width: '25pc',
      maxWidth: '90vw',
      autoFocus: false,
      maxHeight: '100vh'
    }); 
  }

  showLoginDialog(){
    const dialogRef = this.dialog.open(LoginComponent,{
      width: '25pc',
      maxWidth: '90vw',
      autoFocus: false,
      maxHeight: '90vh',
    });
  }

}
