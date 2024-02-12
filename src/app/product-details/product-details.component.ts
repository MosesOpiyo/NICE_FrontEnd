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
import { ProductStoreService } from '../Store/Products/product-store.service';
import { TimelinecontentComponent } from '../timelinecontent/timelinecontent.component';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  isLoggedIn:any
  id:any
  item:any
  userCart:any
  ratings : number[] = [];
  total:any
  cloudinaryUrl = environment.CLOUDINARY_URL
  quantityPrice:any = ""
  quantity:any = ""
  weight:any = ""
  grind:any = ""
  price:any = ""
  roast_type:any = ""
  subscription:boolean = false
  code:any = 0
  num: any = 1;
  num2: number = 1;
  isShowDiv: boolean  = false;
  isShowDiv2: boolean  = false;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  private snackBarDuration: number = 2000;
  size: any;

  myScriptElement: HTMLScriptElement;
  constructor(private snackBar:MatSnackBar,private dialog: MatDialog,private service:AuthenticationService,private route:Router,private idRouter:ActivatedRoute,private product:ProductsService,private store:ProductStoreService,private cart:CartService,private cartStore:CartStoreService){
     this.myScriptElement = document.createElement("script");
     this.myScriptElement.src = "./assets/js/main.js";
     document.body.appendChild(this.myScriptElement);
  }

  timeline = [
    {
      id: 1,
      imgSource: '../../assets/img/farm/farm1.jpg',
      comment: 'flowering'
    },
    {
      id: 2,
      imgSource: '../../assets/img/farm/farm2.jpg',
      comment: 'maturing'
    },
    {
      id: 3,
      imgSource: '../../assets/img/farm/farm3.jpg',
      comment: 'harvesting'
    },
    {
      id: 4,
      imgSource: '../../assets/img/farm/farm4.jpg',
      comment: 'processing'
    },
    {
      id: 5,
      imgSource: '../../assets/img/farm/farm5.jpg',
      comment: 'sale'
    },
    {
      id: 6,
      imgSource: '../../assets/img/farm/farm6.jpg',
      comment: 'flowering'
    },
    {
      id: 7,
      imgSource: '../../assets/img/farm/farm7.jpg',
      comment: 'flowering'
    },
  ]
  
  //product form tab index
 tabChange(tabIndex: number) {
  this.activatedTabIndex = tabIndex;
  // console.log(this.isShowDiv);
  // console.log(this.isShowDiv2);
  this.isShowDiv = false;
  this.isShowDiv2 = false;
  this.quantityPrice = "";
  this.grind = "";
  this.roast_type = "";
  this.num = 1;
  this.num2 = 1;
}

// detailedtabs tab index
tabChange2(tabIndex: number) {
  this.activatedTabIndex2 = tabIndex;
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

openFarmDetails() {
  let dialogRef = this.dialog.open(TimelinecontentComponent,{
    width: '30pc',
    maxWidth: '90vw',
    autoFocus: false,
    maxHeight: '100vh'
  })
}

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
    }
  }

  checkStatus2(event:any){
    // Check if radio button is checked
    if(event.target.checked == true){
      this.isShowDiv = true
      this.subscription = false
      console.log(this.subscription)
    }
    else {
      this.isShowDiv = false
      this.subscription = false
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

  // user rating
  countStar(star: any) {
    this.selectedValue = star;
    this.snackBar.open('You have rated the product as a ' + star + ' star ', '', {
      duration: this.snackBarDuration,
      panelClass: ['green-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  
  }

  clearStars() {
    this.selectedValue = 0;
  }
  list:any
  session:any
  addClass(star: any) {
    let ab = "";
    for (let i = 0; i < star; i++) {
      ab = "starId" + i;
      document.getElementById(ab).classList.add("selected");
    }
 }

 removeClass(star: any) {
    let ab = "";
   for (let i = star-1; i >= this.selectedValue; i--) {
      ab = "starId" + i;
      document.getElementById(ab).classList.remove("selected");
    }
 }

  cartItem(id:any){
    const session = localStorage.getItem("session")
    const parts = this.quantityPrice.split('|');
    this.quantity = parseInt(this.num)
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
    form.append('code',this.code)
    this.cart.addToCart(this.item.id,session,form).subscribe((res:any) => {
      this.snackBar.open(`${this.item.product.name} has been added to your cart.`, 'Close', {
        duration: 3000,
        panelClass: ['green-snackbar']
      });
      this.dialog.closeAll()
      this.cartStore.updateCart(this.session)

    })
  }

  cartItem2(id:any){
    console.log(this.item)
    this.quantity = 100
    this.grind = 'None'
    this.roast_type = 'None'
    this.price = 100
    const session = this.getSession()
    let form = new FormData();
    form.append('quantity',this.quantity),
    form.append('grind',this.grind),
    form.append('price',this.price),
    form.append('roast_type',this.roast_type),
    this.cart.addToCart(id,this.session,form).subscribe((res:any) => {
      this.cartStore.updateCart(this.session)
    })
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
 
 getProduct(id:any){
  this.store.data$.subscribe((res:any)=>{
    if(res == ""){
      this.store.productData()
      this.store.data$.subscribe((res:any)=>{
      })
    }
    else{
      this.list = res
    }
    this.list.forEach((product:any) => {
      if(product.id == id){
        this.item = product
      }
    });
 })}

 getSession(){
  this.cartStore.data$.subscribe((res:any) =>{
     this.session = res['session_id']
   })
   
 }
 ngOnInit(): void {
  
  this.idRouter.params.subscribe(params => {
   this.getProduct(params['id'])
   this.getSession()
  });
  }

  
}
