import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';

import { NicehomepageComponent } from './informationPages/nicehomepage/nicehomepage.component';
import { WarehousedashboardModule } from './warehousedashboard/warehousedashboard.module';

import { CoffeeNavbarComponent } from './coffee-navbar/coffee-navbar.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FarmersDashBoardComponent } from './farmers-dash-board/farmers-dash-board.component';
import { FarmersDashBoardModule } from './farmers-dash-board/farmers-dash-board.module';
import { FooterComponent } from './footer/footer.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ExpoComponent } from './informationPages/expo/expo.component';
import { OriginTripComponent } from './informationPages/origin-trip/origin-trip.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    LoginComponent,
    HomepageComponent,
    NicehomepageComponent,
    CoffeeNavbarComponent,
    CoffeeComponent,

    SignUpComponent,
    FooterComponent,
    ExpoComponent,
    OriginTripComponent
  ],
  entryComponents:[LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    FormsModule,
    WarehousedashboardModule,
    FarmersDashBoardModule,
    DashboardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
