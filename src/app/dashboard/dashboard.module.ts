import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaindashboardComponent } from './components/maindashboard/maindashboard.component';
import { DashboardComponent } from './dashboard.component';
import { FormsComponent } from './components/forms/forms.component';
import { TablesComponent } from './components/tables/tables.component';
import { ChartsComponent } from './components/charts/charts.component';
import { NewproductComponent } from './components/newproduct/newproduct.component';
import { RequestedComponent } from './components/requested/requested.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    MaindashboardComponent,
    DashboardComponent,
    FormsComponent,
    TablesComponent,
    ChartsComponent,
    NewproductComponent,
    RequestedComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule
  ]
})
export class DashboardModule { }
