import { Component, OnInit } from '@angular/core';
import { AuthenticationStoreService } from 'src/app/AuthServiceStore/authentication-store.service';
import { Profile } from 'src/app/Classes/ProfileClass/profile';
import { CartStoreService } from 'src/app/Store/Cart/cart-store.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-cartdata',
  templateUrl: './cartdata.component.html',
  styleUrl: './cartdata.component.css'
})
export class CartdataComponent implements OnInit {
  user:Profile;
  userCart:any | null = null;
  cloudinaryUrl = environment.CLOUDINARY_URL

   constructor(private cart:CartStoreService, private store:AuthenticationStoreService){}

    ngOnInit(): void {
    this.store.storeProfileData()
    this.store.data$.subscribe((res:any)=>{
      this.user = res
      console.log(this.user)
    })

    this.cart.data$.subscribe((data:any) =>{
      this.userCart = data['products']
      console.log(this.userCart.product)
    })
  }
}
