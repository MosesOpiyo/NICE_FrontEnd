import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../AuthService/authentication.service';

@Component({
  selector: 'app-coffee-navbar',
  templateUrl: './coffee-navbar.component.html',
  styleUrls: ['./coffee-navbar.component.css']
})
export class CoffeeNavbarComponent implements OnInit {
  constructor(private dialog: MatDialog,private service:AuthenticationService){}
  user:any | null = null;;

  showLoginDialog(){
    const dialogRef = this.dialog.open(LoginComponent,{
      width: '25pc'
    }); 
  }
  logOut(){
    this.service.logout()
    this.ngOnInit()
  }
  ngOnInit(): void {
    this.service.getProfile().subscribe((res:any)=>{
      this.user = res['user']
    })
  }

}
