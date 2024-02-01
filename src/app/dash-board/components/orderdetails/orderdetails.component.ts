import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrl: './orderdetails.component.css'
})
export class OrderdetailsComponent implements OnInit {

 value = [
  {content: 'Ordered', date: '15/02/2024 10:30', status: 'P'},
  {content: 'Processing', date: '15/02/2024 10:30', status: 'P'},
  {content: 'Shipped'},
  {content: 'Delivered'},
 ]

  constructor() {}

  ngOnInit(): void {
    
  }
}
