import { Component,OnInit } from '@angular/core';
import { ProductsService } from 'src/app/ProductsService/products.service';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { AuthenticationStoreService } from 'src/app/AuthServiceStore/authentication-store.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  constructor(private products:ProductsService,private service:AuthenticationStoreService){}
  displayedColumns: string[] = ['buyer','quantity','country','marker','is_fulfilled'];
  farmerDisplayedColumns: string[] = ['buyer','products','country','warehouse','date','quantity','marker','is_fulfilled'];
  Orders:any
  farmerOrders:any
  user:any

  ngOnInit(): void {
    this.service.storeProfileData()
    this.service.data$.subscribe((res:any) => {
      this.user = res['user']
      if(this.user.type == "FARMER"){
        this.products.getFarmerOrders().subscribe((res:any)=>{
          this.farmerOrders = res
        })
      }else if(this.user.type == "WAREHOUSER"){
        this.products.getWarehouseOrders().subscribe((res:any)=>{
          this.Orders = res
        })
      }
    })
    
  }

}
