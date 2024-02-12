import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-farminfo',
  templateUrl: './farminfo.component.html',
  styleUrls: ['./farminfo.component.css']
})
export class FarminfoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    story: string,
    farmName: string,
    imageUrl1: string,
    imageUrl2: string,
    rating: [string, string, string, string, string]
  }) { }
}
