import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { ProductsService } from 'src/app/ProductsService/products.service';
import { environment } from 'src/environments/environment.development';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
import { NewproductComponent } from '../newproduct/newproduct.component';
import { SavechangesComponent } from '../savechanges/savechanges.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  // modal
  isModalOpen = false;
  toggleModal(): void {
    this.isModalOpen = !this.isModalOpen;
    console.log("im clicked")
  }

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


  showEditDialog(num: number) {
    if (num == 1) {
      this.dialog.open(SavechangesComponent, {data: {id: 1, value: 'County'}})
    }
    else if (num == 2) {
      this.dialog.open(SavechangesComponent, {data: {id:2, value: 'Estate Name'}})
    }
    else if (num == 3) {
      this.dialog.open(SavechangesComponent, {data: {id:3, value: 'Owner'}})
    }
    else if (num == 4) {
      this.dialog.open(SavechangesComponent, {data: {id:4, value: 'Total Acreage'}})
    }
    else if (num == 5) {
      this.dialog.open(SavechangesComponent, {data: {id:5, value: 'No. of Trees'}})
    }
    else if (num == 6) {
      this.dialog.open(SavechangesComponent, {data: {id:6, value: 'Altitude'}})
    }
    else if (num == 7) {
      this.dialog.open(SavechangesComponent, {data: {id:7, value: 'Harvest Season'}})
    }
    else if (num == 8) {
      this.dialog.open(SavechangesComponent, {data: {id:8, value: 'Annual Rainfall Amt'}})
    }
    else if (num == 9) {
      this.dialog.open(SavechangesComponent, {data: {id:9, value: 'Annual Temp Amt'}})
    }
    else if (num == 10) {
      this.dialog.open(SavechangesComponent, {data: {id:10, value: 'Coffe Varieties'}})
    }
    else if (num == 11) {
      this.dialog.open(SavechangesComponent, {data: {id:11, value: 'Farming Method'}})
    }
    else if (num == 12) {
      this.dialog.open(SavechangesComponent, {data: {id:12, value: 'Cherry Production'}})
    }
    else if (num == 13) {
      this.dialog.open(SavechangesComponent, {data: {id:13, value: 'Soil Type'}})
    }
    else if (num == 14) {
      this.dialog.open(SavechangesComponent, {data: {id:14, value: 'Processing Methods'}})
    }
    else if (num == 15) {
      this.dialog.open(SavechangesComponent, {data: {id:15, value: 'Drying Method'}})
    }
    else if (num == 16) {
      this.dialog.open(SavechangesComponent, {data: {id:16, value: 'Cupping Notes'}})
    }
    else if (num == 17) {
      this.dialog.open(SavechangesComponent, {data: {id:17, value: 'Availability'}})
    }
    else if (num == 18) {
      this.dialog.open(SavechangesComponent, {data: {id:18, value: 'Grower`s History'}})
    }
    else if (num == 19) {
      this.dialog.open(SavechangesComponent, {data: {id:19, value: 'Location'}})
    }
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
      console.log(this.user);
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
          this.warehouse = res;
          console.log(this.warehouse)
        })
      }
      
    })
    
  }
}
