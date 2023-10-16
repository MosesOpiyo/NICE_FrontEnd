import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from 'src/app/login/login.component';
import { AuthenticationService } from 'src/app/AuthService/authentication.service'; 
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';
import { environment } from 'src/environments/environment.development';
import { ProductsService } from '../ProductsService/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  // product form tabs
  tabs: string [] = ['Roasted', 'Green'];
  activatedTabIndex: number = 0;

  // tabbed-info tabs
  tabs2: string [] = ['Seller Info', 'Reviews'];
  activatedTabIndex2: number = 0;

  myScriptElement: HTMLScriptElement;
  constructor(private snackBar:MatSnackBar,private dialog: MatDialog,private service:AuthenticationService,private route:Router,private idRouter:ActivatedRoute,private product:ProductsService,private cart:CartService){
     this.myScriptElement = document.createElement("script");
     this.myScriptElement.src = "./assets/js/main.js";
     document.body.appendChild(this.myScriptElement);
  }

  user:any | null = null;
  isLoggedIn:any
  id:any
  item:any
  ratings : number[] = [];
  total:any
  cloudinaryUrl = environment.CLOUDINARY_URL
  quantity = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

  showLoginDialog(){
   const dialogRef = this.dialog.open(LoginComponent,{
     width: '25pc'
   });
 }

 logout(){
   this.service.logout()
   this.ngOnInit()
 }

 averageRating(item:any){
  const list :number[] = []
  item.rating.forEach((ratingItem:any) => {
    list.push(ratingItem.rating)
  });
  const sum = list.reduce((acc, item) => acc + item, 0);
  const total = Math.floor(sum /list.length);
  return total
 }

 showSignUpDialog(){
   const dialogRef = this.dialog.open(SignUpComponent,{
     width: '25pc'
   }); 
 }
 addToCart(id:number){
   this.cart.addToCart(id).subscribe((res:any)=>{
    this.snackBar.open(res, 'Close', {
      duration: 3000,
      panelClass: ['blue-snackbar']
    });
   })
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
     this.id = this.idRouter.snapshot.paramMap.get('id');
     this.product.getProcessedProduct(this.id).subscribe((res:any)=>{
     this.item = res
     console.log(this.item)
     this.item.rating.forEach((ratingItem:any) => {
      this.ratings.push(ratingItem.rating)
    });
    

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
