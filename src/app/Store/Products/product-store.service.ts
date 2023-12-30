import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductsService } from 'src/app/ProductsService/products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {
  constructor(private product:ProductsService){}
  private dataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  data$: Observable<any[]> = this.dataSubject.asObservable();
  private farmerDataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  farmerData$: Observable<any[]> = this.farmerDataSubject.asObservable();

  updateFarmerData(data: any[]): void {
    this.farmerDataSubject.next(data);
  }

  updateData(data: any[]): void {
    this.dataSubject.next(data);
  }
  farmerData(){
    this.product.getFarmerProducts().subscribe((res:any) => {
      this.updateData(res)
    })
  }
  productData(){
    this.product.getProcessedProducts().subscribe((res:any) => {
      this.updateData(res)
    })
  }
}
