import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { WarehousedashboardRoutingModule } from './warehousedashboard-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { WarehousedashboardComponent } from './warehousedashboard.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    MyaccountComponent,
    InventoryComponent,
    WarehousedashboardComponent
  ],
  entryComponents:[InventoryComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    WarehousedashboardRoutingModule
  ]
})
export class WarehousedashboardModule { }
