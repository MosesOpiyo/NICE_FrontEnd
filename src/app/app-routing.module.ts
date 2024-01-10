import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

import { NicehomepageComponent } from './informationPages/nicehomepage/nicehomepage.component';

import { WarehousedashboardComponent } from './warehousedashboard/warehousedashboard.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ExpoComponent } from './informationPages/expo/expo.component';
import { OriginTripComponent } from './informationPages/origin-trip/origin-trip.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotfoundComponent } from './errorPages/notfound/notfound.component';
import { AboutComponent } from './informationPages/about/about.component';
import { AttributionsComponent } from './informationPages/attributions/attributions.component';
import { FarmComponent } from './farm/farm.component';
import { FarmdetailsComponent } from './farmdetails/farmdetails.component';
import { TripdetailsComponent } from './informationPages/tripdetails/tripdetails.component';
import { OriginsComponent } from './origins/origins.component';
import { OrigindetailsComponent } from './origindetails/origindetails.component';
import { TermsComponent } from './informationPages/terms/terms.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'homepage',component:NicehomepageComponent},
  {path:'Warehouse',component:WarehousedashboardComponent},
  {path:'DashBoard',component:DashBoardComponent},
  {path:'Expo',component:ExpoComponent},
  {path:'Origin-Trip',component:OriginTripComponent},
  {path: 'Cart', component:CartComponent},
  {path: 'Products', component:ProductsComponent},
  {path: 'Products/:id', component: ProductDetailsComponent},
  // {path: 'Products/:productId', component: ProductDetailsComponent},
  {path: '404', component: NotfoundComponent},
  {path: 'about', component: AboutComponent},
  {path: 'attributions', component: AttributionsComponent},
  {path: 'farms/:originId', component: FarmComponent},
  {path: 'farm/:farmId', component:FarmdetailsComponent},
  {path: 'trip-details/:monthid', component: TripdetailsComponent},
  {path: 'origins', component: OriginsComponent},
  {path: 'origin/:originId', component: OrigindetailsComponent},
  {path: 'terms and conditions', component: TermsComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        scrollOffset: [0, 150]
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
