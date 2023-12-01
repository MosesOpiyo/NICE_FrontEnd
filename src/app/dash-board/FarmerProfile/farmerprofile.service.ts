import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.development';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class FarmerprofileService {

  constructor(private http:HttpClient,private snackBar:MatSnackBar,private service:AuthenticationService) { }
  addProfileDetails(input:any){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
     this.http.post(`${environment.BASE_URL}Farmers/FarmerProfileDetails`,input,{"headers":headers}).subscribe((res:any)=>{
      this.service.refreshPage()
      this.snackBar.open(res, 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
      
    })
  }
  getStories(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Farmers/Story`,{'headers':headers})
  }
  postStories(input:any){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
     this.http.post(`${environment.BASE_URL}Farmers/Story`,input,{"headers":headers}).subscribe((res:any)=>{
      this.service.refreshPage()
      this.snackBar.open(res, 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
      
    })
  }
}
