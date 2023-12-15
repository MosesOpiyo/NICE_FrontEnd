import { Component, Inject } from '@angular/core';
import { MessagesComponent } from '../messages/messages.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { NotificationsService } from 'src/app/Notifications/notifications.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirmdeletion',
  templateUrl: './confirmdeletion.component.html',
  styleUrls: ['./confirmdeletion.component.css']
})
export class ConfirmdeletionComponent {
  constructor(private notifications:NotificationsService,@Inject(MAT_DIALOG_DATA) public data:any,private snackbar:MatSnackBar,public dialog:MatDialog){}

  deleteNotifications(){
    if(this.data.data.length > 0){
      let form = new FormData
      for (let i = 0; i < this.data.data.length; i++) {   
      form.append(`notificationsList[]`, this.data.data[i]);
      }
      this.notifications.deleteNotifications(form)
      this.dialog.closeAll()
    }else if(this.data.data.length == 0){
      this.snackbar.open("No Notifications Selected", 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    }
    
  }
}