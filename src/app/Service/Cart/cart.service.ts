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
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Orders&Cart/Cart`,{'headers':headers})
  }
  addToCart(id:number,cartItem:any){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    this.http.post(`${environment.BASE_URL}Orders&Cart/NewProductInCart/${id}`,cartItem,{'headers':headers}).subscribe((res:any)=>{
    })
  }
  makePayment(amount:any){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Payment/paypal/create/${amount}`,{'headers':headers})
  }
}
