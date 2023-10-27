import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http:HttpClient,private snackbar:MatSnackBar) { }
  getWarehouse(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Warehouse/Warehouse`,{'headers':headers})
  }
  getWarehousers(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Warehouse/Warehousers`,{'headers':headers})
  }
  createManifest(id:any,input:any){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
     this.http.post(`${environment.BASE_URL}Warehouse/Manifest/${id}`,input,{"headers":headers}).subscribe((res:any)=>{
      this.snackbar.open(res, 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    })
  }
}
