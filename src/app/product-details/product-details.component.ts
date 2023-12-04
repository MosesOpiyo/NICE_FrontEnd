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
import { CartStoreService } from '../Store/Cart/cart-store.service';


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
  constructor(private snackBar:MatSnackBar,private dialog: MatDialog,private service:AuthenticationService,private route:Router,private idRouter:ActivatedRoute,private product:ProductsService,private cart:CartService,private cartStore:CartStoreService){
     this.myScriptElement = document.createElement("script");
     this.myScriptElement.src = "./assets/js/main.js";
     document.body.appendChild(this.myScriptElement);
  }

  user:any | null = null;
  isLoggedIn:any
  id:any
  item:any
  userCart:any
  ratings : number[] = [];
  total:any
  cloudinaryUrl = environment.CLOUDINARY_URL
  quantityPrice:any = ""
  quantity:any = ""
  grind:any = ""
  price:any = ""
  roast_type:any = ""
  code:any = 0

  cartItem(id:any){
    const parts = this.quantityPrice.split('-');
    this.quantity = parseInt(parts[0],10)
    this.price = parseFloat(parts[1])
    let form = new FormData();
    form.append('quantity',this.quantity),
    form.append('grind',this.grind),
    form.append('price',this.price),
    form.append('roast_type',this.roast_type),
    form.append('code',this.item.code)
    console.log(form)
    this.cart.addToCart(id,form)
    this.cart.getCart().subscribe((res:any) => {
      this.cartStore.updateData(res)
    })
  }

  cartItem2(id:any){
    this.quantity = 100
    this.grind = 'None'
    this.roast_type = 'None'
    this.price = 100
    let form = new FormData();
    form.append('quantity',this.quantity),
    form.append('grind',this.grind),
    form.append('price',this.price),
    form.append('roast_type',this.roast_type),
    this.cart.addToCart(id,form)
    this.ngOnInit()
  }

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

 ngOnInit(): void {
  this.id = this.idRouter.snapshot.paramMap.get('id');
  this.product.getProcessedProduct(this.id).subscribe((res:any)=>{
  this.item = res
  this.item.rating.forEach((ratingItem:any) => {
  this.ratings.push(ratingItem.rating)
    });
  })
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
