import { Component } from '@angular/core';
import { ProductsService } from 'src/app/ProductsService/products.service';

@Component({
  selector: 'app-requested',
  templateUrl: './requested.component.html',
  styleUrls: ['./requested.component.css']
})
export class RequestedComponent {
  constructor(private products:ProductsService){}
  displayedColumns: string[] = ['name','quantity','warehoused_approved','producer'];
  farmerProducts:any
  
  ngOnInit(): void {
    this.products.getFarmerProducts().subscribe((res:any)=>{
      this.farmerProducts = res
    })
  }
  

}
