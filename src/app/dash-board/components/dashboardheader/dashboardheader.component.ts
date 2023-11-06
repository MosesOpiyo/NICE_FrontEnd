import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { NotificationsService } from 'src/app/Notifications/notifications.service';

@Component({
  selector: 'app-dashboardheader',
  templateUrl: './dashboardheader.component.html',
  styleUrls: ['./dashboardheader.component.css']
})
export class DashboardheaderComponent implements OnInit {

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
        this.data = res
        console.log(this.data)
      })
    }
    else{
      this.route.navigate([''])
    }
  }

}
