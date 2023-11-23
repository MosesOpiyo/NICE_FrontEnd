import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.development';
import { AuthenticationService } from '../AuthService/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient,private snackBar:MatSnackBar,private service:AuthenticationService) { }
  addProduct(input:any){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
     this.http.post(`${environment.BASE_URL}Farmers/NewProduct`,input,{"headers":headers}).subscribe((res:any)=>{
      this.service.refreshPage()
      this.snackBar.open(res, 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
      
    })
  }
  addPRocessedProduct(input:any,id:any){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
     this.http.post(`${environment.BASE_URL}Farmers/NewProcessedProduct/${id}`,input,{"headers":headers}).subscribe((res:any)=>{
      this.service.refreshPage()
      this.snackBar.open(res, 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
      
    })
  }
  getProducts(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Warehouse/Products`,{'headers':headers})
  }
  getFarmerProducts(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Farmers/FarmerProduct`,{'headers':headers})
  }
  getFarmerRequestedProducts(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Farmers/FarmerRequestedProduct`,{'headers':headers})
  }
  makeProductRequest(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Farmers/ProductRequest`,{'headers':headers})
  }

  getShippingProducts(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Farmers/ShippingProduct`,{'headers':headers})
  }
  
  getinventoryProducts(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Warehouse/Warehouse`,{'headers':headers})
  }
  
  getWarehouseOrders(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Orders&Cart/WarehouseOrders`,{'headers':headers})
  }
  getWarehouseRequests(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Orders&Cart/Requests`,{'headers':headers})
  }
  getProcessedProducts(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Orders&Cart/Products`,{'headers':headers})
  }
  getProcessedProduct(id:number){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Orders&Cart/Product/${id}`,{'headers':headers})
  }
  
  receiveManifest(number:number){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Warehouse/WarehouseManifest/${number}`,{'headers':headers})
  }
}
