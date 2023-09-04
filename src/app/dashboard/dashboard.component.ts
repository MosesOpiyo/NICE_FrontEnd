import { Component } from '@angular/core';
import { AuthenticationService } from '../AuthService/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private service:AuthenticationService,private route:Router){}
  user:any

  logOut(){
    this.service.logout()
    this.ngOnInit()
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('Token')){
      this.service.getProfile().subscribe((res:any)=>{
        this.user = res['user']
      })
    }
    else{
      this.route.navigate(['homepage'])
    }
  }

}
