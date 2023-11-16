import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { ProductsService } from 'src/app/ProductsService/products.service';
import { environment } from 'src/environments/environment.development';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
import { NewproductComponent } from '../newproduct/newproduct.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private service:AuthenticationService,private dialog:MatDialog,private products:ProductsService,private sanitizer:DomSanitizer){}
  user:any
  warehouse:any
  cloudinaryUrl = environment.CLOUDINARY_URL
  default = environment.DEFAULT_URL
  location:any
  profile:any

  Url(location:any){
    return this.sanitizer.bypassSecurityTrustUrl(this.location);
  }
  getSanitizedURL(location:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://maps.google.com/maps?q='+location+'&t=&z=10&ie=UTF8&iwloc=&output=embed');
  }

  showProfileDialog(){
    const dialogRef = this.dialog.open(ProfileComponent,{
      width: '40pc',
      maxHeight: '90vh'
    });
  }

  ngOnInit(): void {
   
    this.service.getProfile().subscribe((res:any)=>{
      this.user = res
      console.log(this.user)
      if(this.user.user.type == "FARMER"){
        this.service.getFarmerProfile().subscribe((res:any)=>{
          if(res == "" ){
            this.showProfileDialog()
          }
          else if(res.county != "" || res.society_name != "" || res.total_acreage != ""){
            this.profile = res
            console.log(this.profile)
          }
        })
      }
      else if(this.user.user.type == "WAREHOUSER" || this.user.user.type == "ORIGINWAREHOUSER"){
        this.products.getinventoryProducts().subscribe((res:any)=>{
          this.warehouse = res
        })
      }
      
    })
    
  }
}
