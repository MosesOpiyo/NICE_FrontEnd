import { Component,OnInit } from '@angular/core';
import { AdminService } from 'src/app/AdminService/admin.service';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  constructor(private service:AuthenticationService,private admin:AdminService,private location:Location){}
  adminDisplayedColumns: string[] = ['id','index','email','username','phone_number','farmer_registration_number','activation','terminate'];
  users:any
  user:any

  ngOnInit(): void {
    this.service.getProfile().subscribe((res:any)=>{
      this.user = res['user']
      this.admin.getPendingAccounts().subscribe((res:any)=>{
        this.users = res
      })
    }) 
  }
  activateAccount(id:number){
    this.admin.pendingActivation(id)
    
  }

}
