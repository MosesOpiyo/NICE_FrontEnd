import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BarcodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { MatDialogModule } from '@angular/material/dialog';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { DashBoardComponent } from './dash-board.component';
import { DashboardheaderComponent } from './components/dashboardheader/dashboardheader.component';
import { DashboardsidebarComponent } from './components/dashboardsidebar/dashboardsidebar.component';
import { DetailsComponent } from './components/details/details.component';
import { TablesComponent } from './components/tables/tables.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { FormsComponent } from './components/forms/forms.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewproductComponent } from './components/newproduct/newproduct.component';

import {MatStepperModule} from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
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
import { SavechangesComponent } from './components/savechanges/savechanges.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { MessagesComponent } from './components/message/messages/messages.component';
import { ImportantComponent } from './components/message/important/important.component';
import { UnreadComponent } from './components/message/unread/unread.component';
import { TrashComponent } from './components/message/trash/trash.component';
import { InboxComponent } from './components/message/inbox/inbox.component';
import { FilterPipe } from './components/manifests/filter.pipe';


@NgModule({
  declarations: [
    DashBoardComponent,
    DashboardheaderComponent,
    DashboardsidebarComponent,
    NewproductComponent,
    DetailsComponent,
    TablesComponent,
    OrdersComponent,
    AccountsComponent,
    FormsComponent,
    SafePipe,
    ManifestsComponent,
    NewManifestComponent,
    SearchPipe,
    ProcessedProductsComponent,
    ProfileComponent,
    ScanComponent,
    SavechangesComponent,
    TimelineComponent,
    PaymentsComponent,
    MessagesComponent,
    ImportantComponent,
    UnreadComponent,
    TrashComponent,
    InboxComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
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
    BarcodeScannerLivestreamModule,
    MatDialogModule,
    MatListModule,
  ]
})
export class DashBoardModule { }
