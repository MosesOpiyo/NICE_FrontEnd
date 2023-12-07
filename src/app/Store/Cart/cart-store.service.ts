import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartStoreService {
  private dataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  data$: Observable<any[]> = this.dataSubject.asObservable();

  updateData(data: any[]): void {
    this.dataSubject.next(data);
  }
}
