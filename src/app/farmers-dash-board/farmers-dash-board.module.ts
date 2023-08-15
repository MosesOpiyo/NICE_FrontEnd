import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmersDashBoardRoutingModule } from './farmers-dash-board-routing.module';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AccountComponent } from './components/account/account.component';
import { FarmerHeaderComponent } from './components/farmer-header/farmer-header.component';
import { FarmersDashBoardComponent } from './farmers-dash-board.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductsComponent } from './components/products/products.component';
import { NewproductComponent } from './components/newproduct/newproduct.component';


@NgModule({
  declarations: [
    AccountComponent,
    FarmerHeaderComponent,
    FarmersDashBoardComponent,
    SidebarComponent,
    ProductsComponent,
    NewproductComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    FarmersDashBoardRoutingModule
  ],
  
})
export class FarmersDashBoardModule { }
