import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  navData = [ 
    {
      id: 1,
      route: '',
      icon: 'fa-x',
      name: 'Profile',
    },

    {
      id: 2,
      route: 'products',
      icon: 'fa-x',
      name: 'Inventory',
    },

    {
      id: 3,
      route: 'newProduct',
      icon: 'fa-x',
      name: 'New Products',
    },    
  ]

  constructor(){}

  ngOnInit(): void {}

}
