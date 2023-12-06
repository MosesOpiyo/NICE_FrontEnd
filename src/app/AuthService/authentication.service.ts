import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { AuthService } from '../Auth/auth.service';
import { environment } from 'src/environments/environment.development';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { error } from 'console';
import { MatDialog } from '@angular/material/dialog';
import { VerificationComponent } from '../verification/verification.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {


  constructor(private http:HttpClient,private dialog:MatDialog,private authService:AuthService,private snackBar: MatSnackBar,private location:Location) { }
  ngOnInit(): void {
   
  }
  farmerRegister(credentials:any,email:any){
    this.http.post(`${environment.BASE_URL}Authentication/FarmerRegistration`,credentials).subscribe((response:any)=>{
      console.log(credentials.value)
      this.snackBar.open("Account Created Successfully, Please verify via email.", 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
        const dialogRef = this.dialog.open(VerificationComponent,{
          data:{email:email},
          width: '25pc',
          maxHeight: '100vh'
        });
    },(error:any) =>{
      console.log(error.error)
      if(error.error.email != null){}
      this.snackBar.open(error.error.email, 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    })
  }

  Register(credentials:any){
    this.http.post(`${environment.BASE_URL}Authentication/Registration`,credentials).subscribe((response:any)=>{
      sessionStorage.setItem('Token', response.tokens.access)
      this.snackBar.open("Sign Up SuccessFul", 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
      this.refreshPage()
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

  verification(credentials:any){
    this.http.post(`${environment.BASE_URL}Authentication/Verification`,credentials).subscribe((response:any)=>{
      try{
      this.snackBar.open('Verification successful.', 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
      this.refreshPage()
      }catch{
        if(response){
          this.snackBar.open('Failed. Request for new code.', 'Close', {
            duration: 3000,
            panelClass: ['blue-snackbar']
          });
        }
      }
    }),(error:any) =>{
      console.log(error.error)
      this.snackBar.open(error.error, 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    }
  }

  login(credentials:any){
    this.http.post(`${environment.BASE_URL}Authentication/Login`,credentials).subscribe((response:any)=>{
      try{
      sessionStorage.setItem('Token', response.tokens.access)
      this.authService.authentication(true);
      this.snackBar.open('Login successful.Welcome', 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
      this.refreshPage()
      }catch{
        if(response){
          this.snackBar.open('Account not Verified, Please verify.', 'Close', {
            duration: 3000,
            panelClass: ['blue-snackbar']
          });
        }
        else{
          this.snackBar.open('Incorrect credentials, Please try again.', 'Close', {
            duration: 3000,
            panelClass: ['blue-snackbar']
          });
        }
      }
    }),(error:any) =>{
      console.log(error.error)
      this.snackBar.open(error.error, 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    }
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

  updateFarmerProfile(key,credentials:any){
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${sessionStorage.getItem('Token')}`
    })
    this.http.put(`${environment.BASE_URL}Farmers/ProfileUpdate/${key}`,credentials,{'headers':headers}).subscribe((response:any)=>{
      this.snackBar.open("Update SuccessFul", 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
      this.refreshPage()
    },(error:any) =>{
      console.log(error.error)
      this.snackBar.open(error.error, 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    })
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
