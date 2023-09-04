import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { ProductsService } from 'src/app/ProductsService/products.service';

@Component({
  selector: 'app-requested',
  templateUrl: './requested.component.html',
  styleUrls: ['./requested.component.css']
})
export class RequestedComponent {
  constructor(private products:ProductsService,private service:AuthenticationService){}
  displayedColumns: string[] = ['name','producer','quantity','grade','origin','lot_type','is_approved'];
  farmerProducts:any
  requestsProducts:any
  user:any
  
  ngOnInit(): void {
    this.service.getProfile().subscribe((res:any)=>{
      this.user = res['user']
    })
    this.products.getWarehouseRequests().subscribe((res:any)=>{
      this.requestsProducts = res
    })
  }
  

}
