import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private http:HttpClient) { }
  getCart(){
    return this.http.get(`${environment.BASE_URL}Orders&Cart/Cart`)
  }
  getAuthCart(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Orders&Cart/Cart`,{'headers':headers})
  }
  checkCart(session:any){
    return this.http.get(`${environment.BASE_URL}Orders&Cart/Cart/${session}`)
  }
  addToCart(id:number,session:any,cartItem:any){
    return this.http.post(`${environment.BASE_URL}Orders&Cart/NewProductInCart/${session}/${id}`,cartItem)
  }
  removeFromCart(id:number){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Orders&Cart/RemoveFromCart/${id}`,{'headers':headers})
  }
  makePayment(amount:any){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Payment/paypal/create/${amount}`,{'headers':headers})
  }
}
