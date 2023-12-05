import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../AuthService/authentication.service';
import { Router } from '@angular/router';
import { ProductsService } from '../ProductsService/products.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-farmdetails',
  templateUrl: './farmdetails.component.html',
  styleUrls: ['./farmdetails.component.css']
})
export class FarmdetailsComponent {

  user:any | null = null;
  ratings : number[] = [];
  p:number = 1;
  itemsPerPage:number = 10;
  products:any;
  cloudinaryUrl = environment.CLOUDINARY_URL;
  total:any;

  // tabbed-info tabs
  tabs2: string [] = ['Seller Info', 'Reviews'];
  activatedTabIndex2: number = 0;
 
  // detailedtabs tab index
  tabChange2(tabIndex: number) {
    this.activatedTabIndex2 = tabIndex;
  }

  constructor(private dialog: MatDialog,private service:AuthenticationService,private route:Router, private product:ProductsService){}

  //Variety sidenav
  isShowVariety = true;
  toggleVarietyOn() {
    this.isShowVariety = !this.isShowVariety;
  }

  //Price sidenav
  isShowPrice = false;
  togglePriceOn() {
    this.isShowPrice = !this.isShowPrice;
  }

  averageRating(item:any){
    const list :number[] = []
    item.rating.forEach((ratingItem:any) => {
      list.push(ratingItem.rating)
    });
    const sum = list.reduce((acc, item) => acc + item, 0);
    const total = Math.floor(sum / list.length);
    return total
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('Token')){
      this.service.getProfile().subscribe((res:any)=>{
        this.user = res['user']
        if(this.user.type == "FARMER"){
          this.route.navigate(['dash-board'])
        }
        else if(this.user.type == "WAREHOUSER"){
          this.route.navigate(['dash-board'])
        }
        else if(this.user.type == "ADMIN"){
          this.route.navigate(['dash-board'])
        }
        else{
          false
        }
      })
    }
    else{
      console.log("No token")
    }

    this.product.getProcessedProducts().subscribe((res:any)=>{
      this.products = res
      console.log(this.products)
      this.products.forEach((product:any) => {
        product.rating.forEach((ratingItem: any) => {
          this.ratings.push(ratingItem.rating)
        });
      });
      const sum = this.ratings.reduce((acc, item) => acc + item, 0);
      this.total = Math.floor(sum / this.ratings.length);
    })

  }
}
