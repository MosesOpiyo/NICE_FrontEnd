import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from 'src/app/login/login.component'; 
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';
import { AuthService } from 'src/app/Auth/auth.service';
import { Router } from '@angular/router';
import { FarmerSignUpComponent } from 'src/app/sign-up/farmer-sign-up/farmer-sign-up.component';
import { AddtocartComponent } from 'src/app/addtocart/addtocart.component';
import { ProductStoreService } from 'src/app/Store/Products/product-store.service';
import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'app-nicehomepage',
  templateUrl: './nicehomepage.component.html',
  styleUrls: ['./nicehomepage.component.css']
})
export class NicehomepageComponent implements OnInit {

  number_value:any;
  number_value2:any;
  isShowDiv = false;
  isShowDiv2 = false;
  email: any;
  products:any[] = [];
  popularProducts: any[] = [];
  ratings : number[] = [];
  cloudinaryUrl = environment.CLOUDINARY_URL
  
  coffeeData = [ 
    {
      id: 1,
      imageUrl: '../../assets/img/packaging/pkg7.jpg',
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
      newPrice: '78',
      oldPrice: '90',
      discountPercentage: '7'
    },

    {
      id: 2,
      imageUrl: '../../assets/img/packaging/pkg8.jpg',
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
      newPrice: '80',
      oldPrice: '90',
      discountPercentage: '5'
    },

    {
      id: 3,
      imageUrl: '../../assets/img/coffee-04.jpg',
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
      newPrice: '70',
      oldPrice: '100',
      discountPercentage: '10'
    },

    {
      id: 4,
      imageUrl: '../../assets/img/packaging/pkg1.jpg',
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
      newPrice: '50',
      oldPrice: '80',
      discountPercentage: '10'
    },

    {
      id: 5,
      imageUrl: '../../assets/img/packaging/pkg10.jpg',
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
      newPrice: '70',
      oldPrice: '100',
      discountPercentage: '15'
    },

    {
      id: 6,
      imageUrl: '../../assets/img/coffee-bag-02.jpg',
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
      newPrice: '80',
      oldPrice: '90',
      discountPercentage: '7'
    },

    {
      id: 7,
      imageUrl: '../../assets/img/coffee-bag-03.jpg',
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
      newPrice: '70',
      oldPrice: '90',
      discountPercentage: '10'
    },

    {
      id: 8,
      imageUrl: '../../assets/img/packaging/pkg9.jpg',      
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
      newPrice: '78',
      oldPrice: '90',
      discountPercentage: '7'
    },

    {
      id: 9,
      imageUrl: '../../assets/img/coffee-bag-01.jpg',
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
      newPrice: '80',
      oldPrice: '90',
      discountPercentage: '10'
    },

    {
      id: 10,
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
      newPrice: '78',
      oldPrice: '90',
      discountPercentage: '7'
    },
  ]

  myScriptElement: HTMLScriptElement;
   constructor(private dialog: MatDialog,private service:AuthenticationService,private route:Router,private product:ProductStoreService){
      this.myScriptElement = document.createElement("script");
      this.myScriptElement.src = "./assets/js/main.js";
      document.body.appendChild(this.myScriptElement);
   }

   user:any | null = null;
   isLoggedIn:any

   showLoginDialog(){
    const dialogRef = this.dialog.open(LoginComponent,{
      width: '25pc',
      maxWidth: '90vw',
      autoFocus: false,
      maxHeight: '90vh'
    });
  }

  logout(){
    this.service.logout()
    this.ngOnInit()
  }

  showSignUpDialog(){
    const dialogRef = this.dialog.open(SignUpComponent,{
      width: '25pc',
      maxWidth: '90vw',
      autoFocus: false,
      maxHeight: '90vh'
    }); 
  }
  showFarmerSignUpDialog(){
    const dialogRef = this.dialog.open(FarmerSignUpComponent,{
      width: '25pc',
      maxWidth: '90vw',
      autoFocus: false,
      maxHeight: '90vh'
    }); 
  }

  showAddtocartDialog(enterAnimationDuration: string, exitAnimationDuration: string){
    const dialogRef = this.dialog.open(AddtocartComponent,{
      width: '30pc',
      maxWidth: '90vw',
      autoFocus: false,
      maxHeight: '100vh',
      enterAnimationDuration,
      exitAnimationDuration
    });
  }

  ngOnInit(): void {
    this.product.data$.subscribe((res:any)=>{
      if(res == ""){
        this.product.productData()
        this.product.data$.subscribe((res:any)=>{})
      }
      else {
        this.popularProducts = res.slice(0,6)
        this.products = res.slice(0,8)
      }

      this.products.forEach((product:any) => {
        product.rating.forEach((ratingItem: any) => {
          if(ratingItem){
            this.ratings.push(ratingItem.rating)
          }
        });
      })
    });
   }

}

