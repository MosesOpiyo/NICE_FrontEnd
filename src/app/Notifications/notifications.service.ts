import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.development';
import { AuthenticationStoreService } from '../AuthServiceStore/authentication-store.service';
import { AuthenticationService } from '../AuthService/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http:HttpClient,private store:AuthenticationStoreService,private auth:AuthenticationService) { }
  getNotifications(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Notifications/notifications`,{'headers':headers})
  }
  deleteNotifications(input){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    this.http.post(`${environment.BASE_URL}Authentication/DeleteNotifications`,input,{'headers':headers}).subscribe((response:any)=>{
      this.store.storeProfileData()
      this.auth.refreshPage()
    })
  }

  approveManifest(id:number){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Warehouse/Shipping/${id}`,{'headers':headers})
  }
}
