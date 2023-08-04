import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';

import { NicehomepageComponent } from './informationPages/nicehomepage/nicehomepage.component';

import { CoffeeComponent } from './coffee/coffee.component';
import { WarehousedashboardComponent } from './warehousedashboard/warehousedashboard.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'Signup',component:SignupComponent},
  {path:'homepage',component:NicehomepageComponent},
  {path:'Warehouse',component:WarehousedashboardComponent},
  {path:'Coffee',component:CoffeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
