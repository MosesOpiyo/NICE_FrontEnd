import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from 'src/app/login/login.component'; 
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';
import { AuthService } from 'src/app/Auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nicehomepage',
  templateUrl: './nicehomepage.component.html',
  styleUrls: ['./nicehomepage.component.css']
})
export class NicehomepageComponent implements OnInit {

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
   constructor(private dialog: MatDialog,private service:AuthenticationService,private route:Router){
      this.myScriptElement = document.createElement("script");
      this.myScriptElement.src = "../../assets/js/main.js";
      document.body.appendChild(this.myScriptElement);
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
        else if(this.user.type == "ORIGINWAREHOUSER"){
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
   }
}

