import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private dialog: MatDialog){}
  showLoginDialog(){
    this.dialog.open(LoginComponent,{
      width:'30vw'
    })
  }

}
