import { GoogleSigninButtonModule,SocialLoginModule,SocialAuthServiceConfig,GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { CUSTOM_ELEMENTS_SCHEMA , NgModule } from '@angular/core';
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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';

import { NicehomepageComponent } from './informationPages/nicehomepage/nicehomepage.component';
import { WarehousedashboardModule } from './warehousedashboard/warehousedashboard.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
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
import { PasswordToggleDirective } from './sign-up/farmer-sign-up/password-toggle.directive';
import { FarmerSignUpComponent } from './sign-up/farmer-sign-up/farmer-sign-up.component';
import { AttributionsComponent } from './informationPages/attributions/attributions.component';
import { DashBoardModule } from './dash-board/dash-board.module';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { FarmComponent } from './farm/farm.component';
import { FarmdetailsComponent } from './farmdetails/farmdetails.component';
import { SponsorshipComponent } from './informationPages/sponsorship/sponsorship.component';
import { ExhibitorsComponent } from './informationPages/exhibitors/exhibitors.component';
import { ExhibitorsponsorComponent } from './informationPages/exhibitorsponsor/exhibitorsponsor.component';
import { TripdialogueComponent } from './informationPages/tripdialogue/tripdialogue.component';
import { VerificationComponent } from './verification/verification.component';
import { TripdetailsComponent } from './informationPages/tripdetails/tripdetails.component';
import { OriginsComponent } from './origins/origins.component';
import { OrigindetailsComponent } from './origindetails/origindetails.component';
import { TermsComponent } from './informationPages/terms/terms.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { FarminfoComponent } from './informationPages/farminfo/farminfo.component';
import { TimelinecontentComponent } from './timelinecontent/timelinecontent.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
// register Swiper custom elements
register();



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
    FarmerSignUpComponent,
    AttributionsComponent,
    FarmComponent,
    FarmdetailsComponent,
    SponsorshipComponent,
    ExhibitorsComponent,
    ExhibitorsponsorComponent,
    TripdialogueComponent,
    VerificationComponent,
    TripdetailsComponent,
    OriginsComponent,
    OrigindetailsComponent,
    TermsComponent,
    AddtocartComponent,
    ForgotpasswordComponent,
    FarminfoComponent,
    TimelinecontentComponent,
    CheckoutComponent,
    UpdatepasswordComponent,
  ],
  // entryComponents:[LoginComponent],
  imports: [
    BrowserModule,
    GoogleSigninButtonModule,
    SocialLoginModule,
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
    NgxPaginationModule,
    MatGridListModule,
    MatIconModule,
    PasswordStrengthMeterModule.forRoot(),
    DashBoardModule
  ],
  providers: [
    {
      provide:'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id:GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '537434316637-217taafkc9uqkp1efl6nr2puekrftkan.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) =>{
          console.error(err)
        }
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
