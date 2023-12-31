import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { NotificationsService } from 'src/app/Notifications/notifications.service';
import { AuthenticationStoreService } from 'src/app/AuthServiceStore/authentication-store.service';
import { User } from 'src/app/Classes/AuthClass/user';

@Component({
  selector: 'app-dashboardheader',
  templateUrl: './dashboardheader.component.html',
  styleUrls: ['./dashboardheader.component.css']
})
export class DashboardheaderComponent implements OnInit {

  constructor(private service:AuthenticationService,private store:AuthenticationStoreService,private notification:NotificationsService,private route:Router){}
  user:User
  cloudinaryUrl = environment.CLOUDINARY_URL
  pic:any
  data:any;
  unreaded: any[] = [];

  logOut(){
    this.service.logout()
    this.ngOnInit()
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('Token')){
      this.store.storeProfileData()
      this.store.data$.subscribe((res:any)=>{
        this.user = res['user']
        this.data = res['user']['notifications']
      })
    }
    else{
      this.route.navigate([''])
    }

    this.service.getProfile().subscribe((res:any)=>{
      this.user = res['user']
      for(let message of this.user.notifications){
        if(message.seen == false){
          this.unreaded.push(message)
        }
      }
    })
  }

}
