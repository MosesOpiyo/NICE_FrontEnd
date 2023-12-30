import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sponsorship',
  templateUrl: './sponsorship.component.html',
  styleUrls: ['./sponsorship.component.css']
})
export class SponsorshipComponent {
  name:any;
  email: any;
  phone: any;
  companyName:any;
  designation:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {sponsor: string}) { }

}
