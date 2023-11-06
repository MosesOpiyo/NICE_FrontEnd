import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaindashboardComponent } from './components/maindashboard/maindashboard.component';
import { DashboardComponent } from './dashboard.component';
import { FormsComponent } from './components/forms/forms.component';
import { TablesComponent } from './components/tables/tables.component';
import { ChartsComponent } from './components/charts/charts.component';
import { NewproductComponent } from './components/newproduct/newproduct.component';
import { DetailsComponent } from './components/details/details.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { ProfileComponent } from './components/profile/profile.component';

import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { SafePipe } from './components/safe.pipe';
import { ManifestsComponent } from './components/manifests/manifests.component';
import { NewManifestComponent } from './components/manifests/new-manifest/new-manifest.component';
import { SearchPipe } from './components/manifests/new-manifest/search.pipe';
import { ProcessedProductsComponent } from './components/processed-products/processed-products.component';
import { ScanComponent } from './scan/scan.component';


@NgModule({
  declarations: [
    MaindashboardComponent,
    DashboardComponent,
    FormsComponent,
    TablesComponent,
    ChartsComponent,
    NewproductComponent,
    DetailsComponent,
    OrdersComponent,
    AccountsComponent,
    SafePipe,
    ManifestsComponent,
    NewManifestComponent,
    SearchPipe,
    ProcessedProductsComponent,
    ProfileComponent,
    ScanComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    MatAutocompleteModule,
    BarcodeScannerLivestreamModule
  ]
})
export class DashboardModule { }
