import { Component } from '@angular/core';
import { AuthenticationService } from '../AuthService/authentication.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private service:AuthenticationService,private route:Router){}
  user:any
  cloudinaryUrl = environment.CLOUDINARY_URL
  pic:any

  logOut(){
    this.service.logout()
    this.ngOnInit()
  }

  ngOnInit(): void {}

}
