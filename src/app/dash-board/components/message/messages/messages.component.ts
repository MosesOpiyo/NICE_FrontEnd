import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { NotificationMsgComponent } from '../notification-msg/notification-msg.component';
import { MatDialog } from '@angular/material/dialog';

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

showNotification() {
  this.dialog.open(NotificationMsgComponent)
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
