import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private service:AuthenticationService){}
  user:any
  cloudinaryUrl = environment.CLOUDINARY_URL
  default = environment.DEFAULT_URL
  ngOnInit(): void {
    this.service.getProfile().subscribe((res:any)=>{
      this.user = res
    })
  }
}
