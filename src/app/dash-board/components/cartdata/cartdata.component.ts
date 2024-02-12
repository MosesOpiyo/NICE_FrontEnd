import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationStoreService } from 'src/app/AuthServiceStore/authentication-store.service';
import { Profile } from 'src/app/Classes/ProfileClass/profile';
import { CartStoreService } from 'src/app/Store/Cart/cart-store.service';
import { environment } from 'src/environments/environment.development';
import { MatDialog } from '@angular/material/dialog';
import { OrderdetailsComponent } from '../orderdetails/orderdetails.component';

@Component({
  selector: 'app-cartdata',
  templateUrl: './cartdata.component.html',
  styleUrls: ['./cartdata.component.css']
})
export class CartdataComponent implements OnInit {
  tabsArray: string[] = ['Orders', 'Cancelled Orders'];
  activatedTabIndex: number = 0;
  user:Profile;
  userCart:any | null = null;
  cloudinaryUrl = environment.CLOUDINARY_URL;
  
  constructor(private cart:CartStoreService, private store:AuthenticationStoreService, private dialog: MatDialog){}

  setTab(index:number) {
    this.activatedTabIndex = index;
  }

  tabChange(tabIndex: number) {
    this.activatedTabIndex = tabIndex;
  }

  ngOnInit(): void {
    this.store.storeProfileData()
    this.store.data$.subscribe((res:any)=>{
      this.user = res
    })

    this.cart.data$.subscribe((data:any) =>{
      this.userCart = data['products']
      console.log(this.userCart.product)
    })
  }

  showorderdetailsDialog(){
    const dialogRef = this.dialog.open(OrderdetailsComponent,{
      width: '30pc',
      maxWidth: '90vw',
      autoFocus: false,
      maxHeight: '100vh'
    }); 
  }
}
