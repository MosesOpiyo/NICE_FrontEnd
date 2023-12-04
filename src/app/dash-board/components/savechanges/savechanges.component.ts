import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';

@Component({
  selector: 'app-savechanges',
  templateUrl: './savechanges.component.html',
  styleUrls: ['./savechanges.component.css']
})
export class SavechangesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private update:AuthenticationService) {}
  
  change:any

  checkData(){
    const key = this.data.key
    let newData = {
       [`${key}`]:this.change
    }
    console.log(newData)
    this.update.updateFarmerProfile(key,newData)
  }
  ngOnInit(): void {
    this.change = this.data.data
      
  }

}
