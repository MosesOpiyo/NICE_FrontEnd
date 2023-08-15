import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';

@Component({
  selector: 'app-farmer-header',
  templateUrl: './farmer-header.component.html',
  styleUrls: ['./farmer-header.component.css']
})
export class FarmerHeaderComponent implements OnInit {
  constructor(private service:AuthenticationService){}
  user:any | null = null;;
  letter:any;
  ngOnInit(): void {
    this.service.getProfile().subscribe((res:any)=>{
      this.user = res['user']
      this.letter = res['user']['username'].charAt(0);
    })
  }

}
