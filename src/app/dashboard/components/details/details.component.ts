import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private service:AuthenticationService){}
  user:any
  
  ngOnInit(): void {
    this.service.getProfile().subscribe((res:any)=>{
      this.user = res['user']
    })
  }
}
