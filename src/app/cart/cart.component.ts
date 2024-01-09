import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from 'src/app/login/login.component';
import { AuthenticationService } from 'src/app/AuthService/authentication.service'; 
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';
import { environment } from 'src/environments/environment.development';
import { CartService } from '../Service/Cart/cart.service';
import { CartStoreService } from '../Store/Cart/cart-store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  public product : any =  [];
  public grandTotal !: number;



  myScriptElement: HTMLScriptElement;
  constructor(private cart:CartStoreService, private dialog: MatDialog,private service:AuthenticationService,private route:Router, private cartService : CartService,private cartStore:CartStoreService){
     this.myScriptElement = document.createElement("script");
     this.myScriptElement.src = "../../assets/js/main.js";
     document.body.appendChild(this.myScriptElement);
  }

  cloudinaryUrl = environment.CLOUDINARY_URL
  user:any | null = null;
  displayedColumns: string[] = ['image','name','quantity','price','delete'];
  userCart:any | null = null;
  isLoggedIn:any
  quantity = 0
  total = 0

  add(){
    this.quantity++
  }
  subtract(){
    if(this.quantity > 0  ){
      this.quantity--
    }
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
    list.push(item.price)
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

 ngOnInit(): void {
  this.cart.data$.subscribe((data:any) =>{
    console.log(data)
    this.userCart = data['products']
  })
 }

}
