import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';

import { NicehomepageComponent } from './informationPages/nicehomepage/nicehomepage.component';

import { WarehousedashboardComponent } from './warehousedashboard/warehousedashboard.component';
import { FarmersDashBoardComponent } from './farmers-dash-board/farmers-dash-board.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpoComponent } from './informationPages/expo/expo.component';
import { OriginTripComponent } from './informationPages/origin-trip/origin-trip.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotfoundComponent } from './errorPages/notfound/notfound.component';
import { AboutComponent } from './informationPages/about/about.component';
import { AttributionsComponent } from './informationPages/attributions/attributions.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'homepage',component:NicehomepageComponent},
  {path:'Warehouse',component:WarehousedashboardComponent},
  {path:'Farmer',component:FarmersDashBoardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'Expo',component:ExpoComponent},
  {path:'Origin-Trip',component:OriginTripComponent},
  {path: 'Cart', component:CartComponent},
  {path: 'Products', component:ProductsComponent},
  {path: 'Products/:id', component: ProductDetailsComponent },
  { path: 'Products/:productId', component: ProductDetailsComponent },
  { path: '404', component: NotfoundComponent },
  { path: 'about', component: AboutComponent },
  { path: 'attributions', component: AttributionsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
