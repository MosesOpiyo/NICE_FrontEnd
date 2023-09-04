import { Component,OnInit } from '@angular/core';
import { ProductsService } from 'src/app/ProductsService/products.service';
import { MatDialog } from '@angular/material/dialog';
import { NewproductComponent } from '../newproduct/newproduct.component';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  constructor(private products:ProductsService,private service:AuthenticationService,private dialog:MatDialog){}
  displayedColumns: string[] = ['name','grade','lot_type','cup_score','caffeine','acidity','level'];
  farmerProducts:any
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
    })
    
  }
  showProductDialog(){
    const dialogRef = this.dialog.open(NewproductComponent,{
      width: '40pc'
    });
  }

}
