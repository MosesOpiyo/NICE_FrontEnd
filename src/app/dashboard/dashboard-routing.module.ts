import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MaindashboardComponent } from './components/maindashboard/maindashboard.component';
import { FormsComponent } from './components/forms/forms.component';
import { TablesComponent } from './components/tables/tables.component';
import { ChartsComponent } from './components/charts/charts.component';
import { RequestedComponent } from './components/requested/requested.component';
import { DetailsComponent } from './components/details/details.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path: '', component: MaindashboardComponent},
      {path: 'details', component: DetailsComponent},
      {path: 'requested', component: RequestedComponent},
      {path: 'orders', component: OrdersComponent},
      {path: 'form', component: FormsComponent},
      {path: 'table', component: TablesComponent},
      {path: 'charts', component: ChartsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
