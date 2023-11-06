import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { AuthService } from '../Auth/auth.service';
import { environment } from 'src/environments/environment.development';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {


  constructor(private http:HttpClient,private authService:AuthService,private snackBar: MatSnackBar,private location:Location) { }
  ngOnInit(): void {
   
  }
  farmerRegister(credentials:any){
    this.http.post(`${environment.BASE_URL}Authentication/FarmerRegistration`,credentials).subscribe((response:any)=>{
      this.snackBar.open(response, 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    },(error:any) =>{
      console.log(error.error)
      this.snackBar.open(error.error, 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    })
  }

  Register(credentials:any){
    this.http.post(`${environment.BASE_URL}Authentication/Registration`,credentials).subscribe((response:any)=>{
      this.snackBar.open(response, 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    },(error:any) =>{
      console.log(error.error)
      this.snackBar.open(error.error, 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    })
  }
  refreshPage() {
    this.location.replaceState(this.location.path());
    window.location.reload();
  }

  login(credentials:any){
    this.http.post(`${environment.BASE_URL}Authentication/Login`,credentials).subscribe((response:any)=>{
      sessionStorage.setItem('Token', response.tokens.access)
      this.authService.authentication(true);
      this.snackBar.open('Login successful.Welcome', 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
      this.refreshPage()
    })
  }
  getProfile(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Authentication/Profile`,{'headers':headers})
  }

  getFarmerProfile(){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    return this.http.get(`${environment.BASE_URL}Farmers/FarmerProfile`,{'headers':headers})
  }

  logout(){
    sessionStorage.removeItem('Token')
    this.authService.authentication(false)
    this.snackBar.open('Log Out successful.', 'Close', {
      duration: 3000,
      panelClass: ['blue-snackbar']
    });
  }
}
