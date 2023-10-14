import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../AuthService/authentication.service';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AuthService } from '../Auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  myScriptElement: HTMLScriptElement;
   constructor(private dialog: MatDialog,private service:AuthenticationService,private route:Router){
      this.myScriptElement = document.createElement("script");
      this.myScriptElement.src = "../../assets/js/main.js";
      document.body.appendChild(this.myScriptElement);
   }

   user:any | null = null;
   isLoggedIn:any

  showLoginDialog(){
    const dialogRef = this.dialog.open(LoginComponent,{
      width: '25pc'
    });
  }

  logout(){
    this.service.logout()
    this.ngOnInit()
  }

  showSignUpDialog(){
    const dialogRef = this.dialog.open(SignUpComponent,{
      width: '25pc'
    }); 
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('Token')){
      this.service.getProfile().subscribe((res:any)=>{
        this.user = res['user']
        if(this.user.type == "FARMER"){
          this.route.navigate(['DashBoard'])
        }
        else if(this.user.type == "WAREHOUSER"){
          this.route.navigate(['DashBoard'])
        }
        else if(this.user.type == "ADMIN"){
          this.route.navigate(['DashBoard'])
        }
        else{
          false
        }
      })
    }
    else{
      console.log("No token")
    }
   }

}
