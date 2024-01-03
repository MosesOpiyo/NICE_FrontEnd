import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TripdialogueComponent } from '../tripdialogue/tripdialogue.component';

@Component({
  selector: 'app-tripdetails',
  templateUrl: './tripdetails.component.html',
  styleUrls: ['./tripdetails.component.css']
})
export class TripdetailsComponent {
  constructor(private dialog: MatDialog){}

  showTripRegisterDialog() {
    let dialogRef = this.dialog.open(TripdialogueComponent,{
      width: '25pc',
      maxWidth: '90vw',
      autoFocus: false,
      maxHeight: '100vh',
    })
   }
}
