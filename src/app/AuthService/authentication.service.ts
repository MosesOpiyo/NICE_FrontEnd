import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from '../Auth/auth.service';
import { environment } from 'src/environments/environment.development';
import { User } from '../User/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient,private authService:AuthService) { }
  Register(credentials:any){
    this.http.post(`${environment.BASE_URL}Authentication/Registration`,credentials).subscribe((response:any)=>{
      sessionStorage.setItem('token', response['token'])
      this.authService.authentication(true)
      alert(`Welcome back`)
    })
  }
  login(credentials:any){
    this.http.post(`${environment.BASE_URL}Authentication/Login`,credentials).subscribe((response:any)=>{
      sessionStorage.setItem('token', response['token'])
      this.authService.authentication(true)
      alert(`Welcome back`)
    })
  }
  getProfile(){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
    return this.http.get(`${environment.BASE_URL}Authentication/Profile`,{'headers':headers})
  }
  logout(){
    sessionStorage.removeItem('token')
    this.authService.authentication(false)
  }
}
