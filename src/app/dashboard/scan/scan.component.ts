import { Dialog } from '@angular/cdk/dialog';
import { Component,ViewChild, AfterViewInit,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BarcodeScannerLivestreamComponent } from "ngx-barcode-scanner";
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { ProductsService } from 'src/app/ProductsService/products.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
  
})
export class ScanComponent implements AfterViewInit {
  constructor(private product:ProductsService,private snackbar:MatSnackBar,private dialog:Dialog,private service:AuthenticationService){}
  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner!: BarcodeScannerLivestreamComponent;

  barcodeValue: any;

  ngAfterViewInit() {
    this.barcodeScanner.start();
  }

  onValueChanges(result:any) {
    this.barcodeValue = result.codeResult.code;
    this.getManifest(this.barcodeValue)
  }
  getManifest(number:any){
    this.dialog.closeAll()
    this.product.receiveManifest(number).subscribe((res:any)=>{
      this.service.refreshPage()
      this.snackbar.open(`Manifest:${number} has been added`, 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
  })}

  onStarted(started:any) {
    console.log(started);
  }

  

}
