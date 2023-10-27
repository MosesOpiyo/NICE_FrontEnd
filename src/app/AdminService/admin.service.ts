import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient,private snackbar:MatSnackBar) { }
  getBuyers(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Administration/AllBuyers`,{'headers':headers})
  }
  getFarmers(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Administration/AllFarmers`,{'headers':headers})
  }
  getWarehousers(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Administration/AllWarehousers`,{'headers':headers})
  }
  getActiveAdmins(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Administration/ActiveAdmins`,{'headers':headers})
  }
  getPendingAccounts(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Administration/PendingAccounts`,{'headers':headers})
  }
  pendingActivation(id:number){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Administration/PendingActivation/${id}`,{'headers':headers}).subscribe((res:any)=>{
      this.snackbar.open(res, 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    })
  }
  warehousingRequests(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.put(`${environment.BASE_URL}Administration/WarehousingRequest`,{'headers':headers})
  }
  getProcessedProducts(){
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Administration/ProcessedProducts`,{'headers':headers})
  }
}
