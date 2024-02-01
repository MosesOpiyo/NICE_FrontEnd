import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from '../AuthService/authentication.service';
import { AuthenticationStoreService } from '../AuthServiceStore/authentication-store.service';
import { CartService } from '../Service/Cart/cart.service';
import { CartStoreService } from '../Store/Cart/cart-store.service';
import { ProductStoreService } from '../Store/Products/product-store.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  myScriptElement: HTMLScriptElement;
  constructor(private service:AuthenticationService,private authStore:AuthenticationStoreService,private cart:CartService,private cartStore:CartStoreService,private product:ProductStoreService){
     this.myScriptElement = document.createElement("script");
     this.myScriptElement.src = "./assets/js/main.js";
     document.body.appendChild(this.myScriptElement);
  }

  ngOnInit(): void {
    this.product.productData()
    this.cartStore.cartCheck()
    if(sessionStorage.getItem('Token')){
      this.authStore.storeProfileData()
      
    }
    
  }
}
