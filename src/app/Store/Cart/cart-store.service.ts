import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartService } from 'src/app/Service/Cart/cart.service';

@Injectable({
  providedIn: 'root'
})
export class CartStoreService {
  constructor(private cart:CartService){}
  private dataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  data$: Observable<any[]> = this.dataSubject.asObservable();

  updateData(data: any[]): void {
    this.dataSubject.next(data);
  }
  cartData(){
    this.cart.getCart().subscribe((res:any) => {
      localStorage.setItem("session",res['session_id'])
      this.updateData(res)
    })
  }
  cartCheck(){
    this.data$.subscribe((res:any)=>{
      if(res == ""){
        this.cartData()
      }else{
        true
      }
    })
  }
  updateCart(session:any){
    this.cart.checkCart(session).subscribe((res:any) => {
      this.updateData(res)
    })
  }
}
