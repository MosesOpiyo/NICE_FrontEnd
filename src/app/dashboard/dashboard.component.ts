import { Component } from '@angular/core';
import { AuthenticationService } from '../AuthService/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private service:AuthenticationService){}
  user:any
  ngOnInit(): void {
    if(sessionStorage.getItem('Token')){
      this.service.getProfile().subscribe((res:any)=>{
        this.user = res['user']
      })
    }
    else{
      console.log("No token")
    }
   }

}
