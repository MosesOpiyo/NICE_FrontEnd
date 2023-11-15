import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board.component';
import { DashboardheaderComponent } from './components/dashboardheader/dashboardheader.component';
import { DashboardsidebarComponent } from './components/dashboardsidebar/dashboardsidebar.component';
import { DetailsComponent } from './components/details/details.component';
import { TablesComponent } from './components/tables/tables.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { ProcessedProductsComponent } from './components/processed-products/processed-products.component';
import { FormsComponent } from './components/forms/forms.component';
import { ManifestsComponent } from './components/manifests/manifests.component';

const routes: Routes = [
  {
    path: 'dash-board', component: DashBoardComponent,
    children: [
      { path: '', component: DetailsComponent },
      { path: 'table', component: TablesComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'processed_products', component: ProcessedProductsComponent },
      { path: 'manifests', component: ManifestsComponent },
      { path: 'form', component: FormsComponent },
      // {path: 'table', component: TablesComponent},
      // {path: 'charts', component: ChartsComponent},
      { path: 'pending_accounts', component: AccountsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
