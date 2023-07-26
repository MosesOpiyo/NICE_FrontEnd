import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../AuthService/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private dialog: MatDialog,private service:AuthenticationService){}
  user:any | null = null;;

  showLoginDialog(){
    const dialogRef = this.dialog.open(LoginComponent,{
      width: '25pc'
    }); 
  }
  ngOnInit(): void {
    this.service.getProfile().subscribe((res:any)=>{
      this.user = res['user']
    })
  }

}
