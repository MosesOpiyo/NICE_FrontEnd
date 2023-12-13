import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { ProductsService } from 'src/app/ProductsService/products.service';
import { environment } from 'src/environments/environment.development';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
import { NewproductComponent } from '../newproduct/newproduct.component';
import { SavechangesComponent } from '../savechanges/savechanges.component';
import { AuthenticationStoreService } from 'src/app/AuthServiceStore/authentication-store.service';

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

  constructor(private service:AuthenticationService,private store:AuthenticationStoreService,private dialog:MatDialog,private products:ProductsService,private sanitizer:DomSanitizer){}
  user:any
  warehouse:any
  isOpened:boolean = false
  cloudinaryUrl = environment.CLOUDINARY_URL
  default = environment.DEFAULT_URL
  location:any
  profile:any
  picture:any

  Url(location:any){
    return this.sanitizer.bypassSecurityTrustUrl(this.location);
  }
  getSanitizedURL(location:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://maps.google.com/maps?q='+location+'&t=&z=10&ie=UTF8&iwloc=&output=embed');
  }


  showEditDialog(num: number) {
    if (num == 1) {
      this.dialog.open(SavechangesComponent, {
        data: {id: 1, value: 'County',key:'county',data:this.profile.county},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 2) {
      this.dialog.open(SavechangesComponent, {
        data: {id:2, value: 'Country',key:'country',data:this.profile.country},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 3) {
      this.dialog.open(SavechangesComponent, {
        data: {id:3, value: 'Wet Mill Name',key:'wet_mill_name',data:this.profile.wet_mill_name},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 4) {
      this.dialog.open(SavechangesComponent, {
        data: {id:4, value: 'Society Name',key:'society_name',data:this.profile.society_name},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 5) {
      this.dialog.open(SavechangesComponent, {
        data: {id:5, value: 'Factory Chairman',key:'factory_chairman',data:this.profile.factory_chairman},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 6) {
      this.dialog.open(SavechangesComponent, {
        data: {id:6, value: 'Factory Manager',key:'factory_manager',data:this.profile.factory_manager},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 7) {
      this.dialog.open(SavechangesComponent, {
        data: {id:7, value: 'Number of Farmers',key:'no_of_farmers',data:this.profile.no_of_farmers},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 8) {
      this.dialog.open(SavechangesComponent, {
        data: {id:8, value: 'Male Farmers',key:'men',data:this.profile.men},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 9) {
      this.dialog.open(SavechangesComponent, {
        data: {id:9, value: 'Female Farmers',key:'women',data:this.profile.women},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 10) {
      this.dialog.open(SavechangesComponent, {
        data: {id:10, value: 'Total Acreage',key:'total_acreage',data:this.profile.total_acreage},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 11) {
      this.dialog.open(SavechangesComponent, {
        data: {id:11, value: 'Number of Trees',key:'no_of_trees',data:this.profile.no_of_trees},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 12) {
      this.dialog.open(SavechangesComponent, {
        data: {id:12, value: 'Altitude',key:'altitude',data:this.profile.altitude},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 13) {
      this.dialog.open(SavechangesComponent, {
        data: {id:13, value: 'Harvest Season',key:'harvest_season',data:this.profile.harvest_season},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 14) {
      this.dialog.open(SavechangesComponent, {
        data: {id:14, value: 'Annual Rainfall Amount',key:'annual_rainfall_amount',data:this.profile.annual_rainfall_amount},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 15) {
      this.dialog.open(SavechangesComponent, {
        data: {id:15, value: 'Coffee Variety',key:'coffee_variety',data:this.profile.coffee_variety},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 16) {
      this.dialog.open(SavechangesComponent, {
        data: {id:16, value: 'Farming Method',key:'farming_method',data:this.profile.farming_method},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 17) {
      this.dialog.open(SavechangesComponent, {
        data: {id:17, value: 'Certification Type',key:'certification_type',data:this.profile.certification_type},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 18) {
      this.dialog.open(SavechangesComponent, {
        data: {id:18, value: 'Soil Type',key:'soil_type',data:this.profile.soil_type},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 19) {
      this.dialog.open(SavechangesComponent, {
        data: {id:19, value: 'Processing Method',key:'processing_method',data:this.profile.processing_method},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 20) {
      this.dialog.open(SavechangesComponent, {
        data: {id:20, value: 'Cupping Notes',key:'cupping_notes',data:this.profile.cupping_notes},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 21) {
      this.dialog.open(SavechangesComponent, {
        data: {id:21, value: 'Availability',key:'availability',data:this.profile.availability},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 22) {
      this.dialog.open(SavechangesComponent, {
        data: {id:22, value: 'Your History',key:'grower_history',data:this.profile.grower_history},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 23) {
      this.dialog.open(SavechangesComponent, {
        data: {id:23, value: 'Location',key:'location',data:this.profile.location},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
    else if (num == 24) {
      this.dialog.open(SavechangesComponent, {
        data: {id:24, value: 'Farm Area',key:'farm_area',data:this.profile.farm_area},
        width: '25pc',
        autoFocus: false,
        maxHeight: '90vh'
      })
    }
  }

  showProfileDialog(){
    const dialogRef = this.dialog.open(ProfileComponent,{
      width: '40pc',
      maxHeight: '90vh'
    });
  }
  postProfilePicture(event: any){
    if(this.picture > 0){
    }else{
      this.picture = event.target.files[0];
      let form = new FormData();
      form.append('image',this.picture),
      this.service.profilePicture(form)
      
    }
  }

  ngOnInit(): void {
    this.store.storeProfileData()
    this.store.data$.subscribe((res:any)=>{
      this.user = res
      if(this.user.user.type == "FARMER"){
        this.service.getFarmerProfile().subscribe((res:any)=>{
          this.store.updateFarmerData(res)
          this.store.farmerData$.subscribe((res:any) => {
            if(res){
              this.profile = res
<<<<<<< HEAD
            }else{
              if(this.isOpened == false){
                this.isOpened = true
                this.showProfileDialog()
              }
              else{
                false
              }
=======
              console.log(this.profile)
>>>>>>> f68a3e0f55371a4cf876c559d2c3079d568fc338
            }
          })
        })
      }
      else if(this.user.user.type == "WAREHOUSER" || this.user.user.type == "ORIGINWAREHOUSER"){
        this.products.getinventoryProducts().subscribe((res:any)=>{
          this.warehouse = res;
        })
      }
      
    })
    
  }
}