import { Component } from '@angular/core';
import { ProductsService } from 'src/app/ProductsService/products.service';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { NotificationMsgComponent } from '../notification-msg/notification-msg.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  constructor(private products:ProductsService,private service:AuthenticationService,private dialog:MatDialog){}
  user:any

  masterSelected = false;
  index: any;

checkUncheckAll(evt: any) {
  this.checklist.forEach((c) => c.isSelected = evt.target.checked)
}

isAllSelected(evt: any, index: any) {
    this.checklist[index].isSelected = evt.target.checked
    this.masterSelected = this.checklist.every((item) => item.isSelected == true);
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

showNotification() {
  this.dialog.open(NotificationMsgComponent)
}


  ngOnInit(): void {
    this.service.getProfile().subscribe((res:any)=>{
      this.user = res['user']
    })
  }
}
