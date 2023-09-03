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
  displayedColumns: string[] = ['name','quantity','warehoused_approved','producer'];
  farmerProducts:any
  user:any

  ngOnInit(): void {
    this.products.getFarmerProducts().subscribe((res:any)=>{
      this.farmerProducts = res
    })
    this.service.getProfile().subscribe((res:any)=>{
      this.user = res['user']
    })
  }
  showProductDialog(){
    const dialogRef = this.dialog.open(NewproductComponent,{
      width: '40pc'
    });
  }

}
