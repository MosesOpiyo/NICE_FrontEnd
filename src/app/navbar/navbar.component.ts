import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../AuthService/authentication.service';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AuthService } from '../Auth/auth.service';
import { CartService } from '../Service/Cart/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  myScriptElement: HTMLScriptElement;
   constructor(private dialog: MatDialog,private cart:CartService,private service:AuthenticationService,private route:Router){
      this.myScriptElement = document.createElement("script");
      this.myScriptElement.src = "./assets/js/main.js";
      document.body.appendChild(this.myScriptElement);
   }

   isMenuOpen = false;
   toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
   }

   isShowDiv = false;
   toggleDivOn() {
    this.isShowDiv = !this.isShowDiv;
   }

   isShowDiv2 = false;
   toggleDivOn2() {
    this.isShowDiv2 = !this.isShowDiv2;
   }

   isShowDiv3 = false;
   toggleDivOn3() {
    this.isShowDiv3 = !this.isShowDiv3;
   }

   user:any | null = null;
   isLoggedIn:any
   userCart:any

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
      this.cart.getCart().subscribe((res:any)=>{
        this.userCart = res['products'].length
      })
      this.service.getProfile().subscribe((res:any)=>{
        this.user = res['user']
        if(this.user.type == "FARMER"){
          this.route.navigate(['dash-board'])
        }
        else if(this.user.type == "WAREHOUSER"){
          this.route.navigate(['dash-board'])
        }
        else if(this.user.type == "ADMIN"){
          this.route.navigate(['dash-board'])
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

}
