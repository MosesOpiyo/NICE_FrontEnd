import { Component } from '@angular/core';
import { ProductsService } from 'src/app/ProductsService/products.service';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';

@Component({
  selector: 'app-processed-products',
  templateUrl: './processed-products.component.html',
  styleUrls: ['./processed-products.component.css']
})
export class ProcessedProductsComponent {
  constructor(private products:ProductsService,private service:AuthenticationService){}
  displayedColumns: string[] = ['name','buyer','quantity','country','marker','is_fulfilled'];
  Orders:any
  user:any

  ngOnInit(): void {
    this.products.getWarehouseOrders().subscribe((res:any)=>{
      this.Orders = res
    })
    this.service.getProfile().subscribe((res:any)=>{
      this.user = res['user']
    })
  }

}
