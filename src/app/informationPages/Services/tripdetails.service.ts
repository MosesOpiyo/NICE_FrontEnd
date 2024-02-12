import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripdetailsService {

  tripdetails = [
    {
      id: 1,
      name: 'Kenya',
      month: 'January',
      region: 'Nyeri'
    },

    {
      id: 2,
      name: 'Rwanda',
      month: 'July',
      region: 'Kigali'
    },
    {
      id: 3,
      name: 'Ethiopia',
      month: 'November',
      region: 'Addis Ababa'
    }
  ]

  constructor() { }
}
