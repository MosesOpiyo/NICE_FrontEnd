import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { ProductsService } from 'src/app/ProductsService/products.service';
import { environment } from 'src/environments/environment.development';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private service:AuthenticationService,private products:ProductsService,private sanitizer:DomSanitizer){}
  user:any
  warehouse:any
  cloudinaryUrl = environment.CLOUDINARY_URL
  default = environment.DEFAULT_URL
  location:any

  Url(location:any){
    return this.sanitizer.bypassSecurityTrustUrl(this.location);
  }
  getSanitizedURL(location:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://maps.google.com/maps?q='+location+'&t=&z=10&ie=UTF8&iwloc=&output=embed');
  }

  ngOnInit(): void {
    this.service.getProfile().subscribe((res:any)=>{
      this.user = res
    })
    this.products.getinventoryProducts().subscribe((res:any)=>{
      this.warehouse = res
    })
  }
}
