import { Component } from '@angular/core';
import { ShippingService } from 'src/app/Shipping/shipping.service';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manifests',
  templateUrl: './manifests.component.html',
  styleUrls: ['./manifests.component.css']
})
export class ManifestsComponent {
  constructor(private shipping:ShippingService,private service:AuthenticationService,private snackbar:MatSnackBar){}
  displayedColumns: string[] = ['number','warehouser','quantity','created_date'];
  manifests:any

  ngOnInit(): void {
    this.shipping.getManifest().subscribe((res:any)=>{
      this.manifests = res
      console.log(this.manifests)
    })
  }
  extractUsername(email: string): string {
    return email.replace(/@.*$/, '');
  }

  approveShipping(id:number){
    this.shipping.approveManifest(id).subscribe((res:any)=>{
      this.snackbar.open(res, 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
      this.service.refreshPage()
    })
  }


}
