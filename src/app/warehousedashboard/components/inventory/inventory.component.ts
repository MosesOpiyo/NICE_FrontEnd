import { Component, OnInit } from '@angular/core';
import { WarehouseService } from 'src/app/Service/Warehouse/warehouse.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  

  constructor(private Warehouse:WarehouseService){}
  
  displayedColumns: string[] = ['name','quantity','warehoused_approved','producer'];
  warehouse:any
  
  
  ngOnInit(): void {
    this.Warehouse.getWarehouse().subscribe((res:any)=>{
      this.warehouse = res;
    })
  }
}
