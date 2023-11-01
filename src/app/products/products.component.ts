import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from 'src/app/login/login.component';
import { AuthenticationService } from 'src/app/AuthService/authentication.service'; 
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';
import { AuthService } from 'src/app/Auth/auth.service';
import { CartService } from '../Service/Cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  p:number = 1;
  itemsPerPage:number = 10;
  totalProduct:any;
  num: number = 1;
  num2: number = 1;
  isShowDiv = false;
  isShowDiv2 = false;

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


  productData = [ 
    {
      id: 1,
      imageUrl: '../../assets/img/packaging/pkg7.png',
      sticker: true,
      farmer: 'Riakiania Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star',
      ],
      productName: 'AA Coffee',
      newPrice: 78,
      oldPrice: 90,
      discountPercentage: '7'
    },

    {
      id: 2,
      imageUrl: '../../assets/img/packaging/pkg1.png',
      sticker: true,
      farmer: 'Kiaragana Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star',
        'bi bi-star',
      ],
      productName: 'AB Coffee',
      newPrice: 80,
      oldPrice: 90,
      discountPercentage: '5'
    },

    {
      id: 3,
      imageUrl: '../../assets/img/packaging/coffee-bag-04.png',
      sticker: true,
      farmer: 'Kaga Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
      ],
      productName: 'PB Coffee',
      newPrice: 70,
      oldPrice: 100,
      discountPercentage: '10'
    },

    {
      id: 4,
      imageUrl: '../../assets/img/packaging/pkg1.png',
      sticker: true,
      farmer: 'Kiambwe Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star',
        'bi bi-star',
      ],
      productName: 'TT Coffee',
      newPrice: 50,
      oldPrice: 80,
      discountPercentage: '10'
    },

    {
      id: 5,
      imageUrl: '../../assets/img/packaging/coffee-bag-02.png',
      sticker: true,
      farmer: 'Mitondo Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
      ],
      productName: 'AA Coffee',
      newPrice: 70,
      oldPrice: 100,
      discountPercentage: '15'
    },

    {
      id: 6,
      imageUrl: '../../assets/img/packaging/coffee-bag-01.png',
      sticker: true,
      farmer: 'Gathambi Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star',
      ],
      productName: 'T Coffee',
      newPrice: 80,
      oldPrice: 90,
      discountPercentage: '7'
    },

    {
      id: 7,
      imageUrl: '../../assets/img/packaging/coffee-bag-03.png',
      sticker: true,
      farmer: 'Ihara Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star',
        'bi bi-star',
      ],
      productName: 'AA Coffee',
      newPrice: 70,
      oldPrice: 90,
      discountPercentage: '10'
    },

    {
      id: 8,
      imageUrl: '../../assets/img/packaging/pkg7.png',      
      sticker: true,
      farmer: 'Getuya Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star',
      ],
      productName: 'PB Coffee',
      newPrice: 78,
      oldPrice: 90,
      discountPercentage: '7'
    },

    {
      id: 9,
      imageUrl: '../../assets/img/packaging/coffee-bag-01.png',
      sticker: true,
      farmer: 'Ikuni Coffee Factory',
      rating:  [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
      ],
      productName: 'AB Coffee',
      newPrice: 80,
      oldPrice: 90,
      discountPercentage: '10'
    },

    {
      id: 10,
      imageUrl: '../../assets/img/packaging/coffee-bag-03.png',
      sticker: true,
      farmer: 'Zambezi Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
      ],
      productName: 'TT Coffee',
      newPrice: 78,
      oldPrice: 90,
      discountPercentage: '7'
    },

    {
      id: 11,
      imageUrl: '../../assets/img/coffee-bag-03.jpg',
      sticker: true,
      farmer: 'Zambezi Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
      ],
      productName: 'TT Coffee',
      newPrice: 78,
      oldPrice: 90,
      discountPercentage: '7'
    },

    {
      id: 12,
      imageUrl: '../../assets/img/coffee-bag-03.jpg',
      sticker: true,
      farmer: 'Zambezi Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
      ],
      productName: 'TT Coffee',
      newPrice: 78,
      oldPrice: 90,
      discountPercentage: '7'
    },

    {
      id: 13,
      imageUrl: '../../assets/img/coffee-bag-03.jpg',
      sticker: true,
      farmer: 'Zambezi Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
      ],
      productName: 'TT Coffee',
      newPrice: 78,
      oldPrice: 90,
      discountPercentage: '7'
    },

    {
      id: 14,
      imageUrl: '../../assets/img/coffee-bag-03.jpg',
      sticker: true,
      farmer: 'Zambezi Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
      ],
      productName: 'TT Coffee',
      newPrice: 78,
      oldPrice: 90,
      discountPercentage: '7'
    },

    {
      id: 15,
      imageUrl: '../../assets/img/coffee-bag-03.jpg',
      sticker: true,
      farmer: 'Zambezi Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
      ],
      productName: 'TT Coffee',
      newPrice: 78,
      oldPrice: 90,
      discountPercentage: '7'
    },

    {
      id: 16,
      imageUrl: '../../assets/img/coffee-bag-03.jpg',
      sticker: true,
      farmer: 'Zambezi Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
      ],
      productName: 'TT Coffee',
      newPrice: 78,
      oldPrice: 90,
      discountPercentage: '7'
    },

    {
      id: 17,
      imageUrl: '../../assets/img/coffee-bag-03.jpg',
      sticker: true,
      farmer: 'Zambezi Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
      ],
      productName: 'TT Coffee',
      newPrice: 78,
      oldPrice: 90,
      discountPercentage: '7'
    },

    {
      id: 18,
      imageUrl: '../../assets/img/coffee-bag-03.jpg',
      sticker: true,
      farmer: 'Zambezi Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
      ],
      productName: 'TT Coffee',
      newPrice: 78,
      oldPrice: 90,
      discountPercentage: '7'
    },

    {
      id: 19,
      imageUrl: '../../assets/img/coffee-bag-03.jpg',
      sticker: true,
      farmer: 'Zambezi Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
      ],
      productName: 'TT Coffee',
      newPrice: 78,
      oldPrice: 90,
      discountPercentage: '7'
    },

    {
      id: 20,
      imageUrl: '../../assets/img/coffee-bag-03.jpg',
      sticker: true,
      farmer: 'Zambezi Coffee Factory',
      rating: [
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
        'bi bi-star-fill',
      ],
      productName: 'TT Coffee',
      newPrice: 78,
      oldPrice: 90,
      discountPercentage: '7'
    },
  ]


  myScriptElement: HTMLScriptElement;
  constructor(private dialog: MatDialog,private service:AuthenticationService,private route:Router, private cartService : CartService){
     this.myScriptElement = document.createElement("script");
     this.myScriptElement.src = "./assets/js/main.js";
     document.body.appendChild(this.myScriptElement);
  }

  addtoCart(item: any){
    this.cartService.addtoCart(item);
  }

  user:any | null = null;
  isLoggedIn:any

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

   this.productData.forEach((a:any) => {
    Object.assign(a,{quantity:1, total:a.newPrice});
   })

   this.totalProduct = this.productData.length;
  }

  //product form tab index
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
