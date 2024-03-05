import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from 'src/app/login/login.component';
import { AuthenticationService } from 'src/app/AuthService/authentication.service'; 
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';
import { environment } from 'src/environments/environment.development';
import { CartService } from '../Service/Cart/cart.service';
import { CartStoreService } from '../Store/Cart/cart-store.service';
import { AddtocartComponent } from '../addtocart/addtocart.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  public product : any =  [];
  public grandTotal !: number;
  cloudinaryUrl = environment.CLOUDINARY_URL
  user:any | null = null;
  displayedColumns: string[] = ['image','weight','quantity','totalPrice','delete'];
  userCart:any | null = null;
  isLoggedIn:any
  itemQuantity:number = 1
  quantity = 0
  total = 0

  tabsArray: string[] = ['Your cart', 'Your wishlist'];
  activatedTabIndex: number = 0;

  setTab(index:number) {
    this.activatedTabIndex = index;
  }

  
  myScriptElement: HTMLScriptElement;
  constructor(private cart:CartStoreService, private dialog: MatDialog,private service:AuthenticationService,private route:Router, private cartService : CartService,private cartStore:CartStoreService){
     this.myScriptElement = document.createElement("script");
     this.myScriptElement.src = "../../assets/js/main.js";
     document.body.appendChild(this.myScriptElement);
  }

  add(){
    this.quantity++
  }
  subtract(){
    if(this.quantity > 0  ){
      this.quantity--
    }
  }
  
  itemQuantityTotal(price,quantity){
    var total_price = quantity * price
    return total_price.toFixed(2)
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

 subTotal(items:any){
  const list :number[] = []
   items.forEach((item:any)=>{
    var total = item.price * item.quantity
    list.push(total)
   });
   const sum = list.reduce((acc, item) => acc + item, 0);
   return sum
 }
 Pay(amount:any){
  if(sessionStorage.getItem("Token")){
    this.cartService.makePayment(amount).subscribe((res:any)=>{
      window.open(res)
    })
  }else{
    this.showLoginDialog()
  }
 }
 removeItem(id:number){
  this.cartService.removeFromCart(id).subscribe((res:any) => {
    this.cartService.getCart().subscribe((res:any) => {
      this.cartStore.updateData(res)
    })
  })
 }

//quantity
value(value: any, id: number, quantity: number) {
  for (let i=0; i < this.userCart.length; i++){
    if (this.userCart[i].id === id) {
      this.userCart[i].quantity = value.target.value;
      quantity = value.target.value
    }
  }
}


//decrements item for quantity section
decrement(element: any, id: number, quantity: number){
  if (quantity-1 < 1) {
    quantity = 1;
    element.quantity = quantity
  }
  else {
    for (let i=0; i < this.userCart.length; i++){
      if (this.userCart[i].id === id) {
        quantity -= 1
        element.quantity = quantity
      }
    }
  }
}

// increment button for quantity section
increment(element: any, id: number, quantity: number){
  for (let i=0; i < this.userCart.length; i++){
    if (this.userCart[i].id === id) {
      quantity++
      element.quantity = quantity
    }
  }
}

showAddtocartDialog(enterAnimationDuration: string, exitAnimationDuration: string){
  const dialogRef = this.dialog.open(AddtocartComponent,{
    width: '30pc',
    maxWidth: '90vw',
    autoFocus: false,
    maxHeight: '100vh',

    // minWidth: '250px',
    // maxHeight: '100vh',
    enterAnimationDuration,
    exitAnimationDuration
  });
}

 ngOnInit(): void {
  this.cart.data$.subscribe((data:any) =>{
    if(data == ""){
      const session = localStorage.getItem("session")
      this.cart.updateCart(session)
      this.cart.data$.subscribe((data:any) =>{
        this.userCart = data['products']
      })
    }else{
      this.userCart = data['products']
    }
    
    
  })
 }

}
