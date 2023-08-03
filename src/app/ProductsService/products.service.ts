import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getProducts(){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
    return this.http.get(`${environment.BASE_URL}Warehouse/Products`,{'headers':headers})
  }
}
