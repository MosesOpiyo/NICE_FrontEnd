import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../ProductsService/products.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css'],
  
})
export class CoffeeComponent implements OnInit {
  constructor(private product:ProductsService){}
  products:any
  ngOnInit(): void {
    this.product.getProducts().subscribe((response:any)=>{
      this.products = response
      console.log(this.products['warehoused_products'])
    })
  }

}
