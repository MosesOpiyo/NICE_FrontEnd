import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from 'src/app/login/login.component';
import { AuthenticationService } from 'src/app/AuthService/authentication.service'; 
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';
import { AuthService } from 'src/app/Auth/auth.service';
import { CartService } from '../Service/Cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  num: number = 1;
  num2: number = 1;
  isShowDiv = false;
  isShowDiv2 = false;

  //roasted
  value(value: any) {
    this.num = value.target.value;
  }

  //green
  value2(value: any) {
    this.num2 = value.target.value;
  }

  // product form tabs
  tabs: string [] = ['Roasted', 'Green'];
  activatedTabIndex: number = 0;

  // tabbed-info tabs
  tabs2: string [] = ['Seller Info', 'Reviews'];
  activatedTabIndex2: number = 0;

  myScriptElement: HTMLScriptElement;
  constructor(private dialog: MatDialog,private service:AuthenticationService,private route:Router){
     this.myScriptElement = document.createElement("script");
     this.myScriptElement.src = "./assets/js/main.js";
     document.body.appendChild(this.myScriptElement);
  }

  user:any | null = null;
  isLoggedIn:any

  showLoginDialog(){
   const dialogRef = this.dialog.open(LoginComponent,{
     width: '25pc'
   });
 }

 logout(){
   this.service.logout()
   this.ngOnInit()
 }

 showSignUpDialog(){
   const dialogRef = this.dialog.open(SignUpComponent,{
     width: '25pc'
   }); 
 }

 ngOnInit(): void {
   if(sessionStorage.getItem('Token')){
     this.service.getProfile().subscribe((res:any)=>{
       this.user = res['user']
       if(this.user.type == "FARMER"){
         this.route.navigate(['DashBoard'])
       }
       else if(this.user.type == "WAREHOUSER"){
         this.route.navigate(['DashBoard'])
       }
       else if(this.user.type == "ADMIN"){
         this.route.navigate(['DashBoard'])
       }
       else{
         false
       }
     })
   }
   else{
     console.log("No token")
   }

   
  }

  //product form tab index
  tabChange(tabIndex: number) {
    this.activatedTabIndex = tabIndex;
  }

  // detailedtabs tab index
  tabChange2(tabIndex: number) {
    this.activatedTabIndex2 = tabIndex;
  }

  // for roasted section
  toggleDivOff() {
    this.isShowDiv = false;
  }

  toggleDivOn() {
    this.isShowDiv = true;
  }

  // for green tab section
  toggleDivOff2() {
    this.isShowDiv2 = false;
  }

  toggleDivOn2() {
    this.isShowDiv2 = true;
  }

  // increment button for roasted section
  increment(){
    this.num++;
  }
    
  //decrements item for roasted section
  decrement(){
    if(this.num-1 < 1){
      this.num = 1;
    }
    else{
      this.num -= 1;
    }
  }

  // increment button for green section
  increment2(){
    this.num2++;
    }
    
  //decrements item for green section
  decrement2(){
    if(this.num2-1 < 1){
      this.num2 = 1;
    }
    else{
      this.num2 -= 1;
    }
  }

}
