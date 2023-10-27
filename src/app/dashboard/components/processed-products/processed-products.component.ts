import { Component } from '@angular/core';
import { ProductsService } from 'src/app/ProductsService/products.service';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { AdminService } from 'src/app/AdminService/admin.service';

@Component({
  selector: 'app-processed-products',
  templateUrl: './processed-products.component.html',
  styleUrls: ['./processed-products.component.css']
})
export class ProcessedProductsComponent {
  constructor(private admin:AdminService,private service:AuthenticationService){}
  displayedColumns: string[] = ['name','rating','price','quantity','producer'];
  products:any
  user:any

  averageRating(item:any){
    const list :number[] = []
    item.rating.forEach((ratingItem:any) => {
      list.push(ratingItem.rating)
    });
    const sum = list.reduce((acc, item) => acc + item, 0);
    const total = Math.floor(sum / list.length);
    return total
   }

  ngOnInit(): void {
    this.admin.getProcessedProducts().subscribe((res:any)=>{
      this.products = res
    })
    this.service.getProfile().subscribe((res:any)=>{
      this.user = res['user']
    })
  }

}
