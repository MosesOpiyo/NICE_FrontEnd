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
  coupon: any;
  billingfirstname: any;
  billinglastname: any;
  billingcompanyname: any;
  billingaddress: any;
  billingapartment: any;
  billingcity: any;
  billingpostcode: any;

  constructor(private dialog:MatDialog){}

  isShowContent: boolean = true;
  checkStatus1(event:any){
    // Check if radio button is checked
    if(event.target.checked == true){
      this.isShowContent = true
    }
    else {
      this.isShowContent = false
    }
  }

  checkStatus2(event:any){
    // Check if radio button is checked
    if(event.target.checked == true){
      this.isShowContent = false
    }
    else {
      this.isShowContent = true
    }
  }

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
