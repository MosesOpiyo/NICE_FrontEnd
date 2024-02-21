import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { WarehouseService } from 'src/app/Service/Warehouse/warehouse.service';

@Component({
  selector: 'app-savechanges',
  templateUrl: './savechanges.component.html',
  styleUrls: ['./savechanges.component.css']
})
export class SavechangesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private update:AuthenticationService,private updateWarehouse:WarehouseService) {}
  
  change:any

  checkData(){
    const key = this.data.key
    let newData = {
       [`${key}`]:this.change
    }
    if(this.data.id < 27){
      this.update.updateFarmerProfile(key,newData)
    }
    else if(this.data.id > 26){
      this.updateWarehouse.updateWarehouserProfile(key,newData)
    }
    
    
  }
  ngOnInit(): void {
    this.change = this.data.data
      
  }

}
