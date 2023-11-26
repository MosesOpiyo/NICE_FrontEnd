import { Component,OnInit } from '@angular/core';
import { ProductsService } from 'src/app/ProductsService/products.service';
import { MatDialog } from '@angular/material/dialog';
import { NewproductComponent } from '../newproduct/newproduct.component';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { AdminService } from 'src/app/AdminService/admin.service';
import { NewManifestComponent } from '../manifests/new-manifest/new-manifest.component';
import { WarehouseService } from 'src/app/Service/Warehouse/warehouse.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ScanComponent } from '../../scan/scan.component';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { ProcessedProductsComponent } from '../processed-products/processed-products.component';
import { NewprocessedproductComponent } from '../newprocessedproduct/newprocessedproduct.component';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  constructor(private products:ProductsService,private warehouse:WarehouseService,private service:AuthenticationService,private admin:AdminService,private dialog:MatDialog,private snackbar:MatSnackBar){}
  displayedColumns: string[] = ['name','grade','lot_type','cup_score','caffeine','acidity','quantity','shipping'];
  farmerDisplayedColumns: string[] = ['name','grade','lot_type','cup_score','caffeine','acidity','quantity'];
  warehouserDisplayedColumns: string[] = ['name','grade','lot_type','cup_score','caffeine','acidity','quantity','processed'];
  adminDisplayedColumns: string[] = ['email','username','type','date_joined','last_login','terminate'];
  farmerProducts:any
  users:any
  filter:any
  inventoryProducts:any
  user:any
  fileSelector:boolean = false
  processed:boolean = false

  selectFile(){
    this.fileSelector = true
  }

  ngOnInit(): void {
    this.service.getProfile().subscribe((res:any)=>{
      this.user = res['user']
      if(this.user.type=='FARMER'){
        this.products.getFarmerProducts().subscribe((res:any)=>{
          this.farmerProducts = res
          console.log(this.farmerProducts)
        })
      }
      else if(this.user.type=='ORIGINWAREHOUSER'){
        this.products.getShippingProducts().subscribe((res:any)=>{
          this.farmerProducts = res
          console.log(res)
        })
      }
      else if(this.user.type=='WAREHOUSER'){
        this.products.getinventoryProducts().subscribe((res:any)=>{
          this.inventoryProducts = res['warehoused_products']
          console.log(res['warehoused_products'])
        })
      }
      else if(this.user.type=='ADMIN'){
        this.initUserFilter("Buyers")
      }
    })
    
  }
  initUserFilter(filter:any){
    if(filter == "Warehousers"){
      this.filter = "Warehousers"
      this.users = null
      this.admin.getWarehousers().subscribe((res:any)=>{
        this.users = res
      })
    }
    if(filter == "Farmers"){
      this.filter = "Farmers"
      this.users = null
      this.admin.getFarmers().subscribe((res:any)=>{
        this.users = res
      })
    }
    if(filter == "Admins"){
      this.filter = "Admins"
      this.users = null
      this.admin.getActiveAdmins().subscribe((res:any)=>{
        this.users = res
      })
    }
    if(filter == "Buyers"){
      this.filter = "Buyers"
      this.admin.getBuyers().subscribe((res:any)=>{
        this.users = res
      })
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];

    if (file) {
      this.fileSelector = false
      this.readXlsxFile(file);
    }
  }

  private readXlsxFile(file: File): void {
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const data: string = e.target.result;

      // Read the XLSX file
      const workbook: XLSX.WorkBook = XLSX.read(data, { type: 'binary' });

      // Assuming you have only one sheet in your Excel file
      const sheetName: string = workbook.SheetNames[0];
      const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];

      // Convert the worksheet to JSON
      const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      const dataRows: any[] = jsonData.filter(row => row.length > 0).slice(1);
      const header = jsonData[0]
      // Now you can use jsonData to access the data from the Excel file
      const jsonDataObjects: any[] = dataRows.map(row => {
        const obj: any = {};
        header.forEach((key:any, index:any) => {
          obj[key] = row[index];
        });
        return obj
      });
      console.log('Processed Data:', jsonDataObjects);
    };

    reader.readAsBinaryString(file);
  }

  makeRequest(){
    this.products.makeProductRequest().subscribe((res:any)=>{
      this.snackbar.open('Request successful.Please wait for response', 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    })
  }

  showProductDialog(){
    const dialogRef = this.dialog.open(NewproductComponent,{
      width: '40pc'
    });
  }

  showScanDialog(){
    const dialogRef = this.dialog.open(ScanComponent,{
      width: '40pc'
    });
  }

  manifestDialog(object:any){
    const dialogRef = this.dialog.open(NewManifestComponent,{
      width: '40pc',
      data:{ object: object,
        name:object.name
      }
    });
  }

  ProcessedProductDialog(id:any){
    const dialogRef = this.dialog.open(NewprocessedproductComponent,{
      width: '40pc',
      data:{ 
        id:id
      }
    });
  }

}
