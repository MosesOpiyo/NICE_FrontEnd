import { Component,OnInit } from '@angular/core';
import { AuthService } from '../Auth/auth.service';
import { AuthenticationService } from '../AuthService/authentication.service';
import { AuthenticationStoreService } from '../AuthServiceStore/authentication-store.service';
import { CartService } from '../Service/Cart/cart.service';
import { CartStoreService } from '../Store/Cart/cart-store.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  myScriptElement: HTMLScriptElement;
  constructor(private service:AuthenticationService,private authStore:AuthenticationStoreService,private cart:CartService,private cartStore:CartStoreService){
     this.myScriptElement = document.createElement("script");
     this.myScriptElement.src = "./assets/js/main.js";
     document.body.appendChild(this.myScriptElement);
  }
  ngOnInit(): void {
    this.authStore.storeProfileData()
    if(sessionStorage.getItem('Token')){
      this.cart.getCart().subscribe((res:any)=>{
        this.cartStore.updateData(res)
        this.cartStore.data$.subscribe((data:any) =>{
        })
      })
    }
    
  }
}
