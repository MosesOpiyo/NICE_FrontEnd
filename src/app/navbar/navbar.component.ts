import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../AuthService/authentication.service';
import { SignUpComponent } from '../sign-up/sign-up.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private dialog: MatDialog,private service:AuthenticationService,private route:Router){}
  user:any | null = null;;

  showLoginDialog(){
    const dialogRef = this.dialog.open(LoginComponent,{
      width: '25pc'
    });
  }
  showSignUpDialog(){
    const dialogRef = this.dialog.open(SignUpComponent,{
      width: '25pc'
    });
  }
  logOut(){
    this.service.logout()
  }
  ngOnInit(): void {
    this.service.getProfile().subscribe((res:any)=>{
      this.user = res['user']
      if(this.user.type == "WAREHOUSER"){
        this.route.navigate(['Warehouse'])
      }
      else if(this.user.type == "FARMER"){
        this.route.navigate(['Farmer'])
      }
    })
  }

}
