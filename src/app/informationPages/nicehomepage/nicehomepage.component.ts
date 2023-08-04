import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nicehomepage',
  templateUrl: './nicehomepage.component.html',
  styleUrls: ['./nicehomepage.component.css']
})
export class NicehomepageComponent implements OnInit {

  farmerData = [ 
    {
      id: 1,
      name: 'Riakiania Coffee Factory',
      link: "riakiania"
    },

    {
      id: 2,
      name: 'Kariaini coffee factory',
      link: "kariaini"
    },

    {
      id: 3,
      name: 'Gathambi coffee factory',
      link: "gathambi"
    },

    {
      id: 4,
      name: 'Kiaragana coffee factory',
      link: "kiaragana"
    },

    {
      id: 5,
      name: 'Kiambwe Coffee Factory',
      link: "kiambwe"
    },

    {
      id: 6,
      name: 'Mitondo Coffee Factory',
      link: "mitondo"
    }
  ]

  constructor () {}
  ngOnInit(): void {
    
  }
}

