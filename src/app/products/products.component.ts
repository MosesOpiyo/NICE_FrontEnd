import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from 'src/app/login/login.component';
import { AuthenticationService } from 'src/app/AuthService/authentication.service'; 
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';
import { environment } from 'src/environments/environment.development';
import { CartService } from '../Service/Cart/cart.service';
import { ProductsService } from '../ProductsService/products.service';
import { AddtocartComponent } from '../addtocart/addtocart.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  selectedOption: FormGroup;
  // p:number = 1;
  // itemsPerPage:number = 10;
  num: number = 1;
  num2: number = 1;
  totalProduct:any;
  products:any;
  cloudinaryUrl = environment.CLOUDINARY_URL


  myScriptElement: HTMLScriptElement;
  constructor(private dialog: MatDialog,private service:AuthenticationService,private route:Router, private cartService : CartService,private product:ProductsService){
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

  user:any | null = null;
  isLoggedIn:any
  ratings : number[] = [];
  total:any
  filteredProducts:any

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
    minWidth: '250px',
    maxHeight: '100vh',
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
   this.product.getProcessedProducts().subscribe((res:any)=>{
    this.products = res
    console.log(this.products)
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

