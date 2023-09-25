import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/Cart/cart.service';

@Component({
  selector: 'app-productsnavbar',
  templateUrl: './productsnavbar.component.html',
  styleUrls: ['./productsnavbar.component.css']
})
export class ProductsnavbarComponent implements OnInit {

  public totalItem : number = 0;
  
  constructor(private cartService : CartService){}

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=> {
     this.totalItem = res.length;
    })
   }

}
