import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaindashboardComponent } from './components/maindashboard/maindashboard.component';
import { DashboardComponent } from './dashboard.component';
import { FormsComponent } from './components/forms/forms.component';
import { TablesComponent } from './components/tables/tables.component';
import { ChartsComponent } from './components/charts/charts.component';


@NgModule({
  declarations: [
    MaindashboardComponent,
    DashboardComponent,
    FormsComponent,
    TablesComponent,
    ChartsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
