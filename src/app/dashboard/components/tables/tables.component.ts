import { Component,OnInit } from '@angular/core';
import { ProductsService } from 'src/app/ProductsService/products.service';
import { MatDialog } from '@angular/material/dialog';
import { NewproductComponent } from '../newproduct/newproduct.component';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { AdminService } from 'src/app/AdminService/admin.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  constructor(private products:ProductsService,private service:AuthenticationService,private admin:AdminService,private dialog:MatDialog){}
  displayedColumns: string[] = ['name','grade','lot_type','cup_score','caffeine','acidity','level','request'];
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
        })
      }
      else if(this.user.type=='WAREHOUSER'){
        this.products.getinventoryProducts().subscribe((res:any)=>{
          this.inventoryProducts = res['warehoused_products']
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

  showProductDialog(){
    const dialogRef = this.dialog.open(NewproductComponent,{
      width: '40pc'
    });
  }

}
