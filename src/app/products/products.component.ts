import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from 'src/app/login/login.component';
import { AuthenticationService } from 'src/app/AuthService/authentication.service'; 
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';
import { environment } from 'src/environments/environment.development';
import { CartService } from '../Service/Cart/cart.service';
import { ProductsService } from '../ProductsService/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  p:number = 1;
  itemsPerPage:number = 10;
  num: number = 1;
  num2: number = 1;
  totalProduct:any;
  products:any;
  cloudinaryUrl = environment.CLOUDINARY_URL


  myScriptElement: HTMLScriptElement;
  constructor(private dialog: MatDialog,private service:AuthenticationService,private route:Router, private cartService : CartService,private product:ProductsService){
     this.myScriptElement = document.createElement("script");
     this.myScriptElement.src = "../../assets/js/main.js";
     document.body.appendChild(this.myScriptElement);
  }
  isShowDiv = false;
  isShowDiv2 = false;

  // product form tabs
  tabs: string [] = ['Roasted', 'Green'];
  activatedTabIndex: number = 0;

  user:any | null = null;
  isLoggedIn:any
  ratings : number[] = [];
  total:any

  generalRating(){}

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

   this.product.getProcessedProducts().subscribe((res:any)=>{
    this.products = res
    this.products.forEach((product:any) => {
      product.rating.forEach((ratingItem: any) => {
        this.ratings.push(ratingItem.rating)
      });
    });
    const sum = this.ratings.reduce((acc, item) => acc + item, 0);
    this.total = Math.floor(sum / this.ratings.length);
   })

 
  }
  tabChange(tabIndex: number) {
    this.activatedTabIndex = tabIndex;
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
    this.num += 1;
    console.log(this.num);
    }
    
  //decrements item for roasted section
  decrement(){
    if(this.num-1 < 1){
      this.num = 1;
      console.log('item_1->' + this.num)
    }
    else{
      this.num -= 1;
      console.log('item_2->' + this.num);
    }
  }

  // increment button for green section
  increment2(){
    this.num2 += 1;
    console.log(this.num2);
    }
    
  //decrements item for green section
  decrement2(){
    if(this.num2-1 < 1){
      this.num2 = 1;
      console.log('item_1->' + this.num2)
    }
    else{
      this.num2 -= 1;
      console.log('item_2->' + this.num2);
    }
  }
}

