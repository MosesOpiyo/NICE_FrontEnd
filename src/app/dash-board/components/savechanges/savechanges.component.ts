import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-savechanges',
  templateUrl: './savechanges.component.html',
  styleUrls: ['./savechanges.component.css']
})
export class SavechangesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
      
  }

}
