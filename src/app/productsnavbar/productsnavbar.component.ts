import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/Cart/cart.service';

@Component({
  selector: 'app-productsnavbar',
  templateUrl: './productsnavbar.component.html',
  styleUrls: ['./productsnavbar.component.css']
})
export class ProductsnavbarComponent implements OnInit {
  constructor(private cart: CartService){}
  userCart:any
  ngOnInit(): void {
    if(sessionStorage.getItem('Token')){
      this.cart.getCart().subscribe((res:any)=>{
        this.userCart = res['products']
      })
     }
     else{
       console.log("No token")
     }
   }

}
