import { Component } from '@angular/core';
import { ProductsService } from 'src/app/ProductsService/products.service';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { NotificationMsgComponent } from '../notification-msg/notification-msg.component';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsService } from 'src/app/Notifications/notifications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(private products:ProductsService, private notification:NotificationsService, private service:AuthenticationService,private dialog:MatDialog, private route:Router){}

  user:any
  data:any;
  masterSelected = false;
  index: any;

checkUncheckAll(evt: any) {
  this.data.forEach((c) => c.isSelected = evt.target.checked)
}

isAllSelected(evt: any, index: any) {
    this.data[index].isSelected = evt.target.checked;
    this.masterSelected = this.data.every((item) => item.isSelected == true);
}

checklist = [
  {id:1,isSelected:false,notification:'Your coffee #1234RT4 has arrived at warehouse #1'},
  {id:2,isSelected:false,notification:'Your coffee #1234RT4 has arrived at warehouse #1'},
  {id:3,isSelected:false,notification:'Your coffee #1234RT4 has arrived at warehouse #1'},
  {id:4,isSelected:false,notification:'Your coffee #1234RT4 has arrived at warehouse #1'},
  {id:5,isSelected:false,notification:'Your coffee #1234RT4 has arrived at warehouse #1'},
  {id:6,isSelected:false,notification:'Your coffee #1234RT4 has arrived at warehouse #1'},
  {id:7,isSelected:false,notification:'Your coffee #1234RT4 has arrived at warehouse #1'},
  {id:8,isSelected:false,notification:'Your coffee #1234RT4 has arrived at warehouse #1'}
];

showNotification(info: any) {
  this.dialog.open(NotificationMsgComponent, {
    width: '25pc',
    maxHeight: '90vh',
    data: {
      message: info
    }
  })
}

  ngOnInit(): void {
    if(sessionStorage.getItem('Token')){
      this.service.getProfile().subscribe((res:any)=>{
        this.user = res['user']
      })
      this.notification.getNotifications().subscribe((res)=>{
        this.data = res
        console.log(this.data)
        console.log(this.data[0].message)
      })
    }
    else{
      this.route.navigate([''])
    }
  }

}
