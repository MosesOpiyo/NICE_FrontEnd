import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationMsgComponent } from '../notification-msg/notification-msg.component';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})

export class InboxComponent {
  masterSelected = false;
  index: any;

  constructor(private dialog:MatDialog){}

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


}
