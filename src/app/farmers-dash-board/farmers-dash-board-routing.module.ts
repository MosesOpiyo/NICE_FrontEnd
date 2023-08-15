import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmersDashBoardComponent } from './farmers-dash-board.component';
import { AccountComponent } from './components/account/account.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: 'farmer', component: FarmersDashBoardComponent,
    children: [
      {path: '', component: AccountComponent},
      {path: 'products', component: ProductsComponent},
    ]
  } 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmersDashBoardRoutingModule { }
