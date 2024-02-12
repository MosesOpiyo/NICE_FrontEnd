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
    const Token = sessionStorage.getItem('Token')
    const session = localStorage.getItem("session")
    if(Token){
      this.cart.getAuthCart().subscribe((res:any) => {
        this.updateData(res)
      })
    }else{
      if(session){
        this.cart.getCartSession(session).subscribe((res:any) => {
          this.updateData(res)
        })
      }else{
        this.cart.getCart().subscribe((res:any) => {
          localStorage.setItem('session',res.session_id)
        })
      }
    }
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
    this.cart.getCartSession(session).subscribe((res:any) => {
      this.updateData(res)
    })
  }
}
