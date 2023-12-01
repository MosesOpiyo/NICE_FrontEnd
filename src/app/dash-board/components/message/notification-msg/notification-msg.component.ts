import { Component } from '@angular/core';
import { NotificationsService } from 'src/app/Notifications/notifications.service';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-msg',
  templateUrl: './notification-msg.component.html',
  styleUrls: ['./notification-msg.component.css']
})
export class NotificationMsgComponent {

  user:any
  data:any;

  constructor(private notification:NotificationsService, private service:AuthenticationService, private route:Router){}

  ngOnInit(): void {
    if(sessionStorage.getItem('Token')){
      this.service.getProfile().subscribe((res:any)=>{
        this.user = res['user']
        console.log(this.user)
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
