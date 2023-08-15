import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { WarehouseService } from 'src/app/Service/Warehouse/warehouse.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  constructor(private service:AuthenticationService,private Warehouse:WarehouseService){}
  user:any | null = null;;
  warehouse:any | null = null;;
  ngOnInit(): void {
    this.service.getProfile().subscribe((res:any)=>{
      this.user = res['user']
    })
    this.Warehouse.getWarehouse().subscribe((res:any)=>{
      this.warehouse = res
    })
  }

}
