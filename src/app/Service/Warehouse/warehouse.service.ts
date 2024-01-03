import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.development';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http:HttpClient,private snackbar:MatSnackBar,private location:Location) { }
  refreshPage() {
    this.location.replaceState(this.location.path());
    window.location.reload();
  }

  getWarehouse(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Warehouse/Warehouse`,{'headers':headers})
  }
  updateWarehouserProfile(key,credentials:any){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    this.http.put(`${environment.BASE_URL}Warehouse/EditWarehouse/${key}`,credentials,{'headers':headers}).subscribe((response:any)=>{
      this.snackbar.open("Update SuccessFul", 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
      this.refreshPage()
    },(error:any) =>{
      console.log(error.error)
      this.snackbar.open(error.error, 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    })
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
