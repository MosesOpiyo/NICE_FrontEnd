import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/Cart/cart.service';

@Component({
  selector: 'app-productsnavbar',
  templateUrl: './productsnavbar.component.html',
  styleUrls: ['./productsnavbar.component.css']
})
export class ProductsnavbarComponent implements OnInit {
<<<<<<< HEAD
  constructor(private cart: CartService){}
  userCart:any
=======

  public totalItem : number = 0;
  
  myScriptElement: HTMLScriptElement;
  constructor(private cartService : CartService){
    this.myScriptElement = document.createElement("script");
     this.myScriptElement.src = "../../assets/js/main.js";
     document.body.appendChild(this.myScriptElement);
  }

>>>>>>> c5fcd4f1685310a46a69e8c52ed027b58004d3b6
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
