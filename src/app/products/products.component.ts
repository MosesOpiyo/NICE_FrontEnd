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
  totalProduct:any;
  products:any;
  cloudinaryUrl = environment.CLOUDINARY_URL


  myScriptElement: HTMLScriptElement;
  constructor(private dialog: MatDialog,private service:AuthenticationService,private route:Router, private cartService : CartService,private product:ProductsService){
     this.myScriptElement = document.createElement("script");
     this.myScriptElement.src = "../../assets/js/main.js";
     document.body.appendChild(this.myScriptElement);
  }

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
    console.log(this.ratings)
   })

 
  }
}
