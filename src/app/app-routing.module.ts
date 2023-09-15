import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';

import { NicehomepageComponent } from './informationPages/nicehomepage/nicehomepage.component';

import { CoffeeComponent } from './coffee/coffee.component';
import { WarehousedashboardComponent } from './warehousedashboard/warehousedashboard.component';
import { FarmersDashBoardComponent } from './farmers-dash-board/farmers-dash-board.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpoComponent } from './informationPages/expo/expo.component';
import { OriginTripComponent } from './informationPages/origin-trip/origin-trip.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'Signup',component:SignupComponent},
  {path:'homepage',component:NicehomepageComponent},
  {path:'Warehouse',component:WarehousedashboardComponent},
  {path:'Farmer',component:FarmersDashBoardComponent},
  {path:'Coffee',component:CoffeeComponent},
  {path:'DashBoard',component:DashboardComponent},
  {path:'Expo',component:ExpoComponent},
  {path:'Origin-Trip',component:OriginTripComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
