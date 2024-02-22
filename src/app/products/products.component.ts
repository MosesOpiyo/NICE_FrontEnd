import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from 'src/app/login/login.component';
import { AuthenticationService } from 'src/app/AuthService/authentication.service'; 
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';
import { environment } from 'src/environments/environment.development';
import { ProductStoreService } from '../Store/Products/product-store.service';
import { AddtocartComponent } from '../addtocart/addtocart.component';
import { CartService } from '../Service/Cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  selectedOption: FormGroup;
  p:number = 1;
  itemsPerPage:number = 10;
  num: number = 1;
  num2: number = 1;
  totalProduct:any;
  flavourOptions: any[] = []
  originOptions: any[] = []
  products:any;
  isShowDiv = false;
  isShowDiv2 = false;
  dataFromChild: string;
  cloudinaryUrl = environment.CLOUDINARY_URL;


  myScriptElement: HTMLScriptElement;
  constructor(private dialog: MatDialog,private service:AuthenticationService,private product:ProductStoreService,private route:Router,private cart:CartService,private snackbar:MatSnackBar){
     this.myScriptElement = document.createElement("script");
     this.myScriptElement.src = "../../assets/js/main.js";
     document.body.appendChild(this.myScriptElement);
  }
  
  // paginator
  onPageChange(page: number) {
    this.p = page;
    window.scrollTo(0, 0);
  }
  getFlavourOptions(){
    if(!this.flavourOptions.includes('All')){
      this.flavourOptions.push('All')
    }
    this.products.forEach((product:any) => {
      if(!this.flavourOptions.includes(product.product.cup_notes)){
        this.flavourOptions.push(product.product.cup_notes)
      }
    });
  }

  getOriginrOptions(){
    if(!this.originOptions.includes('All')){
      this.originOptions.push('All')
    }
    this.products.forEach((product:any) => {
      if(!this.originOptions.includes(product.product.origin)){
        this.originOptions.push(product.product.origin)
      }
    });
  }
  
  handleDataFromChild(data: string) {
    this.filteredProducts = this.products.filter(item => {
      return item.product.name.indexOf(data.toUpperCase()) > -1
    })
  }
  optionsFlavorFilter(option:string){
    if(option == 'All'){
      this.filteredProducts = null
    }else{
      if(this.filteredProducts == null){
        this.filteredProducts = this.products.filter(item => {
          return item.product.cup_notes.indexOf(option) > -1
        })
      }
      else{
        this.filteredProducts = this.filteredProducts.filter(item => {
          return item.product.cup_notes.indexOf(option) > -1
        })
        if(this.filteredProducts.length == 0){
          this.filteredProducts = this.products.filter(item => {
            return item.product.cup_notes.indexOf(option) > -1
          })
        }
      }
    }
    
  }
  optionsOriginFilter(option:string){
    if(option == 'All'){
      this.filteredProducts = null
    }else{
      if(this.filteredProducts == null){
        this.filteredProducts = this.products.filter(item => {
          return item.product.origin.indexOf(option) > -1
        })
      }else{
        this.filteredProducts = this.filteredProducts.filter(item => {
          return item.product.origin.indexOf(option) > -1
        })
        if(this.filteredProducts.length == 0){
          this.filteredProducts = this.products.filter(item => {
            return item.product.origin.indexOf(option) > -1
          })
        }
      }
    }
  }
  
  //Variety sidenav
  isShowVariety = true;
   toggleVarietyOn() {
    this.isShowVariety = !this.isShowVariety;
   }

  //Farms sidenav
  isShowFarms = false;
  toggleFarmsOn() {
   this.isShowFarms = !this.isShowFarms;
  }

  //Price sidenav
  isShowPrice = false;
  togglePriceOn() {
   this.isShowPrice = !this.isShowPrice;
  }


  // modal
  isModalOpen = false;
  toggleModal(): void {
    this.isModalOpen = !this.isModalOpen;
    this.num = 1;
    this.num2 = 1;
  }

  //roasted
  check(value: any) {
    this.num = value.target.value;
  }

  //green
  check2(value: any) {
    this.num = value.target.value;
  }

  // product form tabs
  tabs: string [] = ['Roasted', 'Green'];
  activatedTabIndex: number = 0;
  isLoggedIn:any
  ratings : number[] = [];
  total:any
  filteredProducts:any

  navigateToChild(item:any) {
    let data = item 
    this.route.navigate([`/shop/${item.product.name}/${item.id}`]);
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

 showSignUpDialog(){
   const dialogRef = this.dialog.open(SignUpComponent,{
     width: '25pc'
   }); 
 }
 

 addToWishList(id:any,item:any){
  this.cart.addToWishlist(id).subscribe((res:any) => {
    this.snackbar.open(`${item.product.name} has been added to your wishlist.`, 'Close', {
      duration: 3000,
      panelClass: ['green-snackbar'],
      horizontalPosition: 'center',
    });
  })
 }

 showAddtocartDialog(enterAnimationDuration: string, exitAnimationDuration: string,item:any,name:any){
  const dialogRef = this.dialog.open(AddtocartComponent,{
    data: {
      item:item.id,
      name:item.product.name
    },
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

 averageRating(item:any){
  const list :number[] = []
  item.rating.forEach((ratingItem:any) => {
    list.push(ratingItem.rating)
  });
  const sum = list.reduce((acc, item) => acc + item, 0);
  const total = Math.floor(sum / list.length);
  return total
 }

 filterData(enteredData){
  this.filteredProducts = this.products.filter(item => {
    return item.username.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
  })
}

 ngOnInit(): void {
   this.product.data$.subscribe((res:any)=>{
    if(res == ""){
      this.product.productData()
      this.product.data$.subscribe((res:any)=>{
      })
    }
    else{
      this.products = res
    }
    this.getFlavourOptions()
    this.getOriginrOptions()
    this.products.forEach((product:any) => {
      product.rating.forEach((ratingItem: any) => {
        this.ratings.push(ratingItem.rating)
      });
    });
    const sum = this.ratings.reduce((acc, item) => acc + item, 0);
    this.total = Math.floor(sum / this.ratings.length);
   })
   this.dataFromChild = ''
   this.handleDataFromChild(this.dataFromChild)
 
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

