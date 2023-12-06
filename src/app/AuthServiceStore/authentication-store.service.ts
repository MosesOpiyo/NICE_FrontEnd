import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticationService } from '../AuthService/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationStoreService {
  private auth:AuthenticationService
  private dataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private farmerDataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  data$: Observable<any[]> = this.dataSubject.asObservable();
  farmerData$: Observable<any[]> = this.farmerDataSubject.asObservable();
  updateData(data: any[]): void {
    this.dataSubject.next(data);
  }
  updateFarmerData(data: any[]): void {
    this.farmerDataSubject.next(data);
  }
  storeProfileData(){
    this.auth.getProfile().subscribe((res:any) => {
      this.data$ = res
    })
  }
}
