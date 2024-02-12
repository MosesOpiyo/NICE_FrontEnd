import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog'
import { AuthenticationService } from 'src/app/AuthService/authentication.service'; 
import { ProductsService } from '../ProductsService/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '../Service/Cart/cart.service';
import { CartStoreService } from '../Store/Cart/cart-store.service';
import { ProductStoreService } from '../Store/Products/product-store.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  number_value:any = 1;
  number_value2:number = 1;
  isShowDiv: boolean  = false;
  isShowDiv2: boolean  = false;
  session:any
  weight:any = ""
  quantityPrice:any = ""
  quantity:any = ""
  grind:any = ""
  price:any = ""
  subscription:boolean = false
  roast_type:any = ""

  // for roasted
  checkStatus1(event:any){
    // Check if radio button is checked
    if(event.target.checked == true){
      this.isShowDiv = false
      this.subscription = false
      console.log(this.subscription)
    }
    else {
      this.isShowDiv = true
      this.subscription = true
      console.log(this.subscription)
    }
  }

  checkStatus2(event:any){
    // Check if radio button is checked
    if(event.target.checked == true){
      this.isShowDiv = true
      this.subscription = true
      console.log(this.subscription)
    }
    else {
      this.isShowDiv = false
      this.subscription = false
      console.log(this.subscription)
    }
  }

  // for green
  checkStatus3(event:any){
    // Check if radio button is checked
    if(event.target.checked == true){
      this.isShowDiv2 = false
    }
    else {
      this.isShowDiv2 = true
    }
  }

  checkStatus4(event:any){
    // Check if radio button is checked
    if(event.target.checked == true){
      this.isShowDiv2 = true
    }
    else {
      this.isShowDiv2 = false
    }
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private snackBar:MatSnackBar,private dialog: MatDialog,private service:AuthenticationService,private route:Router,private idRouter:ActivatedRoute,private product:ProductsService,private store:ProductStoreService,private cart:CartService,private cartStore:CartStoreService){}

  ngOnInit(): void {
  }

  cartItem(){
    const session = localStorage.getItem("session")
    const parts = this.quantityPrice.split('|');
    this.quantity = parseInt(this.number_value)
    this.price = parseFloat(parts[0])
    this.weight = parseInt(parts[1])
    console.log(`Price: ${this.price}, weight: ${this.weight}`)
    let form = new FormData();
    form.append('weight',this.weight),
    form.append('quantity',this.quantity),
    form.append('grind',this.grind),
    form.append('price',this.price),
    form.append('roast_type',this.roast_type),
    form.append('subscription',String(this.subscription))
    form.append('code',this.data.item.code)
    this.cart.addToCart(this.data.item,session,form).subscribe((res:any) => {
      this.cartStore.updateCart(session)
      this.snackBar.open(`${this.data.name} has been added to your cart.`, 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
      this.dialog.closeAll()
      this.cartStore.updateCart(this.session)

    })
  }

   // addtocart dialog tabs
   tabs: string [] = ['Roasted', 'Green'];
   activatedTabIndex: number = 0;

   // addtocart dialog tab index
   tabChange(tabIndex: number) {
    this.activatedTabIndex = tabIndex;
    this.isShowDiv = false;
    this.isShowDiv2 = false;
    this.quantityPrice = "";
    this.grind = "";
    this.roast_type = "";
    this.number_value = 1;
    this.number_value2 = 1;
  }

  // increment button for roasted section
  increment(){
    this.number_value++;
    }
    
  //decrements item for roasted section
  decrement(){
    if(this.number_value-1 < 1){
      this.number_value = 1;
    }
    else{
      this.number_value -= 1;
    }
  }

  // increment button for green section
  increment2(){
    this.number_value2++;
    }
    
  //decrements item for green section
  decrement2(){
    if(this.number_value2-1 < 1){
      this.number_value2 = 1;
    }
    else{
      this.number_value2 -= 1;
    }
  }

  //roasted
  check(value: any) {
    this.number_value = value.target.value;
  }

  //green
  check2(value: any) {
    this.number_value2 = value.target.value;
  }

}
