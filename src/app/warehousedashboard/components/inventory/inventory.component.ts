import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  tableData = [ 
    {
      id: 1,
      sku: 'COF-12345',
      name: 'AB Factory Coffee',
      quantity: '100 SKUs',
      price: '8$',
      location: 'Aisle 1, Shelf 2',
      lastRestockDate: '2023-07-15',
      stockAlert: true
    },

    {
      id: 2,
      sku : 'COF-67890',
      name: 'CD Factory Coffee',
      quantity: '90 SKUs',
      price: '10$',
      location: 'Aisle 3, Shelf 1',
      lastRestockDate: '2023-07-20',
      stockAlert: false
    },

    {
      id: 3,
      sku : 'COF- 27840',
      name: 'EF Factory Coffee',
      quantity: '30 SKUs',
      price: '100$',
      location: 'Aisle 2, Shelf 3',
      lastRestockDate: '2023-07-12',
      stockAlert: true
    },

    {
      id: 4,
      sku : 'COF-97342',
      name: 'GH Factory Coffee',
      quantity: '1900 SKUs',
      price: '200$',
      location: 'Aisle 3, Shelf 4',
      lastRestockDate: '2023-07-02',
      stockAlert: false
    },

    {
      id: 5,
      sku : 'COF-83424',
      name: 'IJ Factory Coffee',
      quantity: '2000 SKUs',
      price: '70$',
      location: 'Aisle 3, Shelf 5',
      lastRestockDate: '2023-07-12',
      stockAlert: false
    }
  ]

  constructor () {}
  ngOnInit(): void {
    
  }
}
