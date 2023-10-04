import { Component } from '@angular/core';
import { AuthenticationService } from '../AuthService/authentication.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { NotificationsService } from '../Notifications/notifications.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private service:AuthenticationService,private notification:NotificationsService,private route:Router){}
  user:any
  cloudinaryUrl = environment.CLOUDINARY_URL
  pic:any
  data:any;

  logOut(){
    this.service.logout()
    this.ngOnInit()
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('Token')){
      this.service.getProfile().subscribe((res:any)=>{
        this.user = res
      })
      this.notification.getNotifications().subscribe((res)=>{
        this.data = Object.values(res)
        console.log(this.data)
      })
    }
    else{
      this.route.navigate(['homepage'])
    }
  }
  

}
