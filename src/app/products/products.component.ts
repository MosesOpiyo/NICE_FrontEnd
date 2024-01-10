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
  products:any;
  cloudinaryUrl = environment.CLOUDINARY_URL


  myScriptElement: HTMLScriptElement;
  constructor(private dialog: MatDialog,private service:AuthenticationService,private product:ProductStoreService,private route:Router){
     this.myScriptElement = document.createElement("script");
     this.myScriptElement.src = "../../assets/js/main.js";
     document.body.appendChild(this.myScriptElement);
  }
  isShowDiv = false;
  isShowDiv2 = false;
  dataFromChild: string;
  
  handleDataFromChild(data: string) {
      this.filteredProducts = this.products.filter(item => {
        return item.product.name.indexOf(data.toUpperCase()) > -1
      })
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
    this.route.navigate([`/Products/${item.id}`]);
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

