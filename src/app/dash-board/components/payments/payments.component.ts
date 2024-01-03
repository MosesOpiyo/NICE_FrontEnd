import { Component } from '@angular/core';
import { ProductsService } from 'src/app/ProductsService/products.service';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {

  displayedColumns: string[] = ['date','product','orderno','delivery','amount','payment', 'status'];
  Orders:any

  constructor(private products:ProductsService,private service:AuthenticationService){}

  ngOnInit(): void {
    this.products.getWarehouseOrders().subscribe((res:any)=>{
      this.Orders = res
    })
  }
}
