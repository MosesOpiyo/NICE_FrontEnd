import { Component,OnInit } from '@angular/core';
import { ProductsService } from 'src/app/ProductsService/products.service';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  constructor(private products:ProductsService,private service:AuthenticationService){}
  displayedColumns: string[] = ['name','buyer','quantity','country','marker','is_fulfilled'];
  Orders:any

  ngOnInit(): void {
    this.products.getWarehouseOrders().subscribe((res:any)=>{
      this.Orders = res
    })
  }

}
