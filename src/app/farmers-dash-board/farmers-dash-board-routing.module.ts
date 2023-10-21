import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmersDashBoardComponent } from './farmers-dash-board.component';
import { AccountComponent } from './components/account/account.component';
import { ProductsComponent } from './components/products/products.component';
import { NewproductComponent } from '../dashboard/components/newproduct/newproduct.component';

const routes: Routes = [
  {
    path: 'farmer', component: FarmersDashBoardComponent,
    children: [
      {path: '', component: AccountComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'newProduct', component: NewproductComponent }
    ]
  } 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmersDashBoardRoutingModule { }
