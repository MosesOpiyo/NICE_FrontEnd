import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FarmerprofileService } from '../../FarmerProfile/farmerprofile.service';

@Injectable({
  providedIn: 'root'
})
export class StoriesStoreService {
  constructor(private stories:FarmerprofileService){}
  private dataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  data$: Observable<any[]> = this.dataSubject.asObservable();
  updateData(data: any[]): void {
    this.dataSubject.next(data);
  }
  storeStoriesData(){
   this.stories.getStories().subscribe((response:any) =>{
    this.updateData(response)
   })
  }
}
