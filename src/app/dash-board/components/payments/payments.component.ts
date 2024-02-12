import { Component } from '@angular/core';
import { AuthenticationStoreService } from 'src/app/AuthServiceStore/authentication-store.service';
import { PaymentService } from 'src/app/PaymentService/payment.service';



@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {

  displayedColumns: string[] = ['buyer','products','country','warehouse','date','quantity','marker','amount','is_fulfilled'];
  payments:any

  constructor(private payment:PaymentService,private service:AuthenticationStoreService){}

  ngOnInit(): void {
    this.payment.getPayments().subscribe((res:any) =>{
      this.payments = res
      console.log(this.payments)
    })
  }
}
