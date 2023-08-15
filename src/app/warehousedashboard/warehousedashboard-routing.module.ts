import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehousedashboardComponent } from './warehousedashboard.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { RequestsComponent } from './components/requests/requests.component';

const routes: Routes = [
  
  {
    path: 'warehouse', component: WarehousedashboardComponent,
    children: [
      {path: '', component: MyaccountComponent},
      {path: 'inventory', component: InventoryComponent},
      {path: 'WarehousingRequests', component: RequestsComponent}
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehousedashboardRoutingModule { }
