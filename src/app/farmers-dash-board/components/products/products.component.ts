import { Component } from '@angular/core';
import { ProductsService } from 'src/app/ProductsService/products.service';
import { MatDialog } from '@angular/material/dialog';
import { NewproductComponent } from '../newproduct/newproduct.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private products:ProductsService,private dialog: MatDialog){}

  showProductDialog(){
    const dialogRef = this.dialog.open(NewproductComponent,{
      width: '40pc'
    });
  }
  
  displayedColumns: string[] = ['name','quantity','warehoused_approved','producer'];
  farmerProducts:any
  
  ngOnInit(): void {
    this.products.getFarmerProducts().subscribe((res:any)=>{
      this.farmerProducts = res
    })
  }
}
