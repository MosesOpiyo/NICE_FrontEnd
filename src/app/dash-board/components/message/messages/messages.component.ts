import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { NotificationMsgComponent } from '../notification-msg/notification-msg.component';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsService } from 'src/app/Notifications/notifications.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmdeletionComponent } from '../confirmdeletion/confirmdeletion.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  constructor(private service:AuthenticationService,private dialog:MatDialog,private notifications:NotificationsService,private snackbar:MatSnackBar){}
  user:any
  isSeleted:boolean
  masterSelected = false;
  index: any;
  unreaded: any[] = [];
  notificationsList: any[] = [];

checkUncheckAll(evt:any) {
  this.user.notifications.forEach((c) => c.isSelected = evt.target.checked)
  this.notificationsList = []
  this.isSeleted = !this.isSeleted
  if(this.isSeleted){
    for(let item of this.user.notifications){
      this.notificationsList.push(item.id)
    }
  }
  else{
    this.notificationsList = []
  }
}

isAllSelected(item:any) {
  let index = this.notificationsList.indexOf(item.id)
  if(index !== -1){
    this.notificationsList.splice(index, 1);
    console.log(this.notificationsList)
  }else{
    this.notificationsList.push(item.id)
    console.log(this.notificationsList)
  }
}

showDeletionDialog() {
  if(this.notificationsList.length > 0){
    this.dialog.open(ConfirmdeletionComponent, {
      width: '25pc',
      maxHeight: '90vh',
      data: {
        data: this.notificationsList
      }
    })
  }
  else if(this.notificationsList.length == 0){
    this.snackbar.open("No Notifications Selected", 'Close', {
      duration: 3000,
      panelClass: ['blue-snackbar']
    });
  }
}


  ngOnInit(): void {
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