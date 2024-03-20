import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../AuthService/authentication.service';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { User } from '../Classes/AuthClass/user';
import { CartService } from '../Service/Cart/cart.service';
import { FarmerSignUpComponent } from '../sign-up/farmer-sign-up/farmer-sign-up.component';
import { AuthenticationStoreService } from '../AuthServiceStore/authentication-store.service';
import { CartStoreService } from '../Store/Cart/cart-store.service';
import { ExhibitorsponsorComponent } from '../informationPages/exhibitorsponsor/exhibitorsponsor.component';
import { TripdialogueComponent } from '../informationPages/tripdialogue/tripdialogue.component';
import { StoriesStoreService } from '../dash-board/Stores/Stories/stories-store.service';
import { ProductStoreService } from '../Store/Products/product-store.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  myScriptElement: HTMLScriptElement;
   constructor(private authStore:AuthenticationStoreService,private dialog: MatDialog,private cart:CartService,private cartStore:CartStoreService,private productStore:ProductStoreService,private service:AuthenticationService,private route:Router,private stories:StoriesStoreService){
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

   user:User
   isLoggedIn:any
   userCart:any

  showLoginDialog(){
    const dialogRef = this.dialog.open(LoginComponent,{
      width: '25pc',
      maxWidth: '90vw',
      autoFocus: false,
      maxHeight: '90vh',
      data: {
        isBuyer: true
      }
    });
  }

  showFarmerSignUpDialog(){
    const dialogRef = this.dialog.open(FarmerSignUpComponent,{
      width: '25pc',
      maxWidth: '90vw',
      autoFocus: false,
      maxHeight: '100vh'
    }); 
  }

  logout(){
    this.service.logout()
    this.ngOnInit()
  }

  showSignUpDialog(){
    const dialogRef = this.dialog.open(SignUpComponent,{
      width: '25pc',
      maxWidth: '90vw',
      autoFocus: false,
      maxHeight: '100vh'
    }); 
  }

  showRegisterDialog() {
    let dialogRef = this.dialog.open(ExhibitorsponsorComponent,{
      width: '25pc',
      maxWidth: '90vw',
      autoFocus: false,
      maxHeight: '100vh',
    })
  }

  showTripRegisterDialog() {
    let dialogRef = this.dialog.open(TripdialogueComponent,{
      width: '25pc',
      maxWidth: '90vw',
      autoFocus: false,
      maxHeight: '100vh',
    })
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('Token')){
        this.productStore.productData()
        this.cartStore.data$.subscribe((data:any) =>{
          this.userCart = data['products']?.length
          console.log(this.userCart)
        })
        this.authStore.data$.subscribe((data:any)=>{
          this.user = data['user']
          if(this.user?.type == "FARMER"){
            this.route.navigate(['dash-board'])
            this.stories.storeStoriesData()
          }
          else if(this.user?.type == "ORIGINWAREHOUSER"){
            this.route.navigate(['dash-board'])
          }
          else if(this.user?.type == "WAREHOUSER"){
            this.route.navigate(['dash-board'])
          }
          else if(this.user?.type == "ADMIN"){
            this.route.navigate(['dash-board'])
          }
          else{
            false
          }
        })
    }
    else{
      console.log("No token")
      this.cartStore.data$.subscribe((data:any) =>{
        this.userCart = data['products']?.length
        console.log(this.userCart)
      })
    }
   }

}
