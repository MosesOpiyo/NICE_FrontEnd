import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FarmerSignUpComponent } from '../sign-up/farmer-sign-up/farmer-sign-up.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private dialog: MatDialog){
 }

  showFarmerSignUpDialog(){
    const dialogRef = this.dialog.open(FarmerSignUpComponent,{
      width: '25pc'
    }); 
  }
}
