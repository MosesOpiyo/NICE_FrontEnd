import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private http:HttpClient) { }
  getCartSession(session:any){
    const queryParams = new URLSearchParams();
    queryParams.set('session', session);
    return this.http.get(`${environment.BASE_URL}Orders&Cart/Cart?${queryParams.toString()}`)
  }
  getCart(){
    return this.http.get(`${environment.BASE_URL}Orders&Cart/Cart`)
  }
  getAuthCart(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Orders&Cart/Cart`,{'headers':headers})
  }
  addToCart(id:number,session:any,cartItem:any){
    return this.http.post(`${environment.BASE_URL}Orders&Cart/NewProductInCart/${session}/${id}`,cartItem)
  }
  removeFromCart(id:number){
    const session = localStorage.getItem("session")
    return this.http.get(`${environment.BASE_URL}Orders&Cart/RemoveFromCart/${session}/${id}`)
  }
  addToWishlist(id:number){
    const session = localStorage.getItem("session")
    return this.http.get(`${environment.BASE_URL}Orders&Cart/NewProductInWishList/${session}/${id}`)
  }
  removeFromWishlist(id:number){
    const session = localStorage.getItem("session")
    return this.http.get(`${environment.BASE_URL}Orders&Cart/RemoveFromWishlist/${session}/${id}`)
  }
  makePayment(amount:any){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Payment/paypal/create/${amount}`,{'headers':headers})
  }
}
