import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { NotificationMsgComponent } from '../notification-msg/notification-msg.component';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsService } from 'src/app/Notifications/notifications.service';
import { Router } from '@angular/router';
import { ConfirmdeletionComponent } from '../confirmdeletion/confirmdeletion.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  constructor(private service:AuthenticationService,private dialog:MatDialog){}
  user:any
  masterSelected = false;
  index: any;
  unreaded: any[] = [];

checkUncheckAll(evt: any) {
  this.user.notifications.forEach((c) => c.isSelected = evt.target.checked)
}

isAllSelected(evt: any, index: any) {
    this.user.notifications[index].isSelected = evt.target.checked
    this.masterSelected = this.user.notifications.every((item) => item.isSelected == true);
}

showNotification(info: any) {
  this.dialog.open(NotificationMsgComponent, {
    width: '25pc',
    maxHeight: '90vh',
    data: {
      message: info
    }
  })
}

showConfirmdelete() {
  this.dialog.open(ConfirmdeletionComponent, {
    width: '25pc',
    maxHeight: '90vh',
  })
}

  ngOnInit(): void {
    this.service.getProfile().subscribe((res:any)=>{
      this.user = res['user']
      for(let message of this.user.notifications){
        if(message.seen == false){
          this.unreaded.push(message)
          console.log(this.unreaded)
        }
      }
    })
    
  }

}
