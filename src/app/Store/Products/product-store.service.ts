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

  updateData(data: any[]): void {
    this.dataSubject.next(data);
  }
  productData(){
    this.product.getProcessedProducts().subscribe((res:any) => {
      this.updateData(res)
    })
  }
}
