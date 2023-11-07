import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';

import { NicehomepageComponent } from './informationPages/nicehomepage/nicehomepage.component';
import { WarehousedashboardModule } from './warehousedashboard/warehousedashboard.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FarmersDashBoardComponent } from './farmers-dash-board/farmers-dash-board.component';
import { FarmersDashBoardModule } from './farmers-dash-board/farmers-dash-board.module';
import { FooterComponent } from './footer/footer.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ExpoComponent } from './informationPages/expo/expo.component';
import { OriginTripComponent } from './informationPages/origin-trip/origin-trip.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { ProductsnavbarComponent } from './productsnavbar/productsnavbar.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TabsComponent } from './tabs/tabs.component';
import { NotfoundComponent } from './errorPages/notfound/notfound.component';
import { AboutComponent } from './informationPages/about/about.component';
import { PasswordToggleDirective } from './sign-up/password-toggle.directive';
import { FarmerSignUpComponent } from './sign-up/farmer-sign-up/farmer-sign-up.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomepageComponent,
    NicehomepageComponent,
    SignUpComponent,
    FooterComponent,
    ExpoComponent,
    OriginTripComponent,
    CartComponent,
    ProductsComponent,
    ProductsnavbarComponent,
    ProductDetailsComponent,
    TabsComponent,
    NotfoundComponent,
    AboutComponent,
    PasswordToggleDirective,
    FarmerSignUpComponent,
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
    MatSelectModule,
    FormsModule,
    WarehousedashboardModule,
    FarmersDashBoardModule,
    DashboardModule,
    NgxPaginationModule,
    MatGridListModule,
    MatIconModule,
    PasswordStrengthMeterModule.forRoot(),
    BarcodeScannerLivestreamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
