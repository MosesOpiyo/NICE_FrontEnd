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

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  constructor(private products:ProductsService,private warehouse:WarehouseService,private service:AuthenticationService,private admin:AdminService,private dialog:MatDialog,private snackbar:MatSnackBar){}
  displayedColumns: string[] = ['name','grade','lot_type','cup_score','caffeine','acidity','quantity','shipping'];
  farmerDisplayedColumns: string[] = ['name','grade','lot_type','cup_score','caffeine','acidity','quantity'];
  warehouserDisplayedColumns: string[] = ['name','grade','lot_type','cup_score','caffeine','acidity','quantity'];
  adminDisplayedColumns: string[] = ['email','username','type','date_joined','last_login','terminate'];
  farmerProducts:any
  users:any
  filter:any
  inventoryProducts:any
  user:any

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

  async requestCameraPermissions() {
    
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

}
